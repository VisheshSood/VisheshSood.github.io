#!/usr/bin/env bash
# Auto-deploy for the Innovative Gloves website (runs on the EC2 box).
#
# A cron job runs this every 5 minutes. It fetches origin/main and, ONLY if the
# branch actually moved, rebuilds dist/. Apache serves dist/ directly, so a
# successful build publishes the change immediately.
#
# System Node on the box is too old for Astro, so we load Node 22 via nvm.
# All output is appended to deploy.log next to this script.
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BRANCH="main"
LOG="$REPO_DIR/deploy.log"
LOCK="$REPO_DIR/.deploy.lock"

# Send everything (stdout+stderr) to the log with a header per run.
exec >>"$LOG" 2>&1
echo "===== $(date -u '+%Y-%m-%dT%H:%M:%SZ') deploy.sh start ====="

# Prevent overlapping runs: a build can outlast the 5-minute cron interval.
exec 9>"$LOCK"
if ! flock -n 9; then
  echo "another deploy is already running; skipping this tick"
  exit 0
fi

cd "$REPO_DIR"

# Load nvm + Node 22 (system Node 20 is too old for Astro 7).
export NVM_DIR="${NVM_DIR:-/home/ubuntu/.nvm}"
# shellcheck disable=SC1091
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use 22 >/dev/null 2>&1 || { echo "ERROR: nvm/Node 22 not available"; exit 1; }

git fetch --quiet origin "$BRANCH"
LOCAL="$(git rev-parse HEAD)"
REMOTE="$(git rev-parse "origin/$BRANCH")"

if [ "$LOCAL" = "$REMOTE" ]; then
  echo "up to date at ${LOCAL:0:7}; nothing to do"
  exit 0
fi

echo "updating ${LOCAL:0:7} -> ${REMOTE:0:7}"
git reset --hard "origin/$BRANCH"

# Only reinstall deps when the lockfile changed — keeps routine deploys fast.
if ! git diff --quiet "$LOCAL" "$REMOTE" -- package-lock.json; then
  echo "package-lock.json changed; running npm ci"
  npm ci
fi

npm run build
echo "deploy complete at $(git rev-parse --short HEAD)"
