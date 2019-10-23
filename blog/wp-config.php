<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost:8889' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'P|U@?A{cD:PyTLr^E))}Pqc6[a)6[N6IP3y1[{#hUx`.;_LX_$NS6f~*yE$a1pfq' );
define( 'SECURE_AUTH_KEY',  '4C=yCuqo<ub}uL_)RK`kA(s)6FZ+70Hb7`O&yx9/UQUZF`sfljyOVTN2@v>`~J%@' );
define( 'LOGGED_IN_KEY',    '#f_(wSW/n/;hue5gq /zUNyE,1=zb#]VV?v?I@7MMx.kL.cPbyPrBj*V>71r94Sz' );
define( 'NONCE_KEY',        '0fJI{B}nc$ c/Pu}uFtrZ{F+NjljS=dFk.nIcN3N$Xb+qEt7ObWo~4|~T=/w0KiV' );
define( 'AUTH_SALT',        'n`X5}309*^WK&9S0FWbH{M `Zy?u<`qT9Ctk19j9-q;Nb:s[CDim~8/J$;-^H4`T' );
define( 'SECURE_AUTH_SALT', '-W%nzOdR/6A+EAW-.w`YfRAL<zoEd!oQ+)S:N_88;q*,Eoi-aNSs@.9?fF`bj1C8' );
define( 'LOGGED_IN_SALT',   '&xY4?+wKR2pj,M!n=M$DguVfwtRq8m5z,3Qz5~j)}%TSfRvtFHp46AUg$])cc13Q' );
define( 'NONCE_SALT',       '%)~uDE[Ko%0`?=befleVFHCISxX]vL@pg@;6D0SMk@IO6;-7PxD498Jm3PGaT^P?' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

define('FS_METHOD','direct');
