-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 30-11-2023 a las 03:22:54
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_final_logistica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'NUEVOS CENTROS LOGISTICOS EN ZONA NORTE Y PARQUE INDUSTRIAL', 'EXPANDIMOS NUESTRA RED DE DEPOSITOS EN ZONA NORTE GBA', 'Incorporamos a nuestra de red 5 nuevos depósitos con infraestructura de ultima generacion. \r\nsistema de rackeados pushback y drive-in.\r\nAutoelevadores contrabalanceados y retráctiles Eléctricos. \r\n', NULL),
(2, 'EQUIPOS TESLA DE ULTIMA GENERACION', 'EN RUTAS DEL SOL CUIDAMOS EL MEDIO AMBIENTE INCLINANDONOS HACIA LA TRANSFORMACION.', 'En 2023 incorporamos a nuestra flota de camiones equipos TESLA de ultima generación, porque en Logistica & distribución Rutas del Sol S.R.L. no solo nos ocupamos de tu empresa, sino que también tenemos un gran compromiso en el cuidado del planeta.  ', NULL),
(24, 'Nuevos camiones', 'Nuevos camiones', 'Nuevos camiones', NULL),
(29, 'wwww', 'qqqqq', 'cccccc', ''),
(32, 'uiuiiuiuiuiuiu', 'uiuiuiuiuuiu', 'iuiuiiuiuiu\r\n                        \r\n                        ', 'k7hfijlxof57wsvxjasm'),
(37, 'rrrrrrrrrrrrrrrrrrrr', 'rrrrrrrrrrrrrrrrrrrrr', 'rrrrrrrrrrrrrrrrrrr', 'ihnrllbnn5cp3hbib448'),
(34, 'ttttttttttttt', 'ttttttttttttttt', 'tttttttttttttt\r\n                        \r\n                        \r\n                        \r\n                        ', 'hnscjpawatvjnnohf4e4'),
(36, 'aaaaaaaaaaaaa', 'aaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaa\r\n                        \r\n                        \r\n                        \r\n                        \r\n                        \r\n                        \r\n                        ', 'vpdoysqtlc1wuxpuhbu7');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
