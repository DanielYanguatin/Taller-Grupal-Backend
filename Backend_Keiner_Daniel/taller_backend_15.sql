-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.30 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para taller_backend_15
CREATE DATABASE IF NOT EXISTS `taller_backend_15` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `taller_backend_15`;

-- Volcando estructura para tabla taller_backend_15.alquileres
CREATE TABLE IF NOT EXISTS `alquileres` (
  `id_alquileres` int NOT NULL AUTO_INCREMENT,
  `fecha_inicio` datetime NOT NULL,
  `fecha_fin` datetime NOT NULL,
  `cliente_id` int DEFAULT NULL,
  `vehiculo_id` int DEFAULT NULL,
  PRIMARY KEY (`id_alquileres`),
  KEY `FK_de8145b42eb7c1bc9f555212ae3` (`cliente_id`),
  KEY `FK_f458e2688b858151990f158cc88` (`vehiculo_id`),
  CONSTRAINT `FK_de8145b42eb7c1bc9f555212ae3` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id_clientes`),
  CONSTRAINT `FK_f458e2688b858151990f158cc88` FOREIGN KEY (`vehiculo_id`) REFERENCES `vehiculos` (`id_vehiculos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla taller_backend_15.alquileres: ~0 rows (aproximadamente)

-- Volcando estructura para tabla taller_backend_15.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `id_clientes` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  PRIMARY KEY (`id_clientes`),
  UNIQUE KEY `IDX_3cd5652ab34ca1a0a2c7a25531` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla taller_backend_15.clientes: ~0 rows (aproximadamente)

-- Volcando estructura para tabla taller_backend_15.vehiculos
CREATE TABLE IF NOT EXISTS `vehiculos` (
  `id_vehiculos` int NOT NULL AUTO_INCREMENT,
  `marca` varchar(255) NOT NULL,
  `modelo` varchar(255) NOT NULL,
  `ano` int NOT NULL,
  `matricula` varchar(255) NOT NULL,
  PRIMARY KEY (`id_vehiculos`),
  UNIQUE KEY `IDX_1b54eafc6de9a561be3239c4b0` (`matricula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla taller_backend_15.vehiculos: ~0 rows (aproximadamente)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
