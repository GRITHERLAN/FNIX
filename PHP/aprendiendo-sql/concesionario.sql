-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 07-02-2026 a las 11:30:14
-- Versión del servidor: 8.0.44
-- Versión de PHP: 8.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `concesionario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

DROP TABLE IF EXISTS `clientes`;
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vendedor_id` int DEFAULT NULL,
  `nombre` varchar(150) NOT NULL,
  `ciudad` varchar(100) DEFAULT NULL,
  `gastado` float(50,2) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cliente_vendedor` (`vendedor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `vendedor_id`, `nombre`, `ciudad`, `gastado`, `fecha`) VALUES
(1, 1, 'Construcciones Diaz Inc', 'Alcobendas', 24000.00, '2026-02-06'),
(2, 1, 'Fruteria Antonia Inc', 'Fuenlabrada', 40000.00, '2026-02-06'),
(3, 2, 'Imprenta martinez Inc', 'Barcelona', 32000.00, '2026-02-06'),
(4, 2, 'Jesus Colchones Inc', 'El Prat', 96000.00, '2026-02-06'),
(5, 2, 'Bar Pepe Inc', 'Valencia', 170000.00, '2026-02-06'),
(6, 1, 'Tienda PC Inc', 'Murcia', 245000.00, '2026-02-06'),
(7, 5, 'Tienda Organica Inc', 'Murcia', 0.00, '2026-02-07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coches`
--

DROP TABLE IF EXISTS `coches`;
CREATE TABLE IF NOT EXISTS `coches` (
  `id` int NOT NULL AUTO_INCREMENT,
  `modelo` varchar(100) NOT NULL,
  `marca` varchar(50) DEFAULT NULL,
  `precio` int NOT NULL,
  `stock` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `coches`
--

INSERT INTO `coches` (`id`, `modelo`, `marca`, `precio`, `stock`) VALUES
(1, 'Renault Clio', 'Renault', 12600, 13),
(2, 'Seat Panda', 'Seat', 10500, 10),
(3, 'Mercedes Ranchera', 'Mercedes Benz', 33600, 24),
(4, 'Porche Cayene', 'Porche', 68250, 5),
(5, 'Lambo Aventador', 'Lamborgini', 178500, 2),
(6, 'Ferrari Spider', 'Ferrari', 257250, 80);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `encargos`
--

DROP TABLE IF EXISTS `encargos`;
CREATE TABLE IF NOT EXISTS `encargos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int NOT NULL,
  `coche_id` int NOT NULL,
  `cantidad` int DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_encargo_cliente` (`cliente_id`),
  KEY `fk_encargo_coche` (`coche_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `encargos`
--

INSERT INTO `encargos` (`id`, `cliente_id`, `coche_id`, `cantidad`, `fecha`) VALUES
(1, 1, 1, 2, '2026-02-06'),
(2, 2, 2, 4, '2026-02-06'),
(3, 3, 3, 1, '2026-02-06'),
(4, 4, 3, 3, '2026-02-06'),
(5, 5, 5, 1, '2026-02-06'),
(6, 6, 6, 1, '2026-02-06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos`
--

DROP TABLE IF EXISTS `grupos`;
CREATE TABLE IF NOT EXISTS `grupos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `ciudad` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `grupos`
--

INSERT INTO `grupos` (`id`, `nombre`, `ciudad`) VALUES
(1, 'Vendedores A', 'Madrid'),
(2, 'Vendedores B', 'Madrid'),
(3, 'Directores mecanicos', 'Madrid'),
(4, 'Vendedores A', 'Barcelona'),
(5, 'Vendedores B', 'Barcelona'),
(6, 'Vendedores C', 'Valencia'),
(7, 'Vendedores A', 'Bilbao'),
(8, 'Vendedores B', 'Pamplona'),
(9, 'Vendedores C', 'Santiago de Compostela');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedores`
--

DROP TABLE IF EXISTS `vendedores`;
CREATE TABLE IF NOT EXISTS `vendedores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `grupo_id` int NOT NULL,
  `jefe` int DEFAULT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(150) DEFAULT NULL,
  `cargo` varchar(50) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `sueldo` float(20,2) DEFAULT NULL,
  `comision` float(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_vendedor_grupo` (`grupo_id`),
  KEY `fk_vendedor_jefe` (`jefe`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `vendedores`
--

INSERT INTO `vendedores` (`id`, `grupo_id`, `jefe`, `nombre`, `apellidos`, `cargo`, `fecha`, `sueldo`, `comision`) VALUES
(1, 1, NULL, 'David', 'Lopez', 'Reponsable de tienda', '2026-02-06', 30000.00, 4.00),
(2, 1, 1, 'Fran', 'Martinez', 'Ayudante en tienda', '2024-02-06', 23000.00, 2.00),
(3, 2, NULL, 'Nelson', 'Sánchez', 'Reponsable de tienda', '2024-02-07', 38000.00, 5.00),
(4, 2, 3, 'Jesus', 'Lopez', 'Ayudante en tienda', '2026-02-06', 12000.00, 6.00),
(5, 3, NULL, 'Víctor', 'Lopez', 'Mecanico jefe', '2024-02-06', 50000.00, 0.50),
(6, 4, NULL, 'Antonio', 'Lopez', 'Vendedor de recambios', '2026-02-06', 13000.00, 8.00),
(7, 5, NULL, 'Salvador', 'Lopez', 'Vendedor experto', '2024-02-06', 60000.00, 0.50),
(8, 6, NULL, 'Joaquin', 'Lopez', 'Ejecutivo de cuentas', '2026-02-06', 80000.00, 0.50),
(9, 6, 8, 'Luis', 'Lopez', 'Ayudante en tienda', '2026-02-06', 10000.00, 10.00);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `fk_cliente_vendedor` FOREIGN KEY (`vendedor_id`) REFERENCES `vendedores` (`id`);

--
-- Filtros para la tabla `encargos`
--
ALTER TABLE `encargos`
  ADD CONSTRAINT `fk_encargo_cliente` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`),
  ADD CONSTRAINT `fk_encargo_coche` FOREIGN KEY (`coche_id`) REFERENCES `coches` (`id`);

--
-- Filtros para la tabla `vendedores`
--
ALTER TABLE `vendedores`
  ADD CONSTRAINT `fk_vendedor_grupo` FOREIGN KEY (`grupo_id`) REFERENCES `grupos` (`id`),
  ADD CONSTRAINT `fk_vendedor_jefe` FOREIGN KEY (`jefe`) REFERENCES `vendedores` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
