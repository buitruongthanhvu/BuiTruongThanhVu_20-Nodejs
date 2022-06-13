-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: moviedb
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `trailer` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `poster` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `startTime` datetime DEFAULT NULL,
  `evaluate` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `movieId` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (45,'DR.Strange','','','','2022-01-01 00:00:00',1,'2022-06-05 06:49:13','2022-06-05 06:49:13',NULL),(46,'Spiderman-Home alone','','','','2022-01-02 00:00:00',2,'2022-06-05 06:49:30','2022-06-05 06:49:30',NULL),(50,'spiderman',NULL,NULL,'1','1970-01-01 00:00:02',1,'2022-06-05 08:35:01','2022-06-05 08:35:01',NULL),(51,'spiderman',NULL,NULL,'1','1970-01-01 00:00:02',1,'2022-06-05 08:35:18','2022-06-05 08:35:18',NULL),(52,'qwewqe',NULL,NULL,'1',NULL,NULL,'2022-06-05 09:00:25','2022-06-05 09:00:25',NULL);
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20220524191938-create-user.js'),('20220525082744-User.js'),('20220527091911-create-theater.js'),('20220527155419-create-theater.js'),('20220527155545-create-theater.js'),('20220527162356-unnamed-migration.js'),('20220611170505-create-ticket.js'),('20220612081037-create-showtime.js'),('20220612150447-create-ticket.js'),('20220612154636-create-ticket.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `showtimes`
--

DROP TABLE IF EXISTS `showtimes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `showtimes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ngayChieu` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `theaterId` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `giaVe` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `movieId` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `showtimes`
--

LOCK TABLES `showtimes` WRITE;
/*!40000 ALTER TABLE `showtimes` DISABLE KEYS */;
INSERT INTO `showtimes` VALUES (1,'2022-02-02','1','100000','1','2022-06-12 15:41:33','2022-06-12 15:41:33'),(2,'2022-02-02','1','100000','2','2022-06-12 15:41:38','2022-06-12 15:41:38'),(3,'2022-02-02','1','100000','3','2022-06-12 15:41:40','2022-06-12 15:41:40'),(4,'2022-02-02','2','100000','1','2022-06-12 15:41:49','2022-06-12 15:41:49'),(5,'2022-02-02','2','100000','2','2022-06-12 15:41:51','2022-06-12 15:41:51'),(6,'2022-02-02','2','100000','3','2022-06-12 15:41:54','2022-06-12 15:41:54');
/*!40000 ALTER TABLE `showtimes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `theaters`
--

DROP TABLE IF EXISTS `theaters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `theaters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `diaChi` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `movieId` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `theaters`
--

LOCK TABLES `theaters` WRITE;
/*!40000 ALTER TABLE `theaters` DISABLE KEYS */;
INSERT INTO `theaters` VALUES (1,'Truong Sa','30 Truong Sa',NULL,'2022-05-27 16:12:22','2022-05-27 16:12:22'),(2,'Hoang Sa','30 Hoang Sa',NULL,'2022-05-27 16:12:43','2022-05-27 16:12:43');
/*!40000 ALTER TABLE `theaters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tickets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `movieId` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `theaterId` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `giaVe` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `maGhe` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (1,'52','2','1',NULL,'1','2022-06-12 15:57:41','2022-06-12 15:57:41'),(2,'52','2','1',NULL,'1','2022-06-12 15:58:52','2022-06-12 15:58:52'),(3,'52','2','1',NULL,'1','2022-06-12 15:59:09','2022-06-12 15:59:09'),(4,'52','2','1',NULL,'1','2022-06-12 15:59:40','2022-06-12 15:59:40'),(5,'52','2','1',NULL,'1','2022-06-12 16:00:16','2022-06-12 16:00:16'),(6,'52','2','1',NULL,'1','2022-06-12 16:02:33','2022-06-12 16:02:33'),(7,'52','2','1',NULL,'2','2022-06-12 16:08:45','2022-06-12 16:08:45');
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `taikhoan` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `matKhau` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `soDT` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `hoTen` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'thanhvu1','123456','c@gmail.com','0941631434','Thanh Vu','2022-05-27 08:58:22','2022-05-27 08:58:22'),(3,'thanhvu2','123456','c@gmail.com','0941631432','Thanh Vu2','2022-05-27 08:58:32','2022-05-27 08:58:32'),(4,'thanhvu123','$2b$10$dqY6bVgnIaJVseVwopM9luKXpP4kbmSIGCqOi9rkn9NnzPtShhyjq','d@gmail.com','01231232','thanh vu','2022-06-07 09:01:54','2022-06-07 09:01:54'),(5,'thanhvu1234','$2b$10$wVXXTc7yHM5WUDPSQe11Xe8GP7xNdtZ/lCBm.vdTUkabOoFtOMeQy','d@gmail.com','01231232','thanh vu','2022-06-07 13:14:07','2022-06-07 13:14:07');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-13 14:37:22
