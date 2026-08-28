-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 12, 2025 at 09:00 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(2) NOT NULL,
  `category_name` varchar(20) NOT NULL,
  `parent_category` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `parent_category`) VALUES
(1, 'Milchig', NULL),
(2, 'Pareve', NULL),
(3, 'Fleishig', NULL),
(4, 'Breads', NULL),
(5, 'Dips', NULL),
(6, 'Salads', NULL),
(7, 'Fish', NULL),
(8, 'Soups', NULL),
(9, 'Sides', NULL),
(10, 'Mains', NULL),
(11, 'Desserts', NULL),
(12, 'Vegetable', 6),
(13, 'Lettuce', 6),
(14, 'Pasta', 6),
(15, 'Potatoes', 9),
(16, 'Rice', 9),
(17, 'Kugels', 9),
(18, 'Vegetables', 9),
(19, 'Chicken', 10),
(20, 'Meat', 10),
(21, 'Dairy', 10),
(22, 'Cakes', 11),
(23, 'Cookies', 11),
(24, 'Bars', 11),
(25, 'Frozen', 11),
(26, 'Muffins', 11);

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `recipeid` int(11) NOT NULL,
  `recipe_name` varchar(50) DEFAULT NULL,
  `kitchen_of` varchar(50) DEFAULT NULL,
  `category1` int(2) DEFAULT NULL,
  `category2` int(2) DEFAULT NULL,
  `ingredients` text DEFAULT NULL,
  `directions` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`recipeid`, `recipe_name`, `kitchen_of`, `category1`, `category2`, `ingredients`, `directions`) VALUES
(1, 'Potato Kugel', 'Mommy', 2, 17, '8 potatoes; 2 onions; 5 eggs; 1/2 cup oil; 2 tsp salt; 1 tbsp sugar; 1/2 tsp pepper', 'Grate potatoes and onions; add eggs, oil, salt, pepper, and sugar; mix; bake at 425 for 1 hour'),
(2, 'Cheesecake', 'Savta', 1, 11, 'Piecrust; 12 oz cream cheese; 1/2 cup sugar; 2 eggs; 1/2 tsp vanilla; Pie filling', 'Spread a 1/2 can of pie filling into the crust; mix cream cheese, sugar, eggs, and vanilla and pour into crust; bake at 350 for 25 minutes; cool; add rest of filling'),
(9, 'BBQ Sauce Salmon', 'Me', 2, 7, 'Salmon Fillet; Barbecue Sauce; Teriyaki Sauce; Oil, Sesame; Garlic, Powdered', 'a'),
(11, 'BBQ Sauce Salmon', 'Me', 2, 7, 'Salmon Fillet; Barbecue Sauce; Teriyaki Sauce; Oil, Sesame; Garlic, Powdered', 'asd'),
(12, 'BBQ Sauce Salmon', 'Me', 2, 7, 'Salmon Fillet; Barbecue Sauce; Teriyaki Sauce; Oil, Sesame; Garlic, Powdered', 'asd');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `recipeid` int(11) NOT NULL,
  `recipe_name` varchar(50) DEFAULT NULL,
  `category1` int(2) DEFAULT NULL,
  `category2` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`recipeid`, `recipe_name`, `category1`, `category2`) VALUES
(1, 'Breadsticks', 2, 4),
(2, 'Heirloom Tomato Salad', 2, 12),
(3, 'Alphabet Soup', 2, 8),
(4, 'Pastrami Rice', 3, 16),
(5, 'Rivka Chicken', 3, 19),
(6, 'Pastrami Pizza', 3, 20),
(7, 'Pastrami Salmon', 2, 7),
(8, 'Pasta Rosa', 1, 21),
(9, 'Chocolate Chip Bars', 2, 24),
(10, 'Mrs. Muser Cake', 2, 22),
(11, 'Killer Crunch Brownies', 2, 24),
(12, 'Toll House Cookies', 2, 11),
(13, 'Lasagna', 1, 21),
(14, 'Potato Kugel', 2, 17),
(15, 'Onion Soup Mix Rice', 2, 16),
(16, 'Carrot Kugel', 2, 17),
(17, 'Stir-fried Veggies', 2, 18),
(18, 'Rice Casserole', 2, 16),
(19, 'Pumpkin Craisin Muffins', 2, 9),
(20, 'Breaded Cauliflower', 2, 18),
(21, 'Newlywed Potatoes', 2, 15),
(22, 'Angel Hair Pasta Salad', 2, 14),
(23, 'Taco Salad', 2, 13),
(24, 'Minestrone Soup', 2, 8),
(25, 'Tuna Pot', 1, 21);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `username`, `first_name`, `last_name`, `email`, `password`, `admin`) VALUES
(21, 'yehoshuaanton', 'Yehoshua', 'Anton', 'yehoshuaanton@gmail.com', '$2y$10$tqitiRF8am3f7iqj8YOgceZiSNctOINb4OUbXKhze3cuGB0HFqrxm', 0),
(23, '26098045714916', 'Yehoshua', 'Anton', 'yehoshuaanton@gmail.com', '$2y$10$AluoWz7OOp9SmjIsxfBHKOmFS5t1r5LPhHmMGG3vPQvLx9t5Ah5le', 0),
(25, '0035168590', 'Yehoshua', 'Anton', 'yehoshuaanton@gmail.com', '$2y$10$wrxsbqFCLqkO3l64YmzCX.4wi857356c65YGMK6sbdwsQ2EL/AnFi', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`),
  ADD KEY `parent_fk` (`parent_category`);

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`recipeid`),
  ADD KEY `category1` (`category1`),
  ADD KEY `category2` (`category2`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`recipeid`),
  ADD KEY `category1` (`category1`),
  ADD KEY `category2` (`category2`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `recipeid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `recipeid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `parent_fk` FOREIGN KEY (`parent_category`) REFERENCES `categories` (`category_id`);

--
-- Constraints for table `recipes`
--
ALTER TABLE `recipes`
  ADD CONSTRAINT `recipes_ibfk_1` FOREIGN KEY (`category1`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recipes_ibfk_2` FOREIGN KEY (`category2`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `test`
--
ALTER TABLE `test`
  ADD CONSTRAINT `test_ibfk_1` FOREIGN KEY (`category1`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `test_ibfk_2` FOREIGN KEY (`category2`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
