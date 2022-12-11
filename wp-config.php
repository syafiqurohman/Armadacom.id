<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'armadacom' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'vDGF:IaAv+Rp_ ik wjI7Ik!aj?1;!@=by)]g1eK1Nj+<#W!OENSHs&ymG+#_Bh`' );
define( 'SECURE_AUTH_KEY',  'R#El7)]SrBjG]Q}Na(2>.fT/! aR0cM,Sr*Cr0n~U2wI[Lhf6$dVeuT)EmP;#E<4' );
define( 'LOGGED_IN_KEY',    '&-q(xMlmLJ[.om>I[r+}dS7<3m.-[lC.{cxV0>+)mk[GdIz!&6PtjJ1%$-%M<?a8' );
define( 'NONCE_KEY',        '&Bf %J-&|j]`wI@mu!&g$`1=~syq7Il@N+* fb`>70{>Vv$0@ZwCJH8C/#zv{)d@' );
define( 'AUTH_SALT',        'xhjswGl|6oO#fdO4}`|Mp#`8&N#V(mWKZ5c<0QBGL?>Ut= qDhm@#(Q/uW6|N-2C' );
define( 'SECURE_AUTH_SALT', '&JVVdzHmj1h`d!Z[TLYEp*o!RX~lxYLE~4L9r;mc+3rCkFL?^|i5sh^SFDJ1>tli' );
define( 'LOGGED_IN_SALT',   'oepj]0OagcX|RH9l&2Y)4bo3inZKda8JX,9rU/.v:%lkjzQa>Mqs&D$fbh__+$#~' );
define( 'NONCE_SALT',       'NQzTY]aG~#+:W.W)IrP%Xq6<$OdwbLs2tM=3J{q15uCOA?#iBpe.!i%yp:t9X^wf' );

/**#@-*/

/**
 * WordPress database table prefix.
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
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
