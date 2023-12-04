-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 04-12-2023 a las 22:23:41
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
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'NUEVOS CENTROS LOGISTICOS EN ZONA NORTE Y PARQUE INDUSTRIAL', 'EXPANDIMOS NUESTRA RED DE DEPOSITOS EN ZONA NORTE GBA', 'Incorporamos a nuestra red 5 nuevos depósitos con infraestructura de ultima generación. \r\nsistema de rackeados pushback y drive-in.\r\nAutoelevadores contrabalanceados y retráctiles Eléctricos. \r\n\r\n                        \r\n                        \r\n                        ', 'qyar543xftiazmogoyrd'),
(2, 'EQUIPOS TESLA DE ULTIMA GENERACION', 'EN RUTAS DEL SOL CUIDAMOS EL MEDIO AMBIENTE INCLINANDONOS HACIA LA TRANSFORMACION.', 'En 2023 incorporamos a nuestra flota de camiones equipos TESLA de ultima generación, porque en Logistica & distribución Rutas del Sol S.R.L. no solo nos ocupamos de tu empresa, sino que también tenemos un gran compromiso en el cuidado del planeta.  \r\n                        \r\n                        \r\n                        ', 'xu4eycqce2bsixl6kgtr'),
(24, 'CAMIONES CISTERNAS PARA TRANSPORTE DE INFLAMABLES', 'CISTERNAS CON BOMBAS Y COMPARTIMIENTOS', 'Incluimos en nuestra flota 5 equipos cisternas para transportar líquidos de grado alimenticio        \r\n\r\n                        \r\n                        ', 'sc43e8mq7wkgoakkvlfu'),
(38, 'TE GUSTARIA SER PARTE DE RUTAS DEL SOL?', 'Estamos en búsqueda de personal para sumar a nuestro equipo de unidad transporte. ', 'Buscamos técnicos mecánicos e ingenieros de sistemas. \r\nSi estas interesado en postularte a los puestos vacantes, envía tu CV a  nuestro equipo de RRHH. \r\n                        \r\n                        \r\n                        \r\n                        ', 'p44apjgoob0punztuxqx');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
