#!/usr/bin/env python3
"""Verify every row of redirect-map.csv + host variants. Usage: test-redirects.py <redirect-map.csv> [--base http://127.0.0.1:PORT] [--https-base ...]
Live mode (no --base): requests the real URLs.  Local mode: sends Host headers to a test server."""
import csv,sys,urllib.parse,http.client,ssl
args=sys.argv[1:]; mapf=args[0]; base80=base443=None
if "--base" in args: base80=args[args.index("--base")+1]
if "--https-base" in args: base443=args[args.index("--https-base")+1]
CANON="https://www.innovativegloves.net"
def req(url):
    u=urllib.parse.urlsplit(url); path=(u.path or "/")+("?"+u.query if u.query else "")
    if base80 or base443:
        b=urllib.parse.urlsplit(base443 if u.scheme=="https" else base80)
        C=http.client.HTTPSConnection if b.scheme=="https" else http.client.HTTPConnection
        kw={"context":ssl._create_unverified_context()} if b.scheme=="https" else {}
        c=C(b.hostname,b.port,timeout=15,**kw); c.putrequest("GET",path,skip_host=True,skip_accept_encoding=True); c.putheader("Host",u.hostname); c.endheaders()
    else:
        C=http.client.HTTPSConnection if u.scheme=="https" else http.client.HTTPConnection
        c=C(u.hostname,timeout=15); c.request("GET",path)
    r=c.getresponse(); loc=r.getheader("Location"); r.read(); c.close(); return r.status,loc
def follow(url,maxhops=6):
    chain=[]; seen=set()
    while True:
        st,loc=req(url); chain.append((url,st))
        if st in(301,302,303,307,308) and loc:
            nxt=urllib.parse.urljoin(url,loc)
            if nxt in seen or len(chain)>maxhops: return chain,"LOOP"
            seen.add(url); url=nxt; continue
        return chain,None
fails=0; n=0
rows=list(csv.DictReader(open(mapf)))
tests=[]
for r in rows:
    if r["kind"]=="Host":
        for scheme_host in ["http://innovativegloves.net","http://www.innovativegloves.net","https://innovativegloves.net"]:
            for p in ["/","/gloves/nitrile/","/about/?utm_source=x"]:
                tests.append((scheme_host+p,CANON+p,301,"host"))
        continue
    old=r["old"]; new=r["new"]
    exp_status=410 if new=="(none)" else 301
    tests.append((old,None if new=="(none)" else new,exp_status,"legacy"))
    # legacy path requested on the non-canonical hosts must still be ONE hop to the final page
    p=urllib.parse.urlsplit(old).path
    for h in ["http://innovativegloves.net","http://www.innovativegloves.net","https://innovativegloves.net"]:
        tests.append((h+p,None if new=="(none)" else new,exp_status,"legacy@"+h.split("//")[0]+h.split("//")[1].split(".")[0]))
seen=set()
for old,exp,exp_status,kind in tests:
    if (old,kind) in seen: continue
    seen.add((old,kind)); n+=1
    try: chain,err=follow(old)
    except Exception as e: print("FAIL",old,"error",e); fails+=1; continue
    first=chain[0][1]; final_url,final_st=chain[-1]; hops=len(chain)-1
    ok = (err is None and first==exp_status)
    if exp_status==301: ok = ok and hops==1 and final_url==exp and final_st==200
    if exp_status==410: ok = ok and hops==0
    if not ok:
        fails+=1; print("FAIL",kind,old,"->"," -> ".join(f"{u} [{s}]" for u,s in chain[1:]) or f"[{first}]","| expected",exp_status,exp, err or "")
print(f"{n} checks, {fails} failures")
sys.exit(1 if fails else 0)
