-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2017 at 08:17 PM
-- Server version: 5.7.11
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_trailers`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_trailers`
--

CREATE TABLE `tbl_trailers` (
  `trailers_id` smallint(10) UNSIGNED NOT NULL,
  `trailers_title` varchar(100) NOT NULL,
  `trailers_genre` varchar(50) NOT NULL,
  `trailers_director` varchar(50) NOT NULL,
  `trailers_stars` varchar(200) NOT NULL,
  `trailers_desc` text NOT NULL,
  `trailers_year` varchar(25) NOT NULL,
  `trailers_video` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_trailers`
--

INSERT INTO `tbl_trailers` (`trailers_id`, `trailers_title`, `trailers_genre`, `trailers_director`, `trailers_stars`, `trailers_desc`, `trailers_year`, `trailers_video`) VALUES
(1, 'Tansformers: The Last Knight', 'Sci-Fi', 'Michael Bay', 'Gemma Chan, Mark Wahlberg, Stanley Tucci, Anthony Hopkins', 'Humans and Transformers are at war, Optimus Prime is gone. The key to saving our future lies buried in the secrets of the past, in the hidden history of Transformers on Earth.', '2017', 'transformers'),
(2, 'Ghost in the Shell', 'Sci-Fi', 'Rupert Sanders', 'Scarlett Johansson, Pilou Asbæk, Takeshi Kitano, Juliette Binoche', 'In the near future, Major is the first of her kind: A human saved from a terrible crash, who is cyber-enhanced to be a perfect soldier devoted to stopping the world\'s most dangerous criminals.', '2017', 'ghost'),
(3, 'Justice League', 'Sci-Fi', 'Zack Snyder', 'Gal Gadot, Jason Momoa, Amber Heard, Ezra Miller', 'Fueled by his restored faith in humanity and inspired by Superman\'s selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy.', '2017', 'JusticeLeague'),
(4, 'War for the Planet f the Apes', 'Sci-Fi', 'Matt Reeves', 'Woody Harrelson, Judy Greer, Andy Serkis, Steve Zahn', 'After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind.', '2017', 'war'),
(5, 'xXx: Return of Xander Cage', 'Action', 'D.J. Caruso', 'Vin Diesel, Donnie Yen, Deepika Padukone, Kris Wu', 'Xander Cage is left for dead after an incident, though he secretly returns to action for a new, tough assignment with his handler Augustus Gibbons.', '2017', 'xXx'),
(6, 'The Fate of the Furious', 'Action', 'F. Gary Gray', 'Dwayne Johnson, Charlize Theron, Scott Eastwood, Vin Diesel\r\n', 'When a mysterious woman seduces Dom into the world of terrorism and a betrayal of those closest to him, the crew face trials that will test them as never before.', '2017', 'TheFateoftheFurious'),
(7, 'Sleepless', 'Action', 'Baran bo Odar', 'Jamie Foxx, Michelle Monaghan, Dermot Mulroney, Gabrielle Union', 'A cop with a connection to the criminal underworld scours a nightclub in search of his kidnapped son.\r\n', '2017', 'sleepless'),
(8, 'Hacksaw Ridge', 'Action', 'Mel Gibson', 'Andrew Garfield, Sam Worthington, Luke Bracey, Teresa Palmer', 'WWII American Army Medic , who served during the Battle of Okinawa, refuses to kill people, and becomes the first man in American history to receive the Medal of Honor without firing a shot.', '2016', 'HacksawRidge'),
(9, 'The Boss Baby', 'Anime', 'Tom McGrath', 'Alec Baldwin, Steve Buscemi, Jimmy Kimmel, Lisa Kudrow', 'A suit-wearing briefcase-carrying baby pairs up with his seven-year old brother to stop the dastardly plot of the CEO of Puppy Co.\r\n', '2017', 'TheBossBaby'),
(10, 'Ferdinand', 'Anime', 'Carlos Saldanha', 'Kate McKinnon, David Tennant, John Cena, Gina Rodriguez', 'After Ferdinand, a bull with a big heart, is mistaken for a dangerous beast, he is captured and torn from his home. Determined to return to his family, he rallies a misfit team on the ultimate adventure.', '2017', 'Ferdinand'),
(11, 'Your Name', 'Anime', 'Makoto Shinkai', 'Ryûnosuke Kamiki, Mone Kamishiraishi, Ryô Narita, Aoi Yuki', 'Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?', '2016', 'YourName'),
(12, 'Smurf: The Lost Village', 'Anime', 'Kelly Asbury', 'Demi Lovato, Rainn Wilson, Joe Manganiello, Jack McBrayer', 'In this fully animated, all-new take on the Smurfs, a mysterious map sets Smurfette and her friends Brainy, Clumsy and Hefty on an exciting race through the Forbidden Forest leading to the discovery of the biggest secret in Smurf history.', '2017', 'smurfs');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_trailers`
--
ALTER TABLE `tbl_trailers`
  ADD PRIMARY KEY (`trailers_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_trailers`
--
ALTER TABLE `tbl_trailers`
  MODIFY `trailers_id` smallint(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
