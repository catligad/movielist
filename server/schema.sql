CREATE DATABASE movielist;

USE movielist;

-- mysql -u root < ./server/schema.sql

DROP TABLE IF EXISTS `Movies`;
		
CREATE TABLE `Movies` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `title` TEXT NULL DEFAULT NULL,
  `watched` TEXT NULL DEFAULT NULL,
  `toggled` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);
