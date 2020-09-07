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
define( 'DB_NAME', 'u677489029_headlesswp' );

/** MySQL database username */
define( 'DB_USER', 'u677489029_postlight' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Tigers07-' );

/** MySQL hostname */
define( 'DB_HOST', 'mysql' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'eaV`Bz90bX;G?7;(ILd{S#N{6M<jT9TDhf:5Z}8=e0?IMCn5oIQf@!t=Q9LZQ8an' );
define( 'SECURE_AUTH_KEY',   'HUH?:oc7u.^QP?S83*(i2EV@H):mKN;8SHB8w c-zz<Z^p3|kw$rS9&)]Uiclb*v' );
define( 'LOGGED_IN_KEY',     'DN~;vevR5_,QCN}Yn=x#dC$_:~a$FTM}maK`*?i3XlG}74.<LMF(b|Cj{Zj`z?So' );
define( 'NONCE_KEY',         'S;=#ULZ[!o@HumKoTSBRgxuC8DS)rm),:_Q*Zlt/I`#@NsnmCMc@!Vj..cNWo+7E' );
define( 'AUTH_SALT',         '{O.L}1IlKa9l.QNMX_T~x5WqVU*L2YV*^]%%n.j[%vdD:(Eiq}9t;32Ws=,m-r#c' );
define( 'SECURE_AUTH_SALT',  'L30IdYT ,,b=V6q6?<*j;9}$vo5AqzIe]nQ$xulZ7F%>VoT%UVclH7J0C{t<.srf' );
define( 'LOGGED_IN_SALT',    '|..v{D[/uc*4xk//4 vw:s6/ypIX4KO-:Uz!lZ`cSBSC1`(E?HA9`d*AXAI}ROU!' );
define( 'NONCE_SALT',        '=&I?dpevZ4IQHCh.Tc5J1<ohv@reIu$^(yhVaM!L}C{>H?KR?r(QdgYYh]4C0)Gq' );
define( 'WP_CACHE_KEY_SALT', '2?KX6b?0alOUF4cR2ZP:W)/Vn<w<{>*^24Bz|69/D%~@Q*%hH_{&z&_.+^*=iw*:' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
