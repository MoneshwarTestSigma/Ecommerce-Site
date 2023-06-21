CREATE TABLE `image` (
                         `id` bigint(20)   NOT NULL AUTO_INCREMENT,
                         `product_id` bigint(20) DEFAULT NULL UNIQUE,
                         `image_url` varchar(255) DEFAULT NULL,
                         FOREIGN KEY(product_id) REFERENCES `products` (`id`)  ON DELETE CASCADE ON UPDATE NO ACTION,
                         PRIMARY KEY (`id`)
);