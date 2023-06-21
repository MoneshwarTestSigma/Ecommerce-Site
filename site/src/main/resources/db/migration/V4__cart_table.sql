CREATE TABLE `cart` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `quantity` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`product_id`)
      REFERENCES products (`id`)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
  FOREIGN KEY (`user_id`)
      REFERENCES user (`id`)
      ON DELETE CASCADE
       ON UPDATE CASCADE
);