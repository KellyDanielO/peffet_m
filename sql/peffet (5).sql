-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 27, 2022 at 07:20 AM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 7.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `peffet`
--

-- --------------------------------------------------------

--
-- Table structure for table `central_post_holder`
--

CREATE TABLE `central_post_holder` (
  `id` int(11) NOT NULL,
  `uid` longtext COLLATE utf8mb4_bin NOT NULL,
  `post_id` longtext COLLATE utf8mb4_bin NOT NULL,
  `username` longtext COLLATE utf8mb4_bin NOT NULL,
  `title` longtext COLLATE utf8mb4_bin NOT NULL,
  `type` longtext COLLATE utf8mb4_bin NOT NULL,
  `sub_type` longtext COLLATE utf8mb4_bin NOT NULL,
  `Location` longtext COLLATE utf8mb4_bin NOT NULL,
  `url` longtext COLLATE utf8mb4_bin NOT NULL,
  `time` longtext COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `central_post_holder`
--

INSERT INTO `central_post_holder` (`id`, `uid`, `post_id`, `username`, `title`, `type`, `sub_type`, `Location`, `url`, `time`) VALUES
(2, '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'reference_post_20b57cb2025cf023896a1baa546b340eee426b77edb64696611670838688684ec5a0d13da833745c61acb980d097680f806be2fc12', 'motivation_bucket', 'The people who are crazy enough to think they can change the world are the one''s who do by Steve Jobs', 'reference_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c&&post_id=reference_post_20b57cb2025cf023896a1baa546b340eee426b77edb64696611670838688684ec5a0d13da833745c61acb980d097680f806be2fc12', '12/12/2022 10:51:28 am'),
(3, '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'reference_post_742dabd237d21a81cc05eddafe8c12e02775a14921981094c11670838724476aef8318bc8795e4778309fa631eba2f45b7b3a5921f', 'motivation_bucket', 'Be yourself; everyone else is already taken. by Oscar Wilde', 'reference_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c&&post_id=reference_post_742dabd237d21a81cc05eddafe8c12e02775a14921981094c11670838724476aef8318bc8795e4778309fa631eba2f45b7b3a5921f', '12/12/2022 10:52:04 am'),
(4, '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'reference_post_a4a28cb143eca3cf2fd84daf1bc2074aef1566962d55f850b9167083880498a16f4ba3e34b6887f7a1ccafb1aa80d3096120d5c728', 'motivation_bucket', 'You''ve gotta dance like there''s nobody watching,\nLove like you''ll never be hurt,\nSing like there''s nobody listening,\nAnd live like it''s heaven on earth. by William W. Purkey', 'reference_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c&&post_id=reference_post_a4a28cb143eca3cf2fd84daf1bc2074aef1566962d55f850b9167083880498a16f4ba3e34b6887f7a1ccafb1aa80d3096120d5c728', '12/12/2022 10:53:24 am'),
(5, '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'reference_post_f7b286ebabf07de6757fe17d5c87ac0c4c106ccc6560789b5a16708388406a81abb845b02ca59c1f16fabe75f3c5651565205f2dd1', 'motivation_bucket', 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. by Martin Luther King Jr', 'reference_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c&&post_id=reference_post_f7b286ebabf07de6757fe17d5c87ac0c4c106ccc6560789b5a16708388406a81abb845b02ca59c1f16fabe75f3c5651565205f2dd1', '12/12/2022 10:54:00 am'),
(6, '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'reference_post_c01f0dabde2cbd377d5cc071280f76543c3c9b108769b49ef916708388738ca2255d5ec5a3ae0258af0a8421f06ae621b1abfcaa86', 'motivation_bucket', 'Live as if you were to die tomorrow. Learn as if you were to leave forever by Mahatma Gandhi', 'reference_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c&&post_id=reference_post_c01f0dabde2cbd377d5cc071280f76543c3c9b108769b49ef916708388738ca2255d5ec5a3ae0258af0a8421f06ae621b1abfcaa86', '12/12/2022 10:54:33 am'),
(7, '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'reference_post_b60ccdee9e50b8570463023b264b72e38d055dcfe09251f38b16708434081d3a17bed72b39c62c77d857d4b4634eac3b996a2d23e3', 'motivation_bucket', 'I''ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. by Maya Angelou', 'reference_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c&&post_id=reference_post_b60ccdee9e50b8570463023b264b72e38d055dcfe09251f38b16708434081d3a17bed72b39c62c77d857d4b4634eac3b996a2d23e3', '12/12/2022 12:10:08 pm'),
(8, '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'reference_post_e9d17d93b3279c5572753b079533de56598cbfd774bc7048991670843434e12c3151d03211e1824adb913fae5fdfabf62f5c2a9b63', 'motivation_bucket', 'Whether you think you can or you think you can''t, you''re right. by Henry Ford', 'reference_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c&&post_id=reference_post_e9d17d93b3279c5572753b079533de56598cbfd774bc7048991670843434e12c3151d03211e1824adb913fae5fdfabf62f5c2a9b63', '12/12/2022 12:10:34 pm'),
(9, '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'reference_post_427038f8596f80f74f6fadd19695136ef0679e4ae4a5f84c2f167084354031f9e32abed86da9937836bbc547b84ee0206b32be8e3c', 'motivation_bucket', 'Perfection is not attainable, but if we chase perfection we can catch excellence. by Vince Lombardi', 'reference_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c&&post_id=reference_post_427038f8596f80f74f6fadd19695136ef0679e4ae4a5f84c2f167084354031f9e32abed86da9937836bbc547b84ee0206b32be8e3c', '12/12/2022 12:12:20 pm'),
(10, '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'reference_post_f244e20ad068458539a8e5426b6087018251db588b60511a10167084357196cc051ec5a989909d953fd42648f168e8ec128aca9360', 'motivation_bucket', 'Life is 10 percent what happens to me and 90 percent of how I react to it. by Charles Swindoll', 'reference_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c&&post_id=reference_post_f244e20ad068458539a8e5426b6087018251db588b60511a10167084357196cc051ec5a989909d953fd42648f168e8ec128aca9360', '12/12/2022 12:12:51 pm'),
(11, '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'reference_post_345998b6e1e55ccecb75eb347ab90f1e991e434d9f9d6fa01d1670843603d65cae043516bd4ffdc0804bebcb960b06d51c6df240cc', 'motivation_bucket', 'If you look at what you have in life, you''ll always have more. If you look at what you don''t have in life, you''ll never have enough. by Oprah Winfrey', 'reference_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c&&post_id=reference_post_345998b6e1e55ccecb75eb347ab90f1e991e434d9f9d6fa01d1670843603d65cae043516bd4ffdc0804bebcb960b06d51c6df240cc', '12/12/2022 12:13:23 pm'),
(12, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post1670843879768eae2024d03c92ff46c4cafacbf6', 'dav', 'Dope guy #dope #frenchguy', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=8edc52399d00937967424cf230553c5e19fee506bf1ede8b31&&post_id=portrait_post1670843879768eae2024d03c92ff46c4cafacbf6', '12/12/2022 12:17:59 pm'),
(13, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post1670844095fa3b2728d67f6b100c96c9bd5ecad7', 'dav', 'this guy is looking nice #dope #nice #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=8edc52399d00937967424cf230553c5e19fee506bf1ede8b31&&post_id=portrait_post1670844095fa3b2728d67f6b100c96c9bd5ecad7', '12/12/2022 12:21:35 pm'),
(14, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post1670844180676783f659af3e89e03959187761f8', 'dav', 'Guy on black #portrait #dope', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=8edc52399d00937967424cf230553c5e19fee506bf1ede8b31&&post_id=portrait_post1670844180676783f659af3e89e03959187761f8', '12/12/2022 12:23:00 pm'),
(15, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post1670844381a9f51cb639e644cd6c01ccccefcf0a', 'dav', 'NF dope guy GOAT #portrait #NF #NFReal', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=8edc52399d00937967424cf230553c5e19fee506bf1ede8b31&&post_id=portrait_post1670844381a9f51cb639e644cd6c01ccccefcf0a', '12/12/2022 12:26:21 pm'),
(16, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post1670844570cf6b3fd5663b440ad6dfef5a483a1a', 'dav', '#portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=8edc52399d00937967424cf230553c5e19fee506bf1ede8b31&&post_id=portrait_post1670844570cf6b3fd5663b440ad6dfef5a483a1a', '12/12/2022 12:29:30 pm'),
(17, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post167084465667b45cf4196acf6522f72172bc3f2b', 'dav', '#portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=8edc52399d00937967424cf230553c5e19fee506bf1ede8b31&&post_id=portrait_post167084465667b45cf4196acf6522f72172bc3f2b', '12/12/2022 12:30:56 pm'),
(18, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post167084474352fcc3bc04f86edb6ec93b7ff3352c', 'dav', '#portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=8edc52399d00937967424cf230553c5e19fee506bf1ede8b31&&post_id=portrait_post167084474352fcc3bc04f86edb6ec93b7ff3352c', '12/12/2022 12:32:23 pm'),
(20, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post167084487134cf462ef76c55cde087401bf8dd1a', 'dav', '#portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=8edc52399d00937967424cf230553c5e19fee506bf1ede8b31&&post_id=portrait_post167084487134cf462ef76c55cde087401bf8dd1a', '12/12/2022 12:34:31 pm'),
(21, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post1670844895fe55e4d358fda7d557af6cf75ec5bc', 'dav', '#portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=8edc52399d00937967424cf230553c5e19fee506bf1ede8b31&&post_id=portrait_post1670844895fe55e4d358fda7d557af6cf75ec5bc', '12/12/2022 12:34:55 pm'),
(22, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post1670844914ac1a6b2590eb575624aa37353d122c', 'dav', '#portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=8edc52399d00937967424cf230553c5e19fee506bf1ede8b31&&post_id=portrait_post1670844914ac1a6b2590eb575624aa37353d122c', '12/12/2022 12:35:14 pm'),
(23, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post1670845406bfb48702a735f963dfca8becb91fe5', 'dav', '#portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=8edc52399d00937967424cf230553c5e19fee506bf1ede8b31&&post_id=portrait_post1670845406bfb48702a735f963dfca8becb91fe5', '12/12/2022 12:43:26 pm'),
(27, 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'classic_write_up_2147771c053feb9e17d58db6c5fead2c714d122a803573baf7167087612808585749443a1926cabc6c43c1b7d57178496e8d0bc9ec', 'dev', 'Yo bro what''s up', 'classic_write_up', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef&&post_id=classic_write_up_2147771c053feb9e17d58db6c5fead2c714d122a803573baf7167087612808585749443a1926cabc6c43c1b7d57178496e8d0bc9ec', '12/12/2022 09:15:28 pm'),
(28, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', 'kelly_daniel', 'Hey what''s up\nMy name is Kelly Daniel\nI''m a full stack developer\nAnd I''m the founder of @peffet', 'classic_write_up', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e&&post_id=classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '12/13/2022 11:29:15 pm'),
(29, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'classic_write_up_133781f47e7ebefc50475146e7931fbc49c0ef3443bfac93af1670972368f6fa3f39209beea848fd9f157f2501eb903a6119d308c2', 'kelly_daniel', 'Peffet will be coming out soon ', 'classic_write_up', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e&&post_id=classic_write_up_133781f47e7ebefc50475146e7931fbc49c0ef3443bfac93af1670972368f6fa3f39209beea848fd9f157f2501eb903a6119d308c2', '12/13/2022 11:59:28 pm'),
(30, '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet_event_1b245c299f76a2ea8730effd9dd090707dc6b16165e9b16d3caa55e90264ac32aa8e18f4deed55e92a94ce52586e95aa5db28a8bcc3cdd937698a3f76d474ba0df1670972784eca6715d5a1e9f5426d9ec1b5e65b5ac78992131e62a20', 'peffet', 'Our team at @Peffet we are hosting an event for the best anime pictures $500 dollars for the winner', 'peffet_event', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5&&post_id=peffet_event_1b245c299f76a2ea8730effd9dd090707dc6b16165e9b16d3caa55e90264ac32aa8e18f4deed55e92a94ce52586e95aa5db28a8bcc3cdd937698a3f76d474ba0df1670972784eca6715d5a1e9f5426d9ec1b5e65b5ac78992131e62a20', '12/14/2022 12:06:24 am'),
(31, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'Checkout the neon picture @dav #neon', 'regular_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e&&post_id=regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '12/14/2022 12:14:17 am'),
(32, '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'classic_write_up_408708de8e7f560d440427d4f342ee7125f7cd361465f8755416710163426582ed7c137f032471c3eec8fcbaca85b8fe038a461be2', 'peffet', 'Welcome to peffet', 'classic_write_up', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5&&post_id=classic_write_up_408708de8e7f560d440427d4f342ee7125f7cd361465f8755416710163426582ed7c137f032471c3eec8fcbaca85b8fe038a461be2', '12/14/2022 12:12:22 pm'),
(33, '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet', 'Our team at @peffet we are hosting an event for the best anime pictures $500 dollars for the winner', 'peffet_event', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5&&post_id=peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', '12/15/2022 11:33:38 pm'),
(34, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', '804d70388276153be3e8a9a91fd2a5798e8daa23c2de252e61eae810', 'animixplay', 'Anime characters and Anime names check profile for details', 'write_up_regular', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=804d70388276153be3e8a9a91fd2a5798e8daa23c2de252e61eae810', '12/16/2022 12:03:37 am'),
(35, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671145477aba7ff5236e00fcf625e4bb0c6783a', 'animixplay', 'Yourichi Demon Slayer #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post1671145477aba7ff5236e00fcf625e4bb0c6783a', '12/16/2022 12:04:37 am'),
(40, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post16711456369bf498241c7822d2a4a7152f42e768', 'animixplay', 'Unkown Naruto #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post16711456369bf498241c7822d2a4a7152f42e768', '12/16/2022 12:07:16 am'),
(41, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671145704e599b655cb2f4de3b62dc4f3deacc7', 'animixplay', 'Asta Black Clover #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post1671145704e599b655cb2f4de3b62dc4f3deacc7', '12/16/2022 12:08:24 am'),
(43, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146039d5e9f22896f5d2f2e80000e416bcaa', 'animixplay', 'Satarou Gojo Jujutsu Kaisen #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post1671146039d5e9f22896f5d2f2e80000e416bcaa', '12/16/2022 12:13:59 am'),
(44, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post16711460747e7006e0a5cccdebf171dda2a7c901', 'animixplay', 'Naruto Uzumaki Naruto  #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post16711460747e7006e0a5cccdebf171dda2a7c901', '12/16/2022 12:14:34 am'),
(45, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146112f9eacff45f55c9d63ba43ddc843b33', 'animixplay', 'Gon Freeces Hunter X Hunter  #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post1671146112f9eacff45f55c9d63ba43ddc843b33', '12/16/2022 12:15:12 am'),
(46, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post16711461397012d5c53622a381ddda76934b219d', 'animixplay', 'Sasuke Uchiha Naruto  #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post16711461397012d5c53622a381ddda76934b219d', '12/16/2022 12:15:39 am'),
(47, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146179689271f6af4e5e4f81322a5d24cee7', 'animixplay', 'Goku or Kakarote Dragon Ball  #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post1671146179689271f6af4e5e4f81322a5d24cee7', '12/16/2022 12:16:19 am'),
(48, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post167114621180be63be7ed5eca3af4704671f616c', 'animixplay', 'Vegeta and Goku or Kakarote Dragon Ball  #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post167114621180be63be7ed5eca3af4704671f616c', '12/16/2022 12:16:51 am'),
(49, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146245ea1647b0c11bea050e92f4a2c935c1', 'animixplay', 'Kaneki Tokyo Ghoul  #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post1671146245ea1647b0c11bea050e92f4a2c935c1', '12/16/2022 12:17:25 am'),
(50, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post16711462683f6429c90375b00cff40f95924eb03', 'animixplay', 'Kaneki Tokyo Ghoul  #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post16711462683f6429c90375b00cff40f95924eb03', '12/16/2022 12:17:48 am'),
(51, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146300a73c482309c4939d555a682590e21b', 'animixplay', 'Sasuke Uchiha Naruto #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post1671146300a73c482309c4939d555a682590e21b', '12/16/2022 12:18:20 am'),
(52, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146327ca16fe9d8d27df8ba6fb0270eb8bc8', 'animixplay', 'Kaneki Tokyo Ghoul #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post1671146327ca16fe9d8d27df8ba6fb0270eb8bc8', '12/16/2022 12:18:47 am'),
(53, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146354e72de2a7938f7e7e672a85881fa07a', 'animixplay', 'Chifuyu Tokyo Revengers #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post1671146354e72de2a7938f7e7e672a85881fa07a', '12/16/2022 12:19:14 am'),
(54, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146387f85b1f6e70a7417a0a87bd9f2faa18', 'animixplay', 'Kaneki Tokyo Ghoul #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post1671146387f85b1f6e70a7417a0a87bd9f2faa18', '12/16/2022 12:19:47 am'),
(55, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146413c48a5c46021c1deacca101351e431e', 'animixplay', 'Unkown Jujutsu Kaisen #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post1671146413c48a5c46021c1deacca101351e431e', '12/16/2022 12:20:13 am'),
(56, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post167114645032e5ed2fc60d506126159683970852', 'animixplay', 'Sakuna Jujutsu Kaisen #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post167114645032e5ed2fc60d506126159683970852', '12/16/2022 12:20:50 am'),
(57, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146475512c038d7f664a141f2ed0c6cf4938', 'animixplay', 'Kurosaki Ichigo Bleach #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post1671146475512c038d7f664a141f2ed0c6cf4938', '12/16/2022 12:21:15 am'),
(58, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146509ece4f5c4443ddea4f4c481e49f673b', 'animixplay', 'Itachi Uchiha Naruto #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post1671146509ece4f5c4443ddea4f4c481e49f673b', '12/16/2022 12:21:49 am'),
(59, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146547372cbcb4b9eddaae9940d4c9354d21', 'animixplay', 'Sasuke Uchiha Naruto #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post1671146547372cbcb4b9eddaae9940d4c9354d21', '12/16/2022 12:22:27 am'),
(60, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146586c28c2bf8ba4bc5f83f265794530738', 'animixplay', 'Unknown Demon Slayer #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post1671146586c28c2bf8ba4bc5f83f265794530738', '12/16/2022 12:23:06 am'),
(61, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post16711466141d43f97c8e2e5bb633aa07e3b7e837', 'animixplay', 'Asta Black Clover #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post16711466141d43f97c8e2e5bb633aa07e3b7e837', '12/16/2022 12:23:34 am'),
(62, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post16711466535de9e6bc914462a7754cd3614b542e', 'animixplay', 'Unuohana Yachiru Bleach #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post16711466535de9e6bc914462a7754cd3614b542e', '12/16/2022 12:24:13 am'),
(63, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146688b43f1e5ddbe312fe6d4bb44aa853fc', 'animixplay', 'Sakuna Jujutsu Kaisen #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post1671146688b43f1e5ddbe312fe6d4bb44aa853fc', '12/16/2022 12:24:48 am'),
(64, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146785c02978126b0eb093850973bb6c79b4', 'animixplay', 'Zarachi Kenpachi Bleach #anime #portrait', 'portrait_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6&&post_id=portrait_post1671146785c02978126b0eb093850973bb6c79b4', '12/16/2022 12:26:25 am'),
(65, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'Damn this guy is really looking good', 'regular_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e&&post_id=regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '12/16/2022 11:53:55 pm'),
(66, '0fa2294ee58945fb8190f7272e990b9e7518b4d2fc3a8db51a', 'typing_textc1be7946a06b29eac5a6121eeae3951a5e7b27c777bae669951671231387d121771cdb5181d57270e9162491a6c31364380f330f23', 'kizdver', 'death ain''t know me I ain''t know death||death ain''t seeing me I ain''t seeing death||money knows me we are good friends||we grew up in the early days||..', 'typing_text', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=0fa2294ee58945fb8190f7272e990b9e7518b4d2fc3a8db51a&&post_id=typing_textc1be7946a06b29eac5a6121eeae3951a5e7b27c777bae669951671231387d121771cdb5181d57270e9162491a6c31364380f330f23', '12/16/2022 11:56:27 pm'),
(67, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'classic_write_up_bf6d002bdac3232cc7f9a18d5093b0abd7bec56fc03ec54e3416712869840003c6e2a231e67cd3d87d4268fe605a9d15d85f08a66a', 'kelly_daniel', ' @kelly_daniel if i no kpie @gideon @peffet @dav @motivation_bucket appollo dey', 'classic_write_up', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e&&post_id=classic_write_up_bf6d002bdac3232cc7f9a18d5093b0abd7bec56fc03ec54e3416712869840003c6e2a231e67cd3d87d4268fe605a9d15d85f08a66a', '12/17/2022 03:23:04 pm'),
(68, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'classic_write_up_6873f0ab68cd991224a82295f7fa502ece2473248921cfe5a016712874492cba3ae1ab96cae3c2d3b04ccc9b43cf9a216e44d2df90', 'dav', 'Hey whats up @scott_choker ', 'classic_write_up', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=8edc52399d00937967424cf230553c5e19fee506bf1ede8b31&&post_id=classic_write_up_6873f0ab68cd991224a82295f7fa502ece2473248921cfe5a016712874492cba3ae1ab96cae3c2d3b04ccc9b43cf9a216e44d2df90', '12/17/2022 03:30:49 pm'),
(70, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'regular_post167144794990512fe362855f87e492fda039ff032a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'Cyclone', 'regular_post', '', 'Africa, Nigeria, Lagos', '/detailview?user_id=2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e&&post_id=regular_post167144794990512fe362855f87e492fda039ff032a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '12/19/2022 12:05:49 pm');

-- --------------------------------------------------------

--
-- Table structure for table `chat_central_holder`
--

CREATE TABLE `chat_central_holder` (
  `id` int(11) NOT NULL,
  `mid` longtext COLLATE utf8mb4_bin NOT NULL,
  `msg_category` longtext COLLATE utf8mb4_bin NOT NULL,
  `connection` longtext COLLATE utf8mb4_bin NOT NULL,
  `msg_type` longtext COLLATE utf8mb4_bin NOT NULL,
  `sender_uid` longtext COLLATE utf8mb4_bin NOT NULL,
  `reciever_uid` longtext COLLATE utf8mb4_bin NOT NULL,
  `sender_username` longtext COLLATE utf8mb4_bin NOT NULL,
  `reciever_username` longtext COLLATE utf8mb4_bin NOT NULL,
  `sender_msg_copy` longtext COLLATE utf8mb4_bin NOT NULL,
  `reciever_msg_copy` longtext COLLATE utf8mb4_bin NOT NULL,
  `main_msg` longtext COLLATE utf8mb4_bin NOT NULL,
  `display_time` longtext COLLATE utf8mb4_bin NOT NULL,
  `msg_req_status` longtext COLLATE utf8mb4_bin NOT NULL,
  `deleted_for_sender` longtext COLLATE utf8mb4_bin NOT NULL,
  `deleted_for_reciever` longtext COLLATE utf8mb4_bin NOT NULL,
  `reciever_seen_status` longtext COLLATE utf8mb4_bin NOT NULL,
  `time` longtext COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `chat_central_holder`
--

INSERT INTO `chat_central_holder` (`id`, `mid`, `msg_category`, `connection`, `msg_type`, `sender_uid`, `reciever_uid`, `sender_username`, `reciever_username`, `sender_msg_copy`, `reciever_msg_copy`, `main_msg`, `display_time`, `msg_req_status`, `deleted_for_sender`, `deleted_for_reciever`, `reciever_seen_status`, `time`) VALUES
(1, 'chats_peffet_and_kelly_daniel167097347050d0f3b43344b75c32ca', 'users_chat', '', 'post_attachment', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'kelly_daniel', 'peffet', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '14 Dec 2022', 'accepted', '', '', '', '12:17 am'),
(2, 'chats_peffet_and_kelly_daniel1670973499ac422d2142413c83dd09', 'users_chat', 'chat_conn_peffet_and_kelly_daniel', 'normal', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'kelly_daniel', 'peffet', 'hmm', 'hmm', 'hmm', '14 Dec 2022', 'accepted', '', '', '', '12:18 am'),
(3, 'chats_peffet_and_kelly_daniel1670973510865c21e36b6c19e42386', 'users_chat', 'chat_conn_peffet_and_kelly_daniel', 'normal', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'kelly_daniel', 'peffet', 'damn', 'damn', 'damn', '14 Dec 2022', 'accepted', '', '', '', '12:18 am'),
(4, 'chats_kelly_daniel_and_dev167147891159f703d0d9bd6f3d3738', 'users_chat', '', 'normal', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'dev', 'kelly_daniel', 'yo bro what''s up', 'yo bro what''s up', 'yo bro what''s up', '19 Dec 2022', 'accepted', '', '', 'yes', '08:41 pm'),
(5, 'chats_kelly_daniel_and_dev1671478930576aae75addce3c47149', 'users_chat', 'chat_conn_kelly_daniel_and_dev', 'normal', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'dev', 'kelly_daniel', 'hey', 'hey', 'hey', '19 Dec 2022', 'accepted', '', '', 'yes', '08:42 pm'),
(6, 'chats_dev_and_kelly_daniel16714789417ce518bd0fac8f278144', 'users_chat', 'chat_conn_dev_and_kelly_daniel', 'normal', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'kelly_daniel', 'dev', 'I''m cool\n', 'I''m cool\n', 'I''m cool\n', '19 Dec 2022', 'accepted', '', '', 'yes', '08:42 pm'),
(7, 'chats_dev_and_kelly_daniel1671478958cfd88423de9ef57624a7', 'users_chat', 'chat_conn_dev_and_kelly_daniel', 'normal', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'kelly_daniel', 'dev', 'how are you doing today', 'how are you doing today', 'how are you doing today', '19 Dec 2022', 'accepted', '', '', 'yes', '08:42 pm'),
(8, 'chats_kelly_daniel_and_dev1671478965f2cc5b521ca9cf7b4513', 'users_chat', 'chat_conn_kelly_daniel_and_dev', 'normal', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'dev', 'kelly_daniel', 'am lord Ma4sa2sa', 'am lord Ma4sa2sa', 'am lord Ma4sa2sa', '19 Dec 2022', 'accepted', '', '', 'yes', '08:42 pm'),
(9, 'chats_dev_and_kelly_daniel1671478976e4d70acb73110e3e5107', 'users_chat', 'chat_conn_dev_and_kelly_daniel', 'normal', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'kelly_daniel', 'dev', 'no b small name b that', 'no b small name b that', 'no b small name b that', '19 Dec 2022', 'accepted', '', '', 'yes', '08:42 pm'),
(10, 'chats_kelly_daniel_and_dev167147898495eadadae4d1050172c0', 'users_chat', 'chat_conn_kelly_daniel_and_dev', 'normal', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'dev', 'kelly_daniel', 'cul', 'cul', 'cul', '19 Dec 2022', 'accepted', '', '', 'yes', '08:43 pm'),
(11, 'chats_peffet_and_kelly_daniel1671479094cdb1da0f219f363cdd60', 'users_chat', 'chat_conn_peffet_and_kelly_daniel', 'normal', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'kelly_daniel', 'peffet', 'yo ', 'yo ', 'yo ', '19 Dec 2022', 'accepted', '', '', '', '08:44 pm'),
(12, 'chats_dev_and_kelly_daniel16714791055af6b5989dbf7e3bd6bd', 'users_chat', 'chat_conn_dev_and_kelly_daniel', 'normal', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'kelly_daniel', 'dev', 'kk ', 'kk ', 'kk ', '19 Dec 2022', 'accepted', '', '', 'yes', '08:45 pm');

-- --------------------------------------------------------

--
-- Table structure for table `chat_media_table`
--

CREATE TABLE `chat_media_table` (
  `id` int(11) NOT NULL,
  `mid` longtext NOT NULL,
  `name` longtext NOT NULL,
  `type` longtext NOT NULL,
  `time` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `classic_write_up`
--

CREATE TABLE `classic_write_up` (
  `id` int(11) NOT NULL,
  `post_id` longtext COLLATE utf8mb4_bin NOT NULL,
  `uid` longtext COLLATE utf8mb4_bin NOT NULL,
  `username` longtext COLLATE utf8mb4_bin NOT NULL,
  `text` longtext COLLATE utf8mb4_bin NOT NULL,
  `bg` longtext COLLATE utf8mb4_bin NOT NULL,
  `font` longtext COLLATE utf8mb4_bin NOT NULL,
  `time` longtext COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `classic_write_up`
--

INSERT INTO `classic_write_up` (`id`, `post_id`, `uid`, `username`, `text`, `bg`, `font`, `time`) VALUES
(1, 'classic_write_up_2147771c053feb9e17d58db6c5fead2c714d122a803573baf7167087612808585749443a1926cabc6c43c1b7d57178496e8d0bc9ec', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', 'Yo bro what''s up', '', 'roboto_fonts', '12/12/2022 09:15:28 pm'),
(2, 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'Hey what''s up\nMy name is Kelly Daniel\nI''m a full stack developer\nAnd I''m the founder of @peffet', '', 'roboto_fonts', '12/13/2022 11:29:15 pm'),
(3, 'classic_write_up_133781f47e7ebefc50475146e7931fbc49c0ef3443bfac93af1670972368f6fa3f39209beea848fd9f157f2501eb903a6119d308c2', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'Peffet will be coming out soon ', 'pb_eight', 'roboto_fonts', '12/13/2022 11:59:28 pm'),
(4, 'classic_write_up_408708de8e7f560d440427d4f342ee7125f7cd361465f8755416710163426582ed7c137f032471c3eec8fcbaca85b8fe038a461be2', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', 'Welcome to peffet', '', 'lato_fonts', '12/14/2022 12:12:22 pm'),
(5, 'classic_write_up_bf6d002bdac3232cc7f9a18d5093b0abd7bec56fc03ec54e3416712869840003c6e2a231e67cd3d87d4268fe605a9d15d85f08a66a', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', ' @kelly_daniel if i no kpie @gideon @peffet @dav @motivation_bucket appollo dey', 'pb2', 'roboto_fonts', '12/17/2022 03:23:04 pm'),
(6, 'classic_write_up_6873f0ab68cd991224a82295f7fa502ece2473248921cfe5a016712874492cba3ae1ab96cae3c2d3b04ccc9b43cf9a216e44d2df90', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'Hey whats up @scott_choker ', 'pb_seven', 'roboto_fonts', '12/17/2022 03:30:49 pm');

-- --------------------------------------------------------

--
-- Table structure for table `commentsreaction`
--

CREATE TABLE `commentsreaction` (
  `id` int(11) NOT NULL,
  `cid` longtext COLLATE utf8mb4_bin NOT NULL,
  `post_id` longtext COLLATE utf8mb4_bin NOT NULL,
  `uid` longtext COLLATE utf8mb4_bin NOT NULL,
  `username` longtext COLLATE utf8mb4_bin NOT NULL,
  `time` longtext COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `commentsreaction`
--

INSERT INTO `commentsreaction` (`id`, `cid`, `post_id`, `uid`, `username`, `time`) VALUES
(1, 'comment_id35ea7a166a1d8d423fc00754087205b0c58d0fdb9f7264a4ff4efcca', 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', '12/16/2022 11:13:15 pm');

-- --------------------------------------------------------

--
-- Table structure for table `comments_table`
--

CREATE TABLE `comments_table` (
  `id` int(11) NOT NULL,
  `cid` longtext COLLATE utf8mb4_bin NOT NULL,
  `post_id` longtext COLLATE utf8mb4_bin NOT NULL,
  `uid` longtext COLLATE utf8mb4_bin NOT NULL,
  `username` longtext COLLATE utf8mb4_bin NOT NULL,
  `comment` longtext COLLATE utf8mb4_bin NOT NULL,
  `time` longtext COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `comments_table`
--

INSERT INTO `comments_table` (`id`, `cid`, `post_id`, `uid`, `username`, `comment`, `time`) VALUES
(1, 'comment_id03393e3f334927054ea0b55eae1d0644dba6cdd52eaac34a56003977', 'portrait_post1671146785c02978126b0eb093850973bb6c79b4', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'Zarachi Kenpachi', '12/16/2022 10:53:47 pm'),
(2, 'comment_id35ea7a166a1d8d423fc00754087205b0c58d0fdb9f7264a4ff4efcca', 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'I know I''ve met an angel in person', '12/16/2022 11:01:09 pm'),
(3, 'comment_ide41ec1ed01993eefb95829ecf89cb7c8c6dd8607fc34e143e8bfc9eb', 'portrait_post1671146785c02978126b0eb093850973bb6c79b4', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'A thousand year blood wars', '12/16/2022 11:19:31 pm'),
(4, 'comment_idf3eab22dd82dafcd7837f77f6c3f4152ce408aab2e80ed81ff4bef15', 'portrait_post1671146688b43f1e5ddbe312fe6d4bb44aa853fc', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'Sakuna the demon lord of Jujutsu Kaisen a bloody villan', '12/16/2022 11:20:57 pm'),
(5, 'comment_id7acf5f546b8f501277f33fad375e93d7a24ef2e164f6dcdd09d3a67b', 'typing_textc1be7946a06b29eac5a6121eeae3951a5e7b27c777bae669951671231387d121771cdb5181d57270e9162491a6c31364380f330f23', '0fa2294ee58945fb8190f7272e990b9e7518b4d2fc3a8db51a', 'kizdver', 'damn', '12/16/2022 11:56:48 pm'),
(6, 'comment_id30d5693b2b28bf0c4dfcdede9e2f792b9d1a9c7c826b19b9ee7df972', 'classic_write_up_2147771c053feb9e17d58db6c5fead2c714d122a803573baf7167087612808585749443a1926cabc6c43c1b7d57178496e8d0bc9ec', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', 'No be my fault na shayo', '12/17/2022 01:58:45 pm'),
(7, 'comment_id53310fb75376677db58634a7eec4394f1df30424959101e2eab681ff', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'Damn peffet is good', '12/17/2022 03:26:35 pm'),
(8, 'comment_id2aaf303d5406ae2d2c22e206914ac5ff6e7e7d285fd969b4ea611465', 'classic_write_up_bf6d002bdac3232cc7f9a18d5093b0abd7bec56fc03ec54e3416712869840003c6e2a231e67cd3d87d4268fe605a9d15d85f08a66a', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'Why mention my name here as hole ', '12/17/2022 03:26:57 pm'),
(9, 'comment_id4ae80a7b2ed6fa8cd455b3ae47d0e7be4fd7d2a0128e2a806d81d85e', 'classic_write_up_bf6d002bdac3232cc7f9a18d5093b0abd7bec56fc03ec54e3416712869840003c6e2a231e67cd3d87d4268fe605a9d15d85f08a66a', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'sorry mhan', '12/17/2022 03:27:21 pm'),
(10, 'comment_id46062dd756522f4d3ee588b3318e0f479c6e5fbbb6d1deaacd97ee01', 'portrait_post1671146475512c038d7f664a141f2ed0c6cf4938', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'Kurosaki Ichigo', '12/19/2022 11:50:33 am'),
(11, 'comment_id149ecee941a698741185d9c4fee5fadd9c2e8fd9db190f1ce081d71b', 'classic_write_up_f5c67d6d205b158bafb570449b5c3b974afb3231c6d857d2a516714469712e532683f79bbbd26a2ec52fceed7fd26eda9909f6b0c4', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', '@kelly_daniel trap', '12/19/2022 11:51:18 am'),
(12, 'comment_id9204e29c36032f78b954d74b5df0b087faa6b6ef629751d3a700933f', 'portrait_post167114645032e5ed2fc60d506126159683970852', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'sakuna', '12/19/2022 12:09:35 pm'),
(13, 'comment_id6130a2eeef876fe400b9c2c97a857bbb0c0765ecd46d6e6b1a0e9a96', 'portrait_post167114645032e5ed2fc60d506126159683970852', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'woo', '12/19/2022 12:09:46 pm'),
(14, 'comment_id03902cc0d582b44465ca5e2073589c9e641e7bf2450cefc103e36262', 'regular_post1671478581e3532ec7fdc261eadc55f156f35399bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', 'dope', '12/19/2022 08:36:37 pm'),
(15, 'comment_id06f7b2304dc033486b1292afc425d2c355725ec502eb9b00c95d176a', 'portrait_post1671146039d5e9f22896f5d2f2e80000e416bcaa', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'hey what''s up', '12/22/2022 07:25:44 pm'),
(16, 'comment_id35e9b39eb33a976508afe2522dfb9d90dd93c2d704f6d56cd44fd37e', 'portrait_post1670844381a9f51cb639e644cd6c01ccccefcf0a', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'you know it''s not the same as it was', '12/23/2022 07:21:00 pm');

-- --------------------------------------------------------

--
-- Table structure for table `comment_reply`
--

CREATE TABLE `comment_reply` (
  `id` int(11) NOT NULL,
  `cid` longtext COLLATE utf8mb4_bin NOT NULL,
  `post_id` longtext COLLATE utf8mb4_bin NOT NULL,
  `repid` longtext COLLATE utf8mb4_bin NOT NULL,
  `uid` longtext COLLATE utf8mb4_bin NOT NULL,
  `username` longtext COLLATE utf8mb4_bin NOT NULL,
  `reply` longtext COLLATE utf8mb4_bin NOT NULL,
  `time` longtext COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `comment_reply`
--

INSERT INTO `comment_reply` (`id`, `cid`, `post_id`, `repid`, `uid`, `username`, `reply`, `time`) VALUES
(1, 'comment_id35ea7a166a1d8d423fc00754087205b0c58d0fdb9f7264a4ff4efcca', 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'comment_reply36650931f8d520b38ff50e4451b56771da626d163e4380b832', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'Some day I''ll make it out of here', '16-12-2022 23:04:29'),
(2, 'comment_id35ea7a166a1d8d423fc00754087205b0c58d0fdb9f7264a4ff4efcca', 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'comment_reply2265cbc5dc89dc78bcad87fc26637efdd842efa8e19d267525', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', '@animixplay damn', '16-12-2022 23:08:14'),
(3, 'comment_ide41ec1ed01993eefb95829ecf89cb7c8c6dd8607fc34e143e8bfc9eb', 'portrait_post1671146785c02978126b0eb093850973bb6c79b4', 'comment_reply626f8c48ab74e94d9fc913ffc5a57c77fea5cb224ae2a6e3d8', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'damn its lit', '16-12-2022 23:19:43');

-- --------------------------------------------------------

--
-- Table structure for table `fanf`
--

CREATE TABLE `fanf` (
  `id_k` int(11) NOT NULL,
  `sender` longtext COLLATE utf8mb4_bin NOT NULL,
  `reciever` longtext COLLATE utf8mb4_bin NOT NULL,
  `notify_permision` longtext COLLATE utf8mb4_bin NOT NULL,
  `regular` longtext COLLATE utf8mb4_bin NOT NULL,
  `write_up` longtext COLLATE utf8mb4_bin NOT NULL,
  `typing_text` longtext COLLATE utf8mb4_bin NOT NULL,
  `portrait` longtext COLLATE utf8mb4_bin NOT NULL,
  `reference` longtext COLLATE utf8mb4_bin NOT NULL,
  `peffet_event` longtext COLLATE utf8mb4_bin NOT NULL,
  `time` text COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `fanf`
--

INSERT INTO `fanf` (`id_k`, `sender`, `reciever`, `notify_permision`, `regular`, `write_up`, `typing_text`, `portrait`, `reference`, `peffet_event`, `time`) VALUES
(1, 'dav', 'motivation_bucket', 'all', '', '', '', '', '', '', '12/12/2022 12:18:36 pm'),
(2, 'peffet', 'kelly_daniel', 'all', 'notify', 'notify', '', 'notify', 'notify', 'notify', '12/13/2022 11:46:44 pm'),
(4, 'kelly_daniel', 'peffet', 'all', '', '', '', '', '', '', '12/14/2022 12:17:33 am'),
(5, 'animixplay', 'dav', 'all', '', '', '', '', '', '', '12/14/2022 10:47:44 pm'),
(6, 'animixplay', 'kelly_daniel', 'all', '', '', '', '', '', '', '12/14/2022 10:47:51 pm'),
(7, 'kizdver', 'kelly_daniel', 'all', '', '', '', '', '', '', '12/17/2022 02:00:46 pm'),
(8, 'dav', 'kelly_daniel', 'all', '', '', '', '', '', '', '12/17/2022 03:25:42 pm'),
(9, 'kelly_daniel', 'animixplay', 'all', '', '', '', '', '', '', '12/19/2022 12:08:56 pm'),
(10, 'kelly_daniel', 'kizdver', 'all', '', '', '', '', '', '', '12/19/2022 12:08:56 pm'),
(11, 'kelly_daniel', 'dav', 'all', '', '', '', '', '', '', '12/19/2022 12:08:58 pm'),
(12, 'kelly_daniel', 'dev ', 'all', '', '', '', '', '', '', '12/19/2022 08:38:45 pm'),
(13, 'dev', 'kelly_daniel', 'all', '', '', '', '', '', '', '12/19/2022 08:41:09 pm'),
(14, 'dev', 'peffet ', 'all', '', '', '', '', '', '', '12/22/2022 11:35:55 am'),
(15, 'dav', 'peffet', 'all', '', '', '', '', '', '', '12/22/2022 11:36:48 am'),
(16, 'dav', 'animixplay', 'all', '', '', '', '', '', '', '12/22/2022 11:36:49 am'),
(17, 'dav', 'kizdver', 'all', '', '', '', '', '', '', '12/22/2022 11:36:51 am'),
(18, 'scott_choker', 'kelly_daniel', 'all', '', '', '', '', '', '', '12/22/2022 11:37:18 am'),
(19, 'scott_choker', 'kizdver', 'all', '', '', '', '', '', '', '12/22/2022 11:37:27 am'),
(20, 'scott_choker', 'peffet', 'all', '', '', '', '', '', '', '12/22/2022 11:37:28 am'),
(21, 'scott_choker', 'dav', 'all', '', '', '', '', '', '', '12/22/2022 11:37:31 am'),
(22, 'scott_choker', 'dev', 'all', '', '', '', '', '', '', '12/22/2022 11:37:32 am'),
(23, 'serene', 'kelly_daniel ', 'all', '', '', '', '', '', '', '12/22/2022 11:38:10 am'),
(24, 'serene', 'peffet', 'all', '', '', '', '', '', '', '12/22/2022 11:38:13 am'),
(25, 'serene', 'kizdver', 'all', '', '', '', '', '', '', '12/22/2022 11:38:14 am'),
(26, 'serene', 'animixplay', 'all', '', '', '', '', '', '', '12/22/2022 11:38:15 am'),
(27, 'scott_choker', 'animixplay', 'all', '', '', '', '', '', '', '12/22/2022 11:44:27 am'),
(28, 'kelly_daniel', 'motivation_bucket ', 'all', '', '', '', '', '', '', '12/22/2022 07:27:47 pm');

-- --------------------------------------------------------

--
-- Table structure for table `ip_count`
--

CREATE TABLE `ip_count` (
  `id` int(11) NOT NULL,
  `ip` longtext COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `is_online`
--

CREATE TABLE `is_online` (
  `id` int(11) NOT NULL,
  `uid` longtext NOT NULL,
  `username` longtext NOT NULL,
  `time` longtext NOT NULL,
  `initial_time` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `is_online`
--

INSERT INTO `is_online` (`id`, `uid`, `username`, `time`, `initial_time`) VALUES
(1, '5eb20d558217b0f32de7b9ac45cac65b237acbb4b1ac9d7819', 'kelly_daniel', '2022-12-10 22:02:38', '2022-12-10 22:00:38'),
(2, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', '2022-12-23 20:16:38', '2022-12-23 20:14:38'),
(3, '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', '2022-12-22 11:41:24', '2022-12-22 11:39:24'),
(4, 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', '2022-12-22 11:38:21', '2022-12-22 11:36:21'),
(5, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', '2022-12-22 11:39:02', '2022-12-22 11:37:02'),
(6, '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'motivation_bucket', '2022-12-15 23:44:24', '2022-12-15 23:42:24'),
(7, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', '2022-12-16 23:39:44', '2022-12-16 23:37:44'),
(8, 'a7841247acd035452005651dd20eb1fb51116cd026476887e6', 'scott_choker', '2022-12-22 11:46:34', '2022-12-22 11:44:34'),
(9, '31a51d1a6c06544e7fef4daaaf334ecafa17d7d3859336a6ab', 'serene', '2022-12-22 11:40:18', '2022-12-22 11:38:18'),
(10, '466888187db016a56a7839f21b21a55f54523fada48fc20b6d', 'gideon', '2022-12-15 23:41:18', '2022-12-15 23:39:18'),
(11, '7dfe3acce2e995f8b1085b128a2ea0cd80bbbe4c25e149a5e1', 'jada', '2022-12-15 23:40:34', '2022-12-15 23:38:34'),
(12, 'f00d74087940f22599100d78d18a3de3cfa8c38c85f2115153', 'John_doe', '2022-12-22 11:43:13', '2022-12-22 11:41:13'),
(13, '0fa2294ee58945fb8190f7272e990b9e7518b4d2fc3a8db51a', 'kizdver', '2022-12-17 14:04:01', '2022-12-17 14:02:01');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `nid` longtext COLLATE utf8mb4_bin NOT NULL,
  `type` longtext COLLATE utf8mb4_bin NOT NULL,
  `uid` longtext COLLATE utf8mb4_bin NOT NULL,
  `username` longtext COLLATE utf8mb4_bin NOT NULL,
  `re_username` longtext COLLATE utf8mb4_bin NOT NULL,
  `re_uid` longtext COLLATE utf8mb4_bin NOT NULL,
  `sub_type` longtext COLLATE utf8mb4_bin NOT NULL,
  `seen_one` longtext COLLATE utf8mb4_bin NOT NULL,
  `seen_two` longtext COLLATE utf8mb4_bin NOT NULL,
  `post_id` longtext COLLATE utf8mb4_bin NOT NULL,
  `cid` longtext COLLATE utf8mb4_bin NOT NULL,
  `repid` longtext COLLATE utf8mb4_bin NOT NULL,
  `time` longtext COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `nid`, `type`, `uid`, `username`, `re_username`, `re_uid`, `sub_type`, `seen_one`, `seen_two`, `post_id`, `cid`, `repid`, `time`) VALUES
(1, 'follow_notif_1670843916dd5c537d49c6466b58750e669a9f6e', 'follow', '', 'dav', 'motivation_bucket', '', '', 'unseen', 'unseen', '', '', '', '12/12/2022 12:18:36 pm'),
(2, 'liked_post_notif_16708454198513830860aa89cd45c919603a685d', 'liked_your_post', '', 'dav', 'motivation_bucket', '', '', 'unseen', 'unseen', 'reference_post_427038f8596f80f74f6fadd19695136ef0679e4ae4a5f84c2f167084354031f9e32abed86da9937836bbc547b84ee0206b32be8e3c', '', '', '12/12/2022 12:43:39 pm'),
(3, 'liked_post_notif_16708454229c437a81965748a83f3ae83bffd90f', 'liked_your_post', '', 'dav', 'motivation_bucket', '', '', 'unseen', 'unseen', 'reference_post_742dabd237d21a81cc05eddafe8c12e02775a14921981094c11670838724476aef8318bc8795e4778309fa631eba2f45b7b3a5921f', '', '', '12/12/2022 12:43:42 pm'),
(4, 'liked_post_notif_1670845430e3dfcae306ee808fd2ac84fde53103', 'liked_your_post', '', 'dav', 'motivation_bucket', '', '', 'unseen', 'unseen', 'reference_post_e9d17d93b3279c5572753b079533de56598cbfd774bc7048991670843434e12c3151d03211e1824adb913fae5fdfabf62f5c2a9b63', '', '', '12/12/2022 12:43:50 pm'),
(5, 'Post_notif0a58ab1930f8331d8acc5917b54593e13492bcfc2c142bbe65', 'post', '', 'kelly_daniel', 'peffet', '', '', 'unseen', 'unseen', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '', '', '12/13/2022 11:29:15 pm'),
(6, 'liked_post_notif_167097094964025281c21766cc865ce4cc2fb652', 'liked_your_post', '', 'peffet', 'kelly_daniel', '', '', 'unseen', 'unseen', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '', '', '12/13/2022 11:35:48 pm'),
(7, 'follow_notif_16709716046ea310d4923390d972033bc56fd853', 'follow', '', 'peffet', 'kelly_daniel', '', '', 'unseen', 'unseen', '', '', '', '12/13/2022 11:46:44 pm'),
(9, 'Post_notif4bd4db86ee32ee4128ce9ce13650aef83fbd67443de2ebcff0', 'post', '', 'peffet', 'Peffet', '', '', 'unseen', 'unseen', 'peffet_event_1b245c299f76a2ea8730effd9dd090707dc6b16165e9b16d3caa55e90264ac32aa8e18f4deed55e92a94ce52586e95aa5db28a8bcc3cdd937698a3f76d474ba0df1670972784eca6715d5a1e9f5426d9ec1b5e65b5ac78992131e62a20', '', '', '12/14/2022 12:06:24 am'),
(10, 'post_new_write_up_notif1670972784ab511fc7642971bc29b52257ac7240', 'post_created', '', 'peffet', 'peffet', '', 'post_created', 'unseen', 'unseen', 'peffet_event_1b245c299f76a2ea8730effd9dd090707dc6b16165e9b16d3caa55e90264ac32aa8e18f4deed55e92a94ce52586e95aa5db28a8bcc3cdd937698a3f76d474ba0df1670972784eca6715d5a1e9f5426d9ec1b5e65b5ac78992131e62a20', '', '', '12/14/2022 12:06:24 am'),
(11, 'Post_notif956c47af41a6f2137e828b25452df16ea8cf0c40f3ae7ada6e', 'post', '', 'kelly_daniel', 'dav', '', '', 'unseen', 'unseen', 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '', '', '12/14/2022 12:14:17 am'),
(13, 'liked_post_notif_167097333304f1680f604824ed69aebfbbceb2f9', 'liked_your_post', '', 'dav', 'kelly_daniel', '', '', 'unseen', 'unseen', 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '', '', '12/14/2022 12:15:32 am'),
(14, 'follow_notif_1670973453558f2fe3dd5d7d5bb2fe52d49b46b8', 'follow', '', 'kelly_daniel', 'peffet', '', '', 'unseen', 'unseen', '', '', '', '12/14/2022 12:17:33 am'),
(15, 'liked_post_notif_16710148798f0874131abaf7743026aa1030e735', 'liked_your_post', '', 'kelly_daniel', 'dav', '', '', 'unseen', 'unseen', 'portrait_post1670844895fe55e4d358fda7d557af6cf75ec5bc', '', '', '12/14/2022 11:47:59 am'),
(16, 'liked_post_notif_16710148858757a0e9ff7452f0bf78ce45a76e65', 'liked_your_post', '', 'kelly_daniel', 'dav', '', '', 'unseen', 'unseen', 'portrait_post167084465667b45cf4196acf6522f72172bc3f2b', '', '', '12/14/2022 11:48:05 am'),
(17, 'liked_post_notif_16710148885bd1c36a6b8322db9fb817b6e5fb08', 'liked_your_post', '', 'kelly_daniel', 'dav', '', '', 'unseen', 'unseen', 'portrait_post1670844180676783f659af3e89e03959187761f8', '', '', '12/14/2022 11:48:08 am'),
(18, 'liked_post_notif_167101489209f5adddc436cb56c42a8ab95ef0a8', 'liked_your_post', '', 'kelly_daniel', 'dav', '', '', 'unseen', 'unseen', 'portrait_post1670844570cf6b3fd5663b440ad6dfef5a483a1a', '', '', '12/14/2022 11:48:12 am'),
(19, 'liked_post_notif_16710148967f9e3ca6ef446a9be3d90384cf2792', 'liked_your_post', '', 'kelly_daniel', 'dav', '', '', 'unseen', 'unseen', 'portrait_post1670844095fa3b2728d67f6b100c96c9bd5ecad7', '', '', '12/14/2022 11:48:16 am'),
(20, 'liked_post_notif_167101489947982aacb9c1348db2e05e971956c7', 'liked_your_post', '', 'kelly_daniel', 'dav', '', '', 'unseen', 'unseen', 'portrait_post167084487134cf462ef76c55cde087401bf8dd1a', '', '', '12/14/2022 11:48:19 am'),
(21, 'liked_post_notif_16710149083db7b4d41aa0e62b5d46e2018162ef', 'liked_your_post', '', 'kelly_daniel', 'dav', '', '', 'unseen', 'unseen', 'portrait_post1670845406bfb48702a735f963dfca8becb91fe5', '', '', '12/14/2022 11:48:28 am'),
(22, 'liked_post_notif_16710149129c92e775bf9e2e03028c9d9b9c9585', 'liked_your_post', '', 'kelly_daniel', 'dav', '', '', 'unseen', 'unseen', 'portrait_post1670843879768eae2024d03c92ff46c4cafacbf6', '', '', '12/14/2022 11:48:32 am'),
(23, 'liked_post_notif_167101597068b1be76b520721db663ca26b88a54', 'liked_your_post', '', 'peffet', 'kelly_daniel', '', '', 'unseen', 'unseen', 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '', '', '12/14/2022 12:06:10 pm'),
(24, 'follow_notif_16710544649ab827a447cee4cbb2f30df8ef7b6f', 'follow', '', 'animixplay', 'dav', '', '', 'unseen', 'unseen', '', '', '', '12/14/2022 10:47:44 pm'),
(25, 'follow_notif_16710544717dc8ad49c1bc8d4b70ffb831f08dca', 'follow', '', 'animixplay', 'kelly_daniel', '', '', 'unseen', 'unseen', '', '', '', '12/14/2022 10:47:51 pm'),
(26, 'liked_post_notif_16710545775043bf8b04ad609a7a1103615010fa', 'liked_your_post', '', 'animixplay', 'dev', '', '', 'unseen', 'unseen', 'classic_write_up_2147771c053feb9e17d58db6c5fead2c714d122a803573baf7167087612808585749443a1926cabc6c43c1b7d57178496e8d0bc9ec', '', '', '12/14/2022 10:49:37 pm'),
(28, 'liked_post_notif_1671143012012ebf3d678a8bcf527252ff55aa12', 'liked_your_post', '', 'animixplay', 'dav', '', '', 'unseen', 'unseen', 'portrait_post1670843879768eae2024d03c92ff46c4cafacbf6', '', '', '12/15/2022 11:23:32 pm'),
(29, 'post_new_write_up_notif167114361829c8ecec901b9f38862da8b7d287a8', 'post_created', '', 'peffet', 'peffet', '', 'post_created', 'unseen', 'unseen', 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', '', '', '12/15/2022 11:33:38 pm'),
(30, 'liked_post_notif_1671143996bba55ae079c62358bf5833adce560d', 'liked_your_post', '', 'scott_choker', 'kelly_daniel', '', '', 'unseen', 'unseen', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '', '', '12/15/2022 11:39:56 pm'),
(31, 'peffet_event_winner1671144909ed76b172ecc157f22843f98ccbc2a8', 'winner_event', '', 'peffet', 'animixplay', '', 'peffet_event', 'unseen', 'unseen', 'peffet_event_1b245c299f76a2ea8730effd9dd090707dc6b16165e9b16d3caa55e90264ac32aa8e18f4deed55e92a94ce52586e95aa5db28a8bcc3cdd937698a3f76d474ba0df1670972784eca6715d5a1e9f5426d9ec1b5e65b5ac78992131e62a20', '', '', '12/15/2022 11:55:09 pm'),
(32, 'post_new_write_up_notif16711459211b636768a3b2819b1dbf6226e69e78', 'post_created', '', 'animixplay', 'animixplay', '', 'post_created', 'unseen', 'unseen', 'peffet_event_272af3ad8a73d0c41f64988e3ed8e7a0709d3feb309c6c096af6a27fc561d9398e48652fd09d6a3d228c7a7d452a9a4b230802883b518a82e7f6d0b7ebb587d408167114592183c78429c4c66b217c921708d2bc6033cac6a6c6b9ff7a', '', '', '12/16/2022 12:12:01 am'),
(34, 'liked_post_notif_1671224069af911ef63fd7af11e8065edff22f8a', 'liked_your_post', '', 'animixplay', 'kelly_daniel', '', '', 'unseen', 'unseen', 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '', '', '12/16/2022 09:54:29 pm'),
(35, 'comment_notifed9a7cd11c59a5d412000c88da170f4741a25fd0304ddcba7d', 'commented', '', 'animixplay', 'kelly_daniel', '', '', 'unseen', 'unseen', 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'comment_id35ea7a166a1d8d423fc00754087205b0c58d0fdb9f7264a4ff4efcca', '', '12/16/2022 11:01:10 pm'),
(36, 'follow_notif_16712820469e6bbacae75fd42037385489ec2e52', 'follow', '', 'kizdver', 'kelly_daniel', '', '', 'unseen', 'unseen', '', '', '', '12/17/2022 02:00:46 pm'),
(37, 'liked_post_notif_1671282055c3af86299034327b3d19c69bf372ce', 'liked_your_post', '', 'kizdver', 'kelly_daniel', '', '', 'unseen', 'unseen', 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '', '', '12/17/2022 02:00:55 pm'),
(38, 'liked_post_notif_1671282058eca1248095fc30648e71fbe6877139', 'liked_your_post', '', 'kizdver', 'kelly_daniel', '', '', 'unseen', 'unseen', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '', '', '12/17/2022 02:00:58 pm'),
(39, 'liked_post_notif_1671282061815e7f43d5c8fd7e740b5fafe5ff48', 'liked_your_post', '', 'kizdver', 'kelly_daniel', '', '', 'unseen', 'unseen', 'classic_write_up_133781f47e7ebefc50475146e7931fbc49c0ef3443bfac93af1670972368f6fa3f39209beea848fd9f157f2501eb903a6119d308c2', '', '', '12/17/2022 02:01:00 pm'),
(40, 'liked_post_notif_167128211435c44a7bcbcf2c3d0f0ba130b70a28', 'liked_your_post', '', 'kizdver', 'kelly_daniel', '', '', 'unseen', 'unseen', 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '', '', '12/17/2022 02:01:54 pm'),
(41, 'Post_notif3be7a6cb0f0f41cd1694bc8b8ed040a4f9fbd08f602ccdb0c4', 'post', '', 'kelly_daniel', 'gideon', '', '', 'unseen', 'unseen', 'classic_write_up_bf6d002bdac3232cc7f9a18d5093b0abd7bec56fc03ec54e3416712869840003c6e2a231e67cd3d87d4268fe605a9d15d85f08a66a', '', '', '12/17/2022 03:23:04 pm'),
(42, 'Post_notifad8ee44515958d62c75fdb0b48f97fee71c0fa2aff96e671ca', 'post', '', 'kelly_daniel', 'peffet', '', '', 'unseen', 'unseen', 'classic_write_up_bf6d002bdac3232cc7f9a18d5093b0abd7bec56fc03ec54e3416712869840003c6e2a231e67cd3d87d4268fe605a9d15d85f08a66a', '', '', '12/17/2022 03:23:04 pm'),
(43, 'Post_notif9302d4475b03b100d7aea976f591fdf6021dd0be9444292bef', 'post', '', 'kelly_daniel', 'dav', '', '', 'unseen', 'unseen', 'classic_write_up_bf6d002bdac3232cc7f9a18d5093b0abd7bec56fc03ec54e3416712869840003c6e2a231e67cd3d87d4268fe605a9d15d85f08a66a', '', '', '12/17/2022 03:23:04 pm'),
(44, 'Post_notif568bbc3067277830ef9d86c7ddebb9b675b46919ff355d1567', 'post', '', 'kelly_daniel', 'motivation_bucket', '', '', 'unseen', 'unseen', 'classic_write_up_bf6d002bdac3232cc7f9a18d5093b0abd7bec56fc03ec54e3416712869840003c6e2a231e67cd3d87d4268fe605a9d15d85f08a66a', '', '', '12/17/2022 03:23:05 pm'),
(46, 'liked_post_notif_16712871402540e99d6824380e99a100c9d02c5d', 'liked_your_post', '', 'dav', 'kelly_daniel', '', '', 'unseen', 'unseen', 'classic_write_up_bf6d002bdac3232cc7f9a18d5093b0abd7bec56fc03ec54e3416712869840003c6e2a231e67cd3d87d4268fe605a9d15d85f08a66a', '', '', '12/17/2022 03:25:40 pm'),
(47, 'follow_notif_16712871421fecbd108d46cb595945ea917c357e', 'follow', '', 'dav', 'kelly_daniel', '', '', 'unseen', 'unseen', '', '', '', '12/17/2022 03:25:42 pm'),
(48, 'liked_post_notif_16712871685e0f3bfbba0a3c923c40973fd87d1a', 'liked_your_post', '', 'dav', 'kelly_daniel', '', '', 'unseen', 'unseen', 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '', '', '12/17/2022 03:26:08 pm'),
(49, 'liked_post_notif_1671287172f228194b2a2bdc9a540a3d290dca20', 'liked_your_post', '', 'dav', 'kelly_daniel', '', '', 'unseen', 'unseen', 'classic_write_up_133781f47e7ebefc50475146e7931fbc49c0ef3443bfac93af1670972368f6fa3f39209beea848fd9f157f2501eb903a6119d308c2', '', '', '12/17/2022 03:26:12 pm'),
(50, 'liked_post_notif_1671287176ccecb05f847b38bfcd27770bcc28f5', 'liked_your_post', '', 'dav', 'kelly_daniel', '', '', 'unseen', 'unseen', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '', '', '12/17/2022 03:26:16 pm'),
(51, 'comment_notif241119732dad0ebaff76220950fc4541abaa0dfd7a57f14f83', 'commented', '', 'dav', 'kelly_daniel', '', '', 'unseen', 'unseen', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', 'comment_id53310fb75376677db58634a7eec4394f1df30424959101e2eab681ff', '', '12/17/2022 03:26:35 pm'),
(52, 'comment_notif22aca40257496f44c9c7025f460b2c69b573a0858ed0e517e5', 'commented', '', 'dav', 'kelly_daniel', '', '', 'unseen', 'unseen', 'classic_write_up_bf6d002bdac3232cc7f9a18d5093b0abd7bec56fc03ec54e3416712869840003c6e2a231e67cd3d87d4268fe605a9d15d85f08a66a', 'comment_id2aaf303d5406ae2d2c22e206914ac5ff6e7e7d285fd969b4ea611465', '', '12/17/2022 03:26:57 pm'),
(53, 'Post_notifb9ee360332987f342c4b27ea439b5c3abe79ae8162f4c3f5a5', 'post', '', 'dav', 'scott_choker', '', '', 'unseen', 'unseen', 'classic_write_up_6873f0ab68cd991224a82295f7fa502ece2473248921cfe5a016712874492cba3ae1ab96cae3c2d3b04ccc9b43cf9a216e44d2df90', '', '', '12/17/2022 03:30:49 pm'),
(54, 'liked_post_notif_16714469848980db03c711d00338e48eef391e9f', 'liked_your_post', '', 'kelly_daniel', 'animixplay', '', '', 'unseen', 'unseen', 'portrait_post1671146475512c038d7f664a141f2ed0c6cf4938', '', '', '12/19/2022 11:49:44 am'),
(55, 'comment_notiff173c6b792b31e2c9c9ed38b1f61e96883e20ef45fcde2abbb', 'commented', '', 'kelly_daniel', 'animixplay', '', '', 'unseen', 'unseen', 'portrait_post1671146475512c038d7f664a141f2ed0c6cf4938', 'comment_id46062dd756522f4d3ee588b3318e0f479c6e5fbbb6d1deaacd97ee01', '', '12/19/2022 11:50:33 am'),
(56, 'follow_notif_167144813625fbff18dd750539a366b132cc162b', 'follow', '', 'kelly_daniel', 'animixplay', '', '', 'unseen', 'unseen', '', '', '', '12/19/2022 12:08:56 pm'),
(57, 'follow_notif_1671448136562cc8b9bf7e09a7bbb7b59d34bdb7', 'follow', '', 'kelly_daniel', 'kizdver', '', '', 'unseen', 'unseen', '', '', '', '12/19/2022 12:08:56 pm'),
(58, 'follow_notif_1671448138a3764f699d6f1c75f1654a3a52b344', 'follow', '', 'kelly_daniel', 'dav', '', '', 'unseen', 'unseen', '', '', '', '12/19/2022 12:08:58 pm'),
(59, 'liked_post_notif_167144815899e3beced1cf280b0c1ab1523d12bb', 'liked_your_post', '', 'kelly_daniel', 'animixplay', '', '', 'unseen', 'unseen', 'portrait_post167114645032e5ed2fc60d506126159683970852', '', '', '12/19/2022 12:09:18 pm'),
(60, 'comment_notifa0a225f5ffcb921f775c9cffa1a03a29ec7284dcd0fe1fbf84', 'commented', '', 'kelly_daniel', 'animixplay', '', '', 'unseen', 'unseen', 'portrait_post167114645032e5ed2fc60d506126159683970852', 'comment_id9204e29c36032f78b954d74b5df0b087faa6b6ef629751d3a700933f', '', '12/19/2022 12:09:35 pm'),
(61, 'comment_notif5da980f8ef77a04829dfbe84bbc67f7fae2e720bb37142b6cf', 'commented', '', 'kelly_daniel', 'animixplay', '', '', 'unseen', 'unseen', 'portrait_post167114645032e5ed2fc60d506126159683970852', 'comment_id6130a2eeef876fe400b9c2c97a857bbb0c0765ecd46d6e6b1a0e9a96', '', '12/19/2022 12:09:46 pm'),
(62, 'liked_post_notif_167144821070013200d8ec50334e9b99c5abcaaa', 'liked_your_post', '', 'kelly_daniel', 'animixplay', '', '', 'unseen', 'unseen', '804d70388276153be3e8a9a91fd2a5798e8daa23c2de252e61eae810', '', '', '12/19/2022 12:10:10 pm'),
(64, 'liked_post_notif_167144861579df581e54c67b837416226999d59e', 'liked_your_post', '', 'kelly_daniel', 'animixplay', '', '', 'unseen', 'unseen', 'portrait_post1671146112f9eacff45f55c9d63ba43ddc843b33', '', '', '12/19/2022 12:16:55 pm'),
(65, 'liked_post_notif_1671477808676a2e8fbcafd3da0b5ecbca5f14b9', 'liked_your_post', '', 'kelly_daniel', 'animixplay', '', '', 'unseen', 'unseen', 'portrait_post1671145477aba7ff5236e00fcf625e4bb0c6783a', '', '', '12/19/2022 08:23:27 pm'),
(66, 'liked_post_notif_1671478433752a4336915b3b81bfb38e5ed4a514', 'liked_your_post', '', 'dev', 'dav', '', '', 'unseen', 'unseen', 'portrait_post1670844895fe55e4d358fda7d557af6cf75ec5bc', '', '', '12/19/2022 08:33:53 pm'),
(67, 'liked_post_notif_16714784558a11dda7ae7af7a1405ca6722a524e', 'liked_your_post', '', 'dev', 'kelly_daniel', '', '', 'unseen', 'unseen', 'classic_write_up_133781f47e7ebefc50475146e7931fbc49c0ef3443bfac93af1670972368f6fa3f39209beea848fd9f157f2501eb903a6119d308c2', '', '', '12/19/2022 08:34:15 pm'),
(68, 'liked_post_notif_1671478459070f62028273802bd5cd470617392c', 'liked_your_post', '', 'dev', 'dav', '', '', 'unseen', 'unseen', 'portrait_post1670844381a9f51cb639e644cd6c01ccccefcf0a', '', '', '12/19/2022 08:34:19 pm'),
(69, 'Post_notif3ce4bcaf486b23714437859a6c9a7408757e86229393108882', 'post', '', 'dev', 'kelly_daniel', '', '', 'unseen', 'unseen', 'regular_post1671478581e3532ec7fdc261eadc55f156f35399bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', '', '', '12/19/2022 08:36:21 pm'),
(70, 'follow_notif_16714787251c3129cab31f275daef63591071348', 'follow', '', 'kelly_daniel', 'dev ', '', '', 'unseen', 'unseen', '', '', '', '12/19/2022 08:38:45 pm'),
(71, 'follow_notif_1671478869502e423683679e7f5318ba4a291f6d', 'follow', '', 'dev', 'kelly_daniel', '', '', 'unseen', 'unseen', '', '', '', '12/19/2022 08:41:09 pm'),
(72, 'liked_post_notif_1671478878d15bfebb407650e015cad618d5496c', 'liked_your_post', '', 'dev', 'kelly_daniel', '', '', 'unseen', 'unseen', 'classic_write_up_bf6d002bdac3232cc7f9a18d5093b0abd7bec56fc03ec54e3416712869840003c6e2a231e67cd3d87d4268fe605a9d15d85f08a66a', '', '', '12/19/2022 08:41:18 pm'),
(73, 'liked_post_notif_16717047069a8e1ebcd2fa8f7f238db1dd9346a5', 'liked_your_post', '', 'peffet', 'kelly_daniel', '', '', 'unseen', 'unseen', 'regular_post167144794990512fe362855f87e492fda039ff032a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '', '', '12/22/2022 11:25:06 am'),
(74, 'liked_post_notif_16717047101ab80b9c53abdfabf3521249c89fae', 'liked_your_post', '', 'peffet', 'kelly_daniel', '', '', 'unseen', 'unseen', 'classic_write_up_f5c67d6d205b158bafb570449b5c3b974afb3231c6d857d2a516714469712e532683f79bbbd26a2ec52fceed7fd26eda9909f6b0c4', '', '', '12/22/2022 11:25:10 am'),
(75, 'liked_post_notif_16717047117a583629cd9bf5fa4b540a992ebfd6', 'liked_your_post', '', 'peffet', 'kelly_daniel', '', '', 'unseen', 'unseen', 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '', '', '12/22/2022 11:25:11 am'),
(76, 'post_new_write_up_notif16717052736d4e6b889326cecaf8e18d21cc3dab', 'post_created', '', 'peffet', 'peffet', '', 'post_created', 'unseen', 'unseen', 'peffet_event_7252c234af739529f081ab6df4bdf739faf475382f08b29f6698845c7154a5d4f291e73abae1bc49a162d28f192bfc9adc295fe45ccce3d696739aba4af0f4d5951671705273813e577eb8fa6acfb91b8b00236ca425d868f7868e82ff', '', '', '12/22/2022 11:34:33 am'),
(77, 'liked_post_notif_1671705331178cc794af4a63f8e5d366d1679c7a', 'liked_your_post', '', 'dev', 'kelly_daniel', '', '', 'unseen', 'unseen', 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '', '', '12/22/2022 11:35:31 am'),
(78, 'liked_post_notif_167170533270467c43047ce6f50ba841c7ddfbed', 'liked_your_post', '', 'dev', 'kelly_daniel', '', '', 'unseen', 'unseen', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '', '', '12/22/2022 11:35:32 am'),
(79, 'follow_notif_1671705355e2c0b93a5bd471746f7ba5e32d8501', 'follow', '', 'dev', 'peffet ', '', '', 'unseen', 'unseen', '', '', '', '12/22/2022 11:35:55 am'),
(80, 'liked_post_notif_1671705401da72a92015bf111e829f29d82a5c6a', 'liked_your_post', '', 'dav', 'kelly_daniel', '', '', 'unseen', 'unseen', 'classic_write_up_f5c67d6d205b158bafb570449b5c3b974afb3231c6d857d2a516714469712e532683f79bbbd26a2ec52fceed7fd26eda9909f6b0c4', '', '', '12/22/2022 11:36:41 am'),
(81, 'follow_notif_16717054080f94ccec0948ee1abe15c4b26b88e5', 'follow', '', 'dav', 'peffet', '', '', 'unseen', 'unseen', '', '', '', '12/22/2022 11:36:48 am'),
(82, 'follow_notif_1671705410f24a09d747fd5bfcd445329be9f829', 'follow', '', 'dav', 'animixplay', '', '', 'unseen', 'unseen', '', '', '', '12/22/2022 11:36:49 am'),
(83, 'follow_notif_1671705411729d55180948e773efebe1537e36d3', 'follow', '', 'dav', 'kizdver', '', '', 'unseen', 'unseen', '', '', '', '12/22/2022 11:36:51 am'),
(84, 'follow_notif_1671705438dbe3f4840c1912d183e5bd6e4a8891', 'follow', '', 'scott_choker', 'kelly_daniel', '', '', 'unseen', 'unseen', '', '', '', '12/22/2022 11:37:18 am'),
(85, 'follow_notif_16717054471528d86cc59cf436c6cf81bb51a687', 'follow', '', 'scott_choker', 'kizdver', '', '', 'unseen', 'unseen', '', '', '', '12/22/2022 11:37:27 am'),
(86, 'follow_notif_16717054486be065c8e69a5033b3a86f832f15d0', 'follow', '', 'scott_choker', 'peffet', '', '', 'unseen', 'unseen', '', '', '', '12/22/2022 11:37:28 am'),
(87, 'follow_notif_1671705451cc642f840b306ad36d675a7260ed50', 'follow', '', 'scott_choker', 'dav', '', '', 'unseen', 'unseen', '', '', '', '12/22/2022 11:37:31 am'),
(88, 'follow_notif_16717054523b38ddbdf4e7a546de1fa5c5c7e306', 'follow', '', 'scott_choker', 'dev', '', '', 'unseen', 'unseen', '', '', '', '12/22/2022 11:37:32 am'),
(89, 'follow_notif_16717054906102c9d00b316077132c3a12925671', 'follow', '', 'serene', 'kelly_daniel ', '', '', 'unseen', 'unseen', '', '', '', '12/22/2022 11:38:10 am'),
(90, 'follow_notif_1671705493a9df513c4269b0e0110edf3f5016ec', 'follow', '', 'serene', 'peffet', '', '', 'unseen', 'unseen', '', '', '', '12/22/2022 11:38:13 am'),
(91, 'follow_notif_1671705494b2a6d0db0cb02625e5e8628e96b5a4', 'follow', '', 'serene', 'kizdver', '', '', 'unseen', 'unseen', '', '', '', '12/22/2022 11:38:14 am'),
(92, 'follow_notif_1671705495a03a84ae55bf15e72f4ec579f968bd', 'follow', '', 'serene', 'animixplay', '', '', 'unseen', 'unseen', '', '', '', '12/22/2022 11:38:15 am'),
(93, 'liked_post_notif_1671705555c879c6b80cd7e68aefa16cb1409632', 'liked_your_post', '', 'peffet', 'animixplay', '', '', 'unseen', 'unseen', 'portrait_post1671146475512c038d7f664a141f2ed0c6cf4938', '', '', '12/22/2022 11:39:15 am'),
(94, 'liked_post_notif_1671705558fa9c88defbc36aac38c1c07d852abb', 'liked_your_post', '', 'peffet', 'animixplay', '', '', 'unseen', 'unseen', 'portrait_post1671146413c48a5c46021c1deacca101351e431e', '', '', '12/22/2022 11:39:18 am'),
(95, 'liked_post_notif_167170556199199d91e167eb16897db2b19ce4e0', 'liked_your_post', '', 'peffet', 'motivation_bucket', '', '', 'unseen', 'unseen', 'reference_post_345998b6e1e55ccecb75eb347ab90f1e991e434d9f9d6fa01d1670843603d65cae043516bd4ffdc0804bebcb960b06d51c6df240cc', '', '', '12/22/2022 11:39:21 am'),
(96, 'liked_post_notif_1671705730eda9d38721f875820b39e9758bd043', 'liked_your_post', '', 'scott_choker', 'animixplay', '', '', 'unseen', 'unseen', 'portrait_post1671145704e599b655cb2f4de3b62dc4f3deacc7', '', '', '12/22/2022 11:42:09 am'),
(97, 'liked_post_notif_16717058455c632ceddee5c8649a9a15dc60e478', 'liked_your_post', '', 'scott_choker', 'animixplay', '', '', 'unseen', 'unseen', 'portrait_post1671146475512c038d7f664a141f2ed0c6cf4938', '', '', '12/22/2022 11:44:05 am'),
(98, 'liked_post_notif_1671705848e5111dd1b126438f75d0336cd6a846', 'liked_your_post', '', 'scott_choker', 'kelly_daniel', '', '', 'unseen', 'unseen', 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '', '', '12/22/2022 11:44:08 am'),
(99, 'liked_post_notif_1671705854e4dda906c9abf3c3ba382fb25e5e9d', 'liked_your_post', '', 'scott_choker', 'dav', '', '', 'unseen', 'unseen', 'classic_write_up_6873f0ab68cd991224a82295f7fa502ece2473248921cfe5a016712874492cba3ae1ab96cae3c2d3b04ccc9b43cf9a216e44d2df90', '', '', '12/22/2022 11:44:14 am'),
(100, 'liked_post_notif_16717058574b5198e61bcb682243de939f68341e', 'liked_your_post', '', 'scott_choker', 'animixplay', '', '', 'unseen', 'unseen', 'portrait_post16711460747e7006e0a5cccdebf171dda2a7c901', '', '', '12/22/2022 11:44:17 am'),
(101, 'liked_post_notif_1671705860cf450835333239f2628f8894158ec0', 'liked_your_post', '', 'scott_choker', 'motivation_bucket', '', '', 'unseen', 'unseen', 'reference_post_b60ccdee9e50b8570463023b264b72e38d055dcfe09251f38b16708434081d3a17bed72b39c62c77d857d4b4634eac3b996a2d23e3', '', '', '12/22/2022 11:44:20 am'),
(102, 'follow_notif_16717058676a9596902f4f6a818a260db8188ba2', 'follow', '', 'scott_choker', 'animixplay', '', '', 'unseen', 'unseen', '', '', '', '12/22/2022 11:44:27 am'),
(103, 'liked_post_notif_1671705883f81df343104605dcf333cc6ffe20b4', 'liked_your_post', '', 'kelly_daniel', 'animixplay', '', '', 'unseen', 'unseen', 'portrait_post16711466535de9e6bc914462a7754cd3614b542e', '', '', '12/22/2022 11:44:43 am'),
(104, 'liked_post_notif_16717335346ac918fb766cadf0b66da5aefe53eb', 'liked_your_post', '', 'kelly_daniel', 'animixplay', '', '', 'unseen', 'unseen', 'portrait_post1671146039d5e9f22896f5d2f2e80000e416bcaa', '', '', '12/22/2022 07:25:34 pm'),
(105, 'comment_notif88fe07c767466c429a2300cf673a74c93d9834024d34f3d4df', 'commented', '', 'kelly_daniel', 'animixplay', '', '', 'unseen', 'unseen', 'portrait_post1671146039d5e9f22896f5d2f2e80000e416bcaa', 'comment_id06f7b2304dc033486b1292afc425d2c355725ec502eb9b00c95d176a', '', '12/22/2022 07:25:45 pm'),
(106, 'follow_notif_16717336677f1580e81abb5ee33e8b7461a91457', 'follow', '', 'kelly_daniel', 'motivation_bucket ', '', '', 'unseen', 'unseen', '', '', '', '12/22/2022 07:27:47 pm'),
(107, 'comment_notif0c42f6261e911f319a1b61b4c04891fd15a8aa0908414bca10', 'commented', '', 'kelly_daniel', 'dav', '', '', 'unseen', 'unseen', 'portrait_post1670844381a9f51cb639e644cd6c01ccccefcf0a', 'comment_id35e9b39eb33a976508afe2522dfb9d90dd93c2d704f6d56cd44fd37e', '', '12/23/2022 07:21:00 pm'),
(108, 'liked_post_notif_16718220972cf519b595627cc5f016d1bad7ccb4', 'liked_your_post', '', 'kelly_daniel', 'dav', '', '', 'unseen', 'unseen', 'classic_write_up_6873f0ab68cd991224a82295f7fa502ece2473248921cfe5a016712874492cba3ae1ab96cae3c2d3b04ccc9b43cf9a216e44d2df90', '', '', '12/23/2022 08:01:37 pm');

-- --------------------------------------------------------

--
-- Table structure for table `peffet_event_application_table`
--

CREATE TABLE `peffet_event_application_table` (
  `id` int(11) NOT NULL,
  `eid` longtext NOT NULL,
  `creator_id` longtext NOT NULL,
  `uid` longtext NOT NULL,
  `username` longtext NOT NULL,
  `media` longtext NOT NULL,
  `media_type` longtext NOT NULL,
  `time` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `peffet_event_application_table`
--

INSERT INTO `peffet_event_application_table` (`id`, `eid`, `creator_id`, `uid`, `username`, `media`, `media_type`, `time`) VALUES
(3, 'peffet_event_1b245c299f76a2ea8730effd9dd090707dc6b16165e9b16d3caa55e90264ac32aa8e18f4deed55e92a94ce52586e95aa5db28a8bcc3cdd937698a3f76d474ba0df1670972784eca6715d5a1e9f5426d9ec1b5e65b5ac78992131e62a20', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'peffet_event_41531671143400.jpg', 'jpg', '12/15/2022 11:30:00 pm'),
(7, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'f00d74087940f22599100d78d18a3de3cfa8c38c85f2115153', 'John_doe', 'peffet_event_96281671143894.jpg', 'jpg', '12/15/2022 11:38:14 pm'),
(8, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', '7dfe3acce2e995f8b1085b128a2ea0cd80bbbe4c25e149a5e1', 'jada', 'peffet_event_35281671143913.jpg', 'jpg', '12/15/2022 11:38:33 pm'),
(9, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', '466888187db016a56a7839f21b21a55f54523fada48fc20b6d', 'gideon', 'peffet_event_58401671143954.jpg', 'jpg', '12/15/2022 11:39:14 pm'),
(10, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', '31a51d1a6c06544e7fef4daaaf334ecafa17d7d3859336a6ab', 'serene', 'peffet_event_35001671143981.jpg', 'jpg', '12/15/2022 11:39:41 pm'),
(11, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'a7841247acd035452005651dd20eb1fb51116cd026476887e6', 'scott_choker', 'peffet_event_41091671144071.jpg', 'jpg', '12/15/2022 11:41:11 pm'),
(12, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'peffet_event_65681671144111.jpg', 'jpg', '12/15/2022 11:41:51 pm'),
(13, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'motivation_bucket', 'peffet_event_70761671144140.jpg', 'jpg', '12/15/2022 11:42:20 pm'),
(15, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', 'peffet_event_61861671144198.jpg', 'jpg', '12/15/2022 11:43:18 pm'),
(16, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'peffet_event_17011671144263.jpg', 'jpg', '12/15/2022 11:44:23 pm'),
(17, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'peffet_event_87951671144283.jpg', 'jpg', '12/15/2022 11:44:43 pm');

-- --------------------------------------------------------

--
-- Table structure for table `peffet_event_main_table`
--

CREATE TABLE `peffet_event_main_table` (
  `id` int(11) NOT NULL,
  `uid` longtext NOT NULL,
  `username` longtext NOT NULL,
  `eid` longtext NOT NULL,
  `description` longtext NOT NULL,
  `media_type` longtext NOT NULL,
  `target_audience` longtext NOT NULL,
  `orientation` longtext NOT NULL,
  `num_of_part` longtext NOT NULL,
  `stage` longtext NOT NULL,
  `time` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `peffet_event_main_table`
--

INSERT INTO `peffet_event_main_table` (`id`, `uid`, `username`, `eid`, `description`, `media_type`, `target_audience`, `orientation`, `num_of_part`, `stage`, `time`) VALUES
(1, '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', 'peffet_event_1b245c299f76a2ea8730effd9dd090707dc6b16165e9b16d3caa55e90264ac32aa8e18f4deed55e92a94ce52586e95aa5db28a8bcc3cdd937698a3f76d474ba0df1670972784eca6715d5a1e9f5426d9ec1b5e65b5ac78992131e62a20', 'Our team at @Peffet we are hosting an event for the best anime pictures $500 dollars for the winner', 'picture', 'All', 'portrait', '4', 'concluded', '12/14/2022 12:06:24 am'),
(2, '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'Our team at @peffet we are hosting an event for the best anime pictures $500 dollars for the winner', 'picture', 'All', 'portrait', '10', 'event', '12/15/2022 11:33:38 pm');

-- --------------------------------------------------------

--
-- Table structure for table `peffet_event_pair`
--

CREATE TABLE `peffet_event_pair` (
  `id` int(11) NOT NULL,
  `eid` longtext NOT NULL,
  `pair_id` longtext NOT NULL,
  `pair_one_name` longtext NOT NULL,
  `pair_two_name` longtext NOT NULL,
  `pair_one_media` longtext NOT NULL,
  `pair_two_media` longtext NOT NULL,
  `time` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `peffet_event_pair`
--

INSERT INTO `peffet_event_pair` (`id`, `eid`, `pair_id`, `pair_one_name`, `pair_two_name`, `pair_one_media`, `pair_two_media`, `time`) VALUES
(3, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_ce617d553ae0e1f8b98b3f249a2a81518bd05837a81a86fac8d3074f45cad0f6f986fa', 'serene', 'dav', 'peffet_event_35001671143981.jpg', 'peffet_event_17011671144263.jpg', '12/15/2022 11:45:07 pm'),
(4, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_0a89072e589b725970e1c3a7f0163b5ac5b0fea32742539a0b7595719dbcb114e7ff5a', 'jada', 'kelly_daniel', 'peffet_event_35281671143913.jpg', 'peffet_event_87951671144283.jpg', '12/15/2022 11:45:07 pm'),
(5, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_101dada66cbbccd5799ac137f68e68a3dcd1dcef0fc554ccd385ca01721d0298c2d05b', 'animixplay', 'gideon', 'peffet_event_65681671144111.jpg', 'peffet_event_58401671143954.jpg', '12/15/2022 11:45:07 pm'),
(6, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_fac72ead4fa6237caf997920d36ff6ad17492c97f32dd1cfc6b56e6bc1eadd28989c2e', 'dev', 'motivation_bucket', 'peffet_event_61861671144198.jpg', 'peffet_event_70761671144140.jpg', '12/15/2022 11:45:07 pm'),
(7, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_f07ec6a7b58a6ccc323d041a1287e8b77b99b6ad537b484776a2b0758eef64d2bfc22c', 'John_doe', 'scott_choker', 'peffet_event_96281671143894.jpg', 'peffet_event_41091671144071.jpg', '12/15/2022 11:45:07 pm');

-- --------------------------------------------------------

--
-- Table structure for table `peffet_event_reaction`
--

CREATE TABLE `peffet_event_reaction` (
  `id` int(11) NOT NULL,
  `eid` longtext NOT NULL,
  `pair_id` longtext NOT NULL,
  `media_type` longtext NOT NULL,
  `description` longtext NOT NULL,
  `pair_one_name` longtext NOT NULL,
  `pair_two_name` longtext NOT NULL,
  `like_for` longtext NOT NULL,
  `uid` longtext NOT NULL,
  `username` longtext NOT NULL,
  `time` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `peffet_event_reaction`
--

INSERT INTO `peffet_event_reaction` (`id`, `eid`, `pair_id`, `media_type`, `description`, `pair_one_name`, `pair_two_name`, `like_for`, `uid`, `username`, `time`) VALUES
(1, 'peffet_event_1b245c299f76a2ea8730effd9dd090707dc6b16165e9b16d3caa55e90264ac32aa8e18f4deed55e92a94ce52586e95aa5db28a8bcc3cdd937698a3f76d474ba0df1670972784eca6715d5a1e9f5426d9ec1b5e65b5ac78992131e62a20', 'peffet_event_pair_fe7bf38fd6a95b09b52544c11a4eaf241f8f1146eaebcdab87015b15e18c2b3050a066', '..', '..', 'kelly_daniel', 'dav', 'pair_one', '...', '...', '12/15/2022 11:32:27 pm'),
(2, 'peffet_event_1b245c299f76a2ea8730effd9dd090707dc6b16165e9b16d3caa55e90264ac32aa8e18f4deed55e92a94ce52586e95aa5db28a8bcc3cdd937698a3f76d474ba0df1670972784eca6715d5a1e9f5426d9ec1b5e65b5ac78992131e62a20', 'peffet_event_pair_fe7bf38fd6a95b09b52544c11a4eaf241f8f1146eaebcdab87015b15e18c2b3050a066', '..', '..', 'kelly_daniel', 'dav', 'pair_two', '...', '...', '12/15/2022 11:32:27 pm'),
(3, 'peffet_event_1b245c299f76a2ea8730effd9dd090707dc6b16165e9b16d3caa55e90264ac32aa8e18f4deed55e92a94ce52586e95aa5db28a8bcc3cdd937698a3f76d474ba0df1670972784eca6715d5a1e9f5426d9ec1b5e65b5ac78992131e62a20', 'peffet_event_pair_65e66a4d3acb7b10f1c5d4b8b96bf2e3e249648e6c24097b4731c84dc553f03920a18c', '..', '..', 'animixplay', 'dev', 'pair_one', '...', '...', '12/15/2022 11:32:27 pm'),
(4, 'peffet_event_1b245c299f76a2ea8730effd9dd090707dc6b16165e9b16d3caa55e90264ac32aa8e18f4deed55e92a94ce52586e95aa5db28a8bcc3cdd937698a3f76d474ba0df1670972784eca6715d5a1e9f5426d9ec1b5e65b5ac78992131e62a20', 'peffet_event_pair_65e66a4d3acb7b10f1c5d4b8b96bf2e3e249648e6c24097b4731c84dc553f03920a18c', '..', '..', 'animixplay', 'dev', 'pair_two', '...', '...', '12/15/2022 11:32:27 pm'),
(5, 'peffet_event_1b245c299f76a2ea8730effd9dd090707dc6b16165e9b16d3caa55e90264ac32aa8e18f4deed55e92a94ce52586e95aa5db28a8bcc3cdd937698a3f76d474ba0df1670972784eca6715d5a1e9f5426d9ec1b5e65b5ac78992131e62a20', 'peffet_event_pair_65e66a4d3acb7b10f1c5d4b8b96bf2e3e249648e6c24097b4731c84dc553f03920a18c', 'picture', 'Our team at @Peffet we are hosting an event for the best anime pictures $500 dollars for the winner', 'animixplay', 'dev', 'pair_one', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', '12/15/2022 11:33:00 pm'),
(6, 'peffet_event_1b245c299f76a2ea8730effd9dd090707dc6b16165e9b16d3caa55e90264ac32aa8e18f4deed55e92a94ce52586e95aa5db28a8bcc3cdd937698a3f76d474ba0df1670972784eca6715d5a1e9f5426d9ec1b5e65b5ac78992131e62a20', 'peffet_event_pair_fe7bf38fd6a95b09b52544c11a4eaf241f8f1146eaebcdab87015b15e18c2b3050a066', 'picture', 'Our team at @Peffet we are hosting an event for the best anime pictures $500 dollars for the winner', 'kelly_daniel', 'dav', 'pair_one', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', '12/15/2022 11:33:05 pm'),
(7, 'peffet_event_1b245c299f76a2ea8730effd9dd090707dc6b16165e9b16d3caa55e90264ac32aa8e18f4deed55e92a94ce52586e95aa5db28a8bcc3cdd937698a3f76d474ba0df1670972784eca6715d5a1e9f5426d9ec1b5e65b5ac78992131e62a20', 'peffet_event_pair_65e66a4d3acb7b10f1c5d4b8b96bf2e3e249648e6c24097b4731c84dc553f03920a18c', 'picture', 'Our team at @Peffet we are hosting an event for the best anime pictures $500 dollars for the winner', 'animixplay', 'dev', 'pair_one', 'a7841247acd035452005651dd20eb1fb51116cd026476887e6', 'scott_choker', '12/15/2022 11:40:03 pm'),
(8, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_ce617d553ae0e1f8b98b3f249a2a81518bd05837a81a86fac8d3074f45cad0f6f986fa', '..', '..', 'serene', 'dav', 'pair_one', '...', '...', '12/15/2022 11:45:07 pm'),
(9, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_ce617d553ae0e1f8b98b3f249a2a81518bd05837a81a86fac8d3074f45cad0f6f986fa', '..', '..', 'serene', 'dav', 'pair_two', '...', '...', '12/15/2022 11:45:07 pm'),
(10, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_0a89072e589b725970e1c3a7f0163b5ac5b0fea32742539a0b7595719dbcb114e7ff5a', '..', '..', 'jada', 'kelly_daniel', 'pair_one', '...', '...', '12/15/2022 11:45:07 pm'),
(11, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_0a89072e589b725970e1c3a7f0163b5ac5b0fea32742539a0b7595719dbcb114e7ff5a', '..', '..', 'jada', 'kelly_daniel', 'pair_two', '...', '...', '12/15/2022 11:45:07 pm'),
(12, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_101dada66cbbccd5799ac137f68e68a3dcd1dcef0fc554ccd385ca01721d0298c2d05b', '..', '..', 'animixplay', 'gideon', 'pair_one', '...', '...', '12/15/2022 11:45:07 pm'),
(13, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_101dada66cbbccd5799ac137f68e68a3dcd1dcef0fc554ccd385ca01721d0298c2d05b', '..', '..', 'animixplay', 'gideon', 'pair_two', '...', '...', '12/15/2022 11:45:07 pm'),
(14, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_fac72ead4fa6237caf997920d36ff6ad17492c97f32dd1cfc6b56e6bc1eadd28989c2e', '..', '..', 'dev', 'motivation_bucket', 'pair_one', '...', '...', '12/15/2022 11:45:07 pm'),
(15, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_fac72ead4fa6237caf997920d36ff6ad17492c97f32dd1cfc6b56e6bc1eadd28989c2e', '..', '..', 'dev', 'motivation_bucket', 'pair_two', '...', '...', '12/15/2022 11:45:07 pm'),
(16, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_f07ec6a7b58a6ccc323d041a1287e8b77b99b6ad537b484776a2b0758eef64d2bfc22c', '..', '..', 'John_doe', 'scott_choker', 'pair_one', '...', '...', '12/15/2022 11:45:07 pm'),
(17, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_f07ec6a7b58a6ccc323d041a1287e8b77b99b6ad537b484776a2b0758eef64d2bfc22c', '..', '..', 'John_doe', 'scott_choker', 'pair_two', '...', '...', '12/15/2022 11:45:07 pm'),
(18, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_0a89072e589b725970e1c3a7f0163b5ac5b0fea32742539a0b7595719dbcb114e7ff5a', 'picture', 'Our team at @peffet we are hosting an event for the best anime pictures $500 dollars for the winner', 'jada', 'kelly_daniel', 'pair_two', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', '12/15/2022 11:46:34 pm'),
(20, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_f07ec6a7b58a6ccc323d041a1287e8b77b99b6ad537b484776a2b0758eef64d2bfc22c', 'picture', 'Our team at @peffet we are hosting an event for the best anime pictures $500 dollars for the winner', 'John_doe', 'scott_choker', 'pair_two', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', '12/15/2022 11:48:54 pm'),
(21, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_ce617d553ae0e1f8b98b3f249a2a81518bd05837a81a86fac8d3074f45cad0f6f986fa', 'picture', 'Our team at @peffet we are hosting an event for the best anime pictures $500 dollars for the winner', 'serene', 'dav', 'pair_two', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', '12/15/2022 11:49:01 pm'),
(22, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_fac72ead4fa6237caf997920d36ff6ad17492c97f32dd1cfc6b56e6bc1eadd28989c2e', 'picture', 'Our team at @peffet we are hosting an event for the best anime pictures $500 dollars for the winner', 'dev', 'motivation_bucket', 'pair_two', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', '12/15/2022 11:49:04 pm'),
(23, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_101dada66cbbccd5799ac137f68e68a3dcd1dcef0fc554ccd385ca01721d0298c2d05b', 'picture', 'Our team at @peffet we are hosting an event for the best anime pictures $500 dollars for the winner', 'animixplay', 'gideon', 'pair_one', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', '12/15/2022 11:49:10 pm'),
(24, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_ce617d553ae0e1f8b98b3f249a2a81518bd05837a81a86fac8d3074f45cad0f6f986fa', 'picture', 'Our team at @peffet we are hosting an event for the best anime pictures $500 dollars for the winner', 'serene', 'dav', 'pair_one', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', '12/19/2022 11:20:22 am'),
(25, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_f07ec6a7b58a6ccc323d041a1287e8b77b99b6ad537b484776a2b0758eef64d2bfc22c', 'picture', 'Our team at @peffet we are hosting an event for the best anime pictures $500 dollars for the winner', 'John_doe', 'scott_choker', 'pair_one', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', '12/19/2022 08:34:32 pm'),
(28, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_0a89072e589b725970e1c3a7f0163b5ac5b0fea32742539a0b7595719dbcb114e7ff5a', 'picture', 'Our team at @peffet we are hosting an event for the best anime pictures $500 dollars for the winner', 'jada', 'kelly_daniel', 'pair_one', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', '12/19/2022 08:46:09 pm'),
(29, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_fac72ead4fa6237caf997920d36ff6ad17492c97f32dd1cfc6b56e6bc1eadd28989c2e', 'picture', 'Our team at @peffet we are hosting an event for the best anime pictures $500 dollars for the winner', 'dev', 'motivation_bucket', 'pair_two', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', '12/19/2022 08:46:18 pm'),
(30, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_ce617d553ae0e1f8b98b3f249a2a81518bd05837a81a86fac8d3074f45cad0f6f986fa', 'picture', 'Our team at @peffet we are hosting an event for the best anime pictures $500 dollars for the winner', 'serene', 'dav', 'pair_one', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', '12/19/2022 08:46:39 pm'),
(31, 'peffet_event_8cda08a78e7c18925e5519ea8408e5c06551f96471f2fd6735ea6e20637446a41cf516a06fd9d15973c1e0b0ea519530ba1e16df4030bb59804c33c233c8c8717c1671143618a5e17b29a4872a909df12a8838589e6310fd8d7590e568', 'peffet_event_pair_101dada66cbbccd5799ac137f68e68a3dcd1dcef0fc554ccd385ca01721d0298c2d05b', 'picture', 'Our team at @peffet we are hosting an event for the best anime pictures $500 dollars for the winner', 'animixplay', 'gideon', 'pair_one', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', '12/19/2022 08:48:23 pm');

-- --------------------------------------------------------

--
-- Table structure for table `portrait_post`
--

CREATE TABLE `portrait_post` (
  `id` int(11) NOT NULL,
  `uid` longtext COLLATE utf8mb4_bin NOT NULL,
  `post_id` longtext COLLATE utf8mb4_bin NOT NULL,
  `username` longtext COLLATE utf8mb4_bin NOT NULL,
  `caption` longtext COLLATE utf8mb4_bin NOT NULL,
  `image` longtext COLLATE utf8mb4_bin NOT NULL,
  `time` longtext COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `portrait_post`
--

INSERT INTO `portrait_post` (`id`, `uid`, `post_id`, `username`, `caption`, `image`, `time`) VALUES
(1, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post1670843879768eae2024d03c92ff46c4cafacbf6', 'dav', 'Dope guy #dope #frenchguy', 'peffet_profile_image72251670843879.jpeg', '12/12/2022 12:17:59 pm'),
(2, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post1670844095fa3b2728d67f6b100c96c9bd5ecad7', 'dav', 'this guy is looking nice #dope #nice #portrait', 'peffet_profile_image14061670844095.jpeg', '12/12/2022 12:21:35 pm'),
(3, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post1670844180676783f659af3e89e03959187761f8', 'dav', 'Guy on black #portrait #dope', 'peffet_profile_image42661670844180.jpg', '12/12/2022 12:23:00 pm'),
(4, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post1670844381a9f51cb639e644cd6c01ccccefcf0a', 'dav', 'NF dope guy GOAT #portrait #NF #NFReal', 'peffet_profile_image29371670844381.jpg', '12/12/2022 12:26:21 pm'),
(5, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post1670844570cf6b3fd5663b440ad6dfef5a483a1a', 'dav', '#portrait', 'peffet_profile_image27351670844570.jpeg', '12/12/2022 12:29:30 pm'),
(6, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post167084465667b45cf4196acf6522f72172bc3f2b', 'dav', '#portrait', 'peffet_profile_image86461670844656.jpeg', '12/12/2022 12:30:56 pm'),
(7, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post167084474352fcc3bc04f86edb6ec93b7ff3352c', 'dav', '#portrait', 'peffet_profile_image96681670844743.jpeg', '12/12/2022 12:32:23 pm'),
(9, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post167084487134cf462ef76c55cde087401bf8dd1a', 'dav', '#portrait', 'peffet_profile_image59621670844871.jpeg', '12/12/2022 12:34:31 pm'),
(10, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post1670844895fe55e4d358fda7d557af6cf75ec5bc', 'dav', '#portrait', 'peffet_profile_image46031670844895.jpg', '12/12/2022 12:34:55 pm'),
(11, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post1670844914ac1a6b2590eb575624aa37353d122c', 'dav', '#portrait', 'peffet_profile_image30751670844914.jpeg', '12/12/2022 12:35:14 pm'),
(12, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait_post1670845406bfb48702a735f963dfca8becb91fe5', 'dav', '#portrait', 'peffet_profile_image82851670845406.jpg', '12/12/2022 12:43:26 pm'),
(13, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671145477aba7ff5236e00fcf625e4bb0c6783a', 'animixplay', 'Yourichi Demon Slayer #anime #portrait', 'peffet_profile_image94711671145477.jpeg', '12/16/2022 12:04:37 am'),
(18, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post16711456369bf498241c7822d2a4a7152f42e768', 'animixplay', 'Unkown Naruto #anime #portrait', 'peffet_profile_image65521671145636.jpg', '12/16/2022 12:07:16 am'),
(19, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671145704e599b655cb2f4de3b62dc4f3deacc7', 'animixplay', 'Asta Black Clover #anime #portrait', 'peffet_profile_image54971671145704.jpeg', '12/16/2022 12:08:24 am'),
(20, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146039d5e9f22896f5d2f2e80000e416bcaa', 'animixplay', 'Satarou Gojo Jujutsu Kaisen #anime #portrait', 'peffet_profile_image84211671146039.jpg', '12/16/2022 12:13:59 am'),
(21, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post16711460747e7006e0a5cccdebf171dda2a7c901', 'animixplay', 'Naruto Uzumaki Naruto  #anime #portrait', 'peffet_profile_image21601671146074.jpg', '12/16/2022 12:14:34 am'),
(22, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146112f9eacff45f55c9d63ba43ddc843b33', 'animixplay', 'Gon Freeces Hunter X Hunter  #anime #portrait', 'peffet_profile_image31891671146112.jpg', '12/16/2022 12:15:12 am'),
(23, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post16711461397012d5c53622a381ddda76934b219d', 'animixplay', 'Sasuke Uchiha Naruto  #anime #portrait', 'peffet_profile_image59941671146139.jpg', '12/16/2022 12:15:39 am'),
(24, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146179689271f6af4e5e4f81322a5d24cee7', 'animixplay', 'Goku or Kakarote Dragon Ball  #anime #portrait', 'peffet_profile_image43621671146179.jpg', '12/16/2022 12:16:19 am'),
(25, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post167114621180be63be7ed5eca3af4704671f616c', 'animixplay', 'Vegeta and Goku or Kakarote Dragon Ball  #anime #portrait', 'peffet_profile_image77951671146211.jpg', '12/16/2022 12:16:51 am'),
(26, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146245ea1647b0c11bea050e92f4a2c935c1', 'animixplay', 'Kaneki Tokyo Ghoul  #anime #portrait', 'peffet_profile_image50611671146245.jpg', '12/16/2022 12:17:25 am'),
(27, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post16711462683f6429c90375b00cff40f95924eb03', 'animixplay', 'Kaneki Tokyo Ghoul  #anime #portrait', 'peffet_profile_image16561671146268.jpg', '12/16/2022 12:17:48 am'),
(28, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146300a73c482309c4939d555a682590e21b', 'animixplay', 'Sasuke Uchiha Naruto #anime #portrait', 'peffet_profile_image19101671146300.jpg', '12/16/2022 12:18:20 am'),
(29, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146327ca16fe9d8d27df8ba6fb0270eb8bc8', 'animixplay', 'Kaneki Tokyo Ghoul #anime #portrait', 'peffet_profile_image88441671146327.jpg', '12/16/2022 12:18:47 am'),
(30, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146354e72de2a7938f7e7e672a85881fa07a', 'animixplay', 'Chifuyu Tokyo Revengers #anime #portrait', 'peffet_profile_image50921671146354.jpg', '12/16/2022 12:19:14 am'),
(31, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146387f85b1f6e70a7417a0a87bd9f2faa18', 'animixplay', 'Kaneki Tokyo Ghoul #anime #portrait', 'peffet_profile_image27271671146387.jpg', '12/16/2022 12:19:47 am'),
(32, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146413c48a5c46021c1deacca101351e431e', 'animixplay', 'Unkown Jujutsu Kaisen #anime #portrait', 'peffet_profile_image22891671146413.jpg', '12/16/2022 12:20:13 am'),
(33, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post167114645032e5ed2fc60d506126159683970852', 'animixplay', 'Sakuna Jujutsu Kaisen #anime #portrait', 'peffet_profile_image95131671146450.jpg', '12/16/2022 12:20:50 am'),
(34, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146475512c038d7f664a141f2ed0c6cf4938', 'animixplay', 'Kurosaki Ichigo Bleach #anime #portrait', 'peffet_profile_image14801671146475.jpg', '12/16/2022 12:21:15 am'),
(35, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146509ece4f5c4443ddea4f4c481e49f673b', 'animixplay', 'Itachi Uchiha Naruto #anime #portrait', 'peffet_profile_image57101671146509.jpg', '12/16/2022 12:21:49 am'),
(36, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146547372cbcb4b9eddaae9940d4c9354d21', 'animixplay', 'Sasuke Uchiha Naruto #anime #portrait', 'peffet_profile_image49951671146547.jpg', '12/16/2022 12:22:27 am'),
(37, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146586c28c2bf8ba4bc5f83f265794530738', 'animixplay', 'Unknown Demon Slayer #anime #portrait', 'peffet_profile_image58291671146586.jpg', '12/16/2022 12:23:06 am'),
(38, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post16711466141d43f97c8e2e5bb633aa07e3b7e837', 'animixplay', 'Asta Black Clover #anime #portrait', 'peffet_profile_image79901671146614.jpeg', '12/16/2022 12:23:34 am'),
(39, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post16711466535de9e6bc914462a7754cd3614b542e', 'animixplay', 'Unuohana Yachiru Bleach #anime #portrait', 'peffet_profile_image78051671146653.jpeg', '12/16/2022 12:24:13 am'),
(40, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146688b43f1e5ddbe312fe6d4bb44aa853fc', 'animixplay', 'Sakuna Jujutsu Kaisen #anime #portrait', 'peffet_profile_image15291671146688.jpeg', '12/16/2022 12:24:48 am'),
(41, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'portrait_post1671146785c02978126b0eb093850973bb6c79b4', 'animixplay', 'Zarachi Kenpachi Bleach #anime #portrait', 'peffet_profile_image49651671146785.jpg', '12/16/2022 12:26:25 am');

-- --------------------------------------------------------

--
-- Table structure for table `reaction_table`
--

CREATE TABLE `reaction_table` (
  `id` int(11) NOT NULL,
  `post_id` longtext COLLATE utf8mb4_bin NOT NULL,
  `uid` longtext COLLATE utf8mb4_bin NOT NULL,
  `username` longtext COLLATE utf8mb4_bin NOT NULL,
  `poster_username` longtext COLLATE utf8mb4_bin NOT NULL,
  `time` longtext COLLATE utf8mb4_bin NOT NULL,
  `region` longtext COLLATE utf8mb4_bin NOT NULL,
  `longi` longtext COLLATE utf8mb4_bin NOT NULL,
  `lat` longtext COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `reaction_table`
--

INSERT INTO `reaction_table` (`id`, `post_id`, `uid`, `username`, `poster_username`, `time`, `region`, `longi`, `lat`) VALUES
(1, 'reference_post_20b57cb2025cf023896a1baa546b340eee426b77edb64696611670838688684ec5a0d13da833745c61acb980d097680f806be2fc12', '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'motivation_bucket', 'motivation_bucket', '12/12/2022 12:14:24 pm', '', '', ''),
(2, 'reference_post_742dabd237d21a81cc05eddafe8c12e02775a14921981094c11670838724476aef8318bc8795e4778309fa631eba2f45b7b3a5921f', '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'motivation_bucket', 'motivation_bucket', '12/12/2022 12:14:28 pm', '', '', ''),
(3, 'portrait_post1670843879768eae2024d03c92ff46c4cafacbf6', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'dav', '12/12/2022 12:18:15 pm', '', '', ''),
(4, 'portrait_post1670844180676783f659af3e89e03959187761f8', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'dav', '12/12/2022 12:23:08 pm', '', '', ''),
(5, 'portrait_post1670844381a9f51cb639e644cd6c01ccccefcf0a', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'dav', '12/12/2022 12:26:49 pm', '', '', ''),
(7, 'portrait_post1670844570cf6b3fd5663b440ad6dfef5a483a1a', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'dav', '12/12/2022 12:29:58 pm', '', '', ''),
(8, 'portrait_post167084465667b45cf4196acf6522f72172bc3f2b', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'dav', '12/12/2022 12:31:16 pm', '', '', ''),
(9, 'portrait_post167084474352fcc3bc04f86edb6ec93b7ff3352c', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'dav', '12/12/2022 12:33:32 pm', '', '', ''),
(10, 'portrait_post16708447715aedd36f2d9b15e9739023390331dc', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'dav', '12/12/2022 12:33:35 pm', '', '', ''),
(11, 'portrait_post1670844914ac1a6b2590eb575624aa37353d122c', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'dav', '12/12/2022 12:35:26 pm', '', '', ''),
(12, 'portrait_post1670844895fe55e4d358fda7d557af6cf75ec5bc', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'dav', '12/12/2022 12:36:57 pm', '', '', ''),
(13, 'reference_post_427038f8596f80f74f6fadd19695136ef0679e4ae4a5f84c2f167084354031f9e32abed86da9937836bbc547b84ee0206b32be8e3c', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'motivation_bucket', '12/12/2022 12:43:39 pm', '', '', ''),
(14, 'reference_post_742dabd237d21a81cc05eddafe8c12e02775a14921981094c11670838724476aef8318bc8795e4778309fa631eba2f45b7b3a5921f', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'motivation_bucket', '12/12/2022 12:43:42 pm', '', '', ''),
(15, 'reference_post_e9d17d93b3279c5572753b079533de56598cbfd774bc7048991670843434e12c3151d03211e1824adb913fae5fdfabf62f5c2a9b63', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'motivation_bucket', '12/12/2022 12:43:50 pm', '', '', ''),
(16, 'portrait_post1670844095fa3b2728d67f6b100c96c9bd5ecad7', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'dav', '12/12/2022 12:43:55 pm', '', '', ''),
(17, 'portrait_post1670845406bfb48702a735f963dfca8becb91fe5', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'dav', '12/12/2022 12:44:21 pm', '', '', ''),
(18, 'portrait_post167084487134cf462ef76c55cde087401bf8dd1a', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'dav', '12/12/2022 12:44:32 pm', '', '', ''),
(19, 'classic_write_up_2147771c053feb9e17d58db6c5fead2c714d122a803573baf7167087612808585749443a1926cabc6c43c1b7d57178496e8d0bc9ec', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', 'dev', '12/12/2022 09:15:35 pm', '', '', ''),
(20, 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'kelly_daniel', '12/13/2022 11:29:41 pm', '', '', ''),
(21, 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', 'kelly_daniel', '12/13/2022 11:35:48 pm', '', '', ''),
(23, 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'kelly_daniel', '12/14/2022 12:14:22 am', '', '', ''),
(25, 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'kelly_daniel', '12/14/2022 12:15:32 am', '', '', ''),
(26, 'portrait_post1670844895fe55e4d358fda7d557af6cf75ec5bc', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'dav', '12/14/2022 11:47:59 am', '', '', ''),
(27, 'portrait_post167084465667b45cf4196acf6522f72172bc3f2b', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'dav', '12/14/2022 11:48:05 am', '', '', ''),
(28, 'portrait_post1670844180676783f659af3e89e03959187761f8', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'dav', '12/14/2022 11:48:08 am', '', '', ''),
(29, 'portrait_post1670844570cf6b3fd5663b440ad6dfef5a483a1a', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'dav', '12/14/2022 11:48:12 am', '', '', ''),
(30, 'portrait_post1670844095fa3b2728d67f6b100c96c9bd5ecad7', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'dav', '12/14/2022 11:48:16 am', '', '', ''),
(31, 'portrait_post167084487134cf462ef76c55cde087401bf8dd1a', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'dav', '12/14/2022 11:48:19 am', '', '', ''),
(32, 'portrait_post1670845406bfb48702a735f963dfca8becb91fe5', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'dav', '12/14/2022 11:48:28 am', '', '', ''),
(33, 'portrait_post1670843879768eae2024d03c92ff46c4cafacbf6', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'dav', '12/14/2022 11:48:32 am', '', '', ''),
(34, 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', 'kelly_daniel', '12/14/2022 12:06:10 pm', '', '', ''),
(35, 'classic_write_up_408708de8e7f560d440427d4f342ee7125f7cd361465f8755416710163426582ed7c137f032471c3eec8fcbaca85b8fe038a461be2', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', 'peffet', '12/14/2022 12:12:27 pm', '', '', ''),
(36, 'classic_write_up_2147771c053feb9e17d58db6c5fead2c714d122a803573baf7167087612808585749443a1926cabc6c43c1b7d57178496e8d0bc9ec', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'dev', '12/14/2022 10:49:37 pm', '', '', ''),
(38, 'portrait_post1670843879768eae2024d03c92ff46c4cafacbf6', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'dav', '12/15/2022 11:23:32 pm', '', '', ''),
(39, 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', 'a7841247acd035452005651dd20eb1fb51116cd026476887e6', 'scott_choker', 'kelly_daniel', '12/15/2022 11:39:56 pm', '', '', ''),
(40, '804d70388276153be3e8a9a91fd2a5798e8daa23c2de252e61eae810', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:03:48 am', '', '', ''),
(41, 'portrait_post1671145477aba7ff5236e00fcf625e4bb0c6783a', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:04:43 am', '', '', ''),
(42, 'portrait_post1671146039d5e9f22896f5d2f2e80000e416bcaa', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:14:06 am', '', '', ''),
(43, 'portrait_post1671146785c02978126b0eb093850973bb6c79b4', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:26:40 am', '', '', ''),
(44, 'portrait_post1671146688b43f1e5ddbe312fe6d4bb44aa853fc', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:26:43 am', '', '', ''),
(45, 'portrait_post16711466535de9e6bc914462a7754cd3614b542e', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:26:47 am', '', '', ''),
(46, 'portrait_post16711466141d43f97c8e2e5bb633aa07e3b7e837', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:26:50 am', '', '', ''),
(48, 'portrait_post1671146586c28c2bf8ba4bc5f83f265794530738', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:26:54 am', '', '', ''),
(49, 'portrait_post1671146547372cbcb4b9eddaae9940d4c9354d21', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:26:57 am', '', '', ''),
(50, 'portrait_post1671146509ece4f5c4443ddea4f4c481e49f673b', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:26:59 am', '', '', ''),
(51, 'portrait_post1671146475512c038d7f664a141f2ed0c6cf4938', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:27:04 am', '', '', ''),
(52, 'portrait_post167114645032e5ed2fc60d506126159683970852', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:27:06 am', '', '', ''),
(53, 'portrait_post1671146413c48a5c46021c1deacca101351e431e', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:27:09 am', '', '', ''),
(54, 'portrait_post1671146387f85b1f6e70a7417a0a87bd9f2faa18', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:27:13 am', '', '', ''),
(55, 'portrait_post1671146354e72de2a7938f7e7e672a85881fa07a', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:27:18 am', '', '', ''),
(56, 'portrait_post1671146327ca16fe9d8d27df8ba6fb0270eb8bc8', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:27:20 am', '', '', ''),
(57, 'portrait_post1671146300a73c482309c4939d555a682590e21b', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:27:22 am', '', '', ''),
(58, 'portrait_post16711462683f6429c90375b00cff40f95924eb03', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:27:25 am', '', '', ''),
(59, 'portrait_post1671146245ea1647b0c11bea050e92f4a2c935c1', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:27:28 am', '', '', ''),
(60, 'portrait_post167114621180be63be7ed5eca3af4704671f616c', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:27:31 am', '', '', ''),
(61, 'portrait_post1671146179689271f6af4e5e4f81322a5d24cee7', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:27:34 am', '', '', ''),
(62, 'portrait_post16711461397012d5c53622a381ddda76934b219d', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:27:37 am', '', '', ''),
(63, 'portrait_post1671146112f9eacff45f55c9d63ba43ddc843b33', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:27:40 am', '', '', ''),
(64, 'portrait_post16711460747e7006e0a5cccdebf171dda2a7c901', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:27:42 am', '', '', ''),
(65, 'portrait_post1671145704e599b655cb2f4de3b62dc4f3deacc7', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:27:46 am', '', '', ''),
(66, 'portrait_post16711456369bf498241c7822d2a4a7152f42e768', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'animixplay', '12/16/2022 12:27:50 am', '', '', ''),
(68, 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'kelly_daniel', '12/16/2022 09:54:29 pm', '', '', ''),
(69, 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'kelly_daniel', '12/16/2022 11:54:01 pm', '', '', ''),
(70, 'typing_textc1be7946a06b29eac5a6121eeae3951a5e7b27c777bae669951671231387d121771cdb5181d57270e9162491a6c31364380f330f23', '0fa2294ee58945fb8190f7272e990b9e7518b4d2fc3a8db51a', 'kizdver', 'kizdver', '12/16/2022 11:56:36 pm', '', '', ''),
(71, 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '0fa2294ee58945fb8190f7272e990b9e7518b4d2fc3a8db51a', 'kizdver', 'kelly_daniel', '12/17/2022 02:00:55 pm', '', '', ''),
(72, 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '0fa2294ee58945fb8190f7272e990b9e7518b4d2fc3a8db51a', 'kizdver', 'kelly_daniel', '12/17/2022 02:00:58 pm', '', '', ''),
(73, 'classic_write_up_133781f47e7ebefc50475146e7931fbc49c0ef3443bfac93af1670972368f6fa3f39209beea848fd9f157f2501eb903a6119d308c2', '0fa2294ee58945fb8190f7272e990b9e7518b4d2fc3a8db51a', 'kizdver', 'kelly_daniel', '12/17/2022 02:01:00 pm', '', '', ''),
(74, 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '0fa2294ee58945fb8190f7272e990b9e7518b4d2fc3a8db51a', 'kizdver', 'kelly_daniel', '12/17/2022 02:01:54 pm', '', '', ''),
(75, 'classic_write_up_bf6d002bdac3232cc7f9a18d5093b0abd7bec56fc03ec54e3416712869840003c6e2a231e67cd3d87d4268fe605a9d15d85f08a66a', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'kelly_daniel', '12/17/2022 03:23:11 pm', '', '', ''),
(77, 'classic_write_up_bf6d002bdac3232cc7f9a18d5093b0abd7bec56fc03ec54e3416712869840003c6e2a231e67cd3d87d4268fe605a9d15d85f08a66a', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'kelly_daniel', '12/17/2022 03:25:40 pm', '', '', ''),
(78, 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'kelly_daniel', '12/17/2022 03:26:08 pm', '', '', ''),
(79, 'classic_write_up_133781f47e7ebefc50475146e7931fbc49c0ef3443bfac93af1670972368f6fa3f39209beea848fd9f157f2501eb903a6119d308c2', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'kelly_daniel', '12/17/2022 03:26:12 pm', '', '', ''),
(80, 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'kelly_daniel', '12/17/2022 03:26:16 pm', '', '', ''),
(81, 'portrait_post1671146475512c038d7f664a141f2ed0c6cf4938', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'animixplay', '12/19/2022 11:49:44 am', '', '', ''),
(82, 'classic_write_up_f5c67d6d205b158bafb570449b5c3b974afb3231c6d857d2a516714469712e532683f79bbbd26a2ec52fceed7fd26eda9909f6b0c4', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'kelly_daniel', '12/19/2022 11:51:25 am', '', '', ''),
(83, 'regular_post167144794990512fe362855f87e492fda039ff032a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'kelly_daniel', '12/19/2022 12:08:38 pm', '', '', ''),
(84, 'portrait_post167114645032e5ed2fc60d506126159683970852', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'animixplay', '12/19/2022 12:09:18 pm', '', '', ''),
(85, '804d70388276153be3e8a9a91fd2a5798e8daa23c2de252e61eae810', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'animixplay', '12/19/2022 12:10:10 pm', '', '', ''),
(87, 'portrait_post1671146112f9eacff45f55c9d63ba43ddc843b33', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'animixplay', '12/19/2022 12:16:55 pm', '', '', ''),
(88, 'portrait_post1671145477aba7ff5236e00fcf625e4bb0c6783a', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'animixplay', '12/19/2022 08:23:27 pm', '', '', ''),
(89, 'portrait_post1670844895fe55e4d358fda7d557af6cf75ec5bc', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', 'dav', '12/19/2022 08:33:53 pm', '', '', ''),
(90, 'classic_write_up_133781f47e7ebefc50475146e7931fbc49c0ef3443bfac93af1670972368f6fa3f39209beea848fd9f157f2501eb903a6119d308c2', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', 'kelly_daniel', '12/19/2022 08:34:15 pm', '', '', ''),
(91, 'portrait_post1670844381a9f51cb639e644cd6c01ccccefcf0a', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', 'dav', '12/19/2022 08:34:19 pm', '', '', ''),
(92, 'regular_post1671478581e3532ec7fdc261eadc55f156f35399bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', 'dev', '12/19/2022 08:36:26 pm', '', '', ''),
(93, 'portrait_post167147863594386090314c4c06e9496ef4aff2f2', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', 'dev', '12/19/2022 08:37:22 pm', '', '', ''),
(94, 'classic_write_up_bf6d002bdac3232cc7f9a18d5093b0abd7bec56fc03ec54e3416712869840003c6e2a231e67cd3d87d4268fe605a9d15d85f08a66a', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', 'kelly_daniel', '12/19/2022 08:41:18 pm', '', '', ''),
(95, 'regular_post167144794990512fe362855f87e492fda039ff032a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', 'kelly_daniel', '12/22/2022 11:25:06 am', '', '', ''),
(96, 'classic_write_up_f5c67d6d205b158bafb570449b5c3b974afb3231c6d857d2a516714469712e532683f79bbbd26a2ec52fceed7fd26eda9909f6b0c4', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', 'kelly_daniel', '12/22/2022 11:25:10 am', '', '', ''),
(97, 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', 'kelly_daniel', '12/22/2022 11:25:11 am', '', '', ''),
(98, 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', 'kelly_daniel', '12/22/2022 11:35:31 am', '', '', ''),
(99, 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', 'kelly_daniel', '12/22/2022 11:35:32 am', '', '', ''),
(100, 'classic_write_up_f5c67d6d205b158bafb570449b5c3b974afb3231c6d857d2a516714469712e532683f79bbbd26a2ec52fceed7fd26eda9909f6b0c4', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'kelly_daniel', '12/22/2022 11:36:41 am', '', '', ''),
(101, 'portrait_post1671146475512c038d7f664a141f2ed0c6cf4938', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', 'animixplay', '12/22/2022 11:39:15 am', '', '', ''),
(102, 'portrait_post1671146413c48a5c46021c1deacca101351e431e', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', 'animixplay', '12/22/2022 11:39:18 am', '', '', ''),
(103, 'reference_post_345998b6e1e55ccecb75eb347ab90f1e991e434d9f9d6fa01d1670843603d65cae043516bd4ffdc0804bebcb960b06d51c6df240cc', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', 'motivation_bucket', '12/22/2022 11:39:21 am', '', '', ''),
(104, 'portrait_post1671145704e599b655cb2f4de3b62dc4f3deacc7', 'a7841247acd035452005651dd20eb1fb51116cd026476887e6', 'scott_choker', 'animixplay', '12/22/2022 11:42:09 am', '', '', ''),
(105, 'portrait_post1671146475512c038d7f664a141f2ed0c6cf4938', 'a7841247acd035452005651dd20eb1fb51116cd026476887e6', 'scott_choker', 'animixplay', '12/22/2022 11:44:05 am', '', '', ''),
(106, 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'a7841247acd035452005651dd20eb1fb51116cd026476887e6', 'scott_choker', 'kelly_daniel', '12/22/2022 11:44:08 am', '', '', ''),
(107, 'classic_write_up_6873f0ab68cd991224a82295f7fa502ece2473248921cfe5a016712874492cba3ae1ab96cae3c2d3b04ccc9b43cf9a216e44d2df90', 'a7841247acd035452005651dd20eb1fb51116cd026476887e6', 'scott_choker', 'dav', '12/22/2022 11:44:14 am', '', '', ''),
(108, 'portrait_post16711460747e7006e0a5cccdebf171dda2a7c901', 'a7841247acd035452005651dd20eb1fb51116cd026476887e6', 'scott_choker', 'animixplay', '12/22/2022 11:44:17 am', '', '', ''),
(109, 'reference_post_b60ccdee9e50b8570463023b264b72e38d055dcfe09251f38b16708434081d3a17bed72b39c62c77d857d4b4634eac3b996a2d23e3', 'a7841247acd035452005651dd20eb1fb51116cd026476887e6', 'scott_choker', 'motivation_bucket', '12/22/2022 11:44:20 am', '', '', ''),
(110, 'portrait_post16711466535de9e6bc914462a7754cd3614b542e', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'animixplay', '12/22/2022 11:44:43 am', '', '', ''),
(111, 'portrait_post1671146039d5e9f22896f5d2f2e80000e416bcaa', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'animixplay', '12/22/2022 07:25:34 pm', '', '', ''),
(112, 'classic_write_up_6873f0ab68cd991224a82295f7fa502ece2473248921cfe5a016712874492cba3ae1ab96cae3c2d3b04ccc9b43cf9a216e44d2df90', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'dav', '12/23/2022 08:01:37 pm', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `reference_post`
--

CREATE TABLE `reference_post` (
  `id` int(11) NOT NULL,
  `post_id` longtext COLLATE utf8mb4_bin NOT NULL,
  `uid` longtext COLLATE utf8mb4_bin NOT NULL,
  `username` longtext COLLATE utf8mb4_bin NOT NULL,
  `text` longtext COLLATE utf8mb4_bin NOT NULL,
  `ref_by` longtext COLLATE utf8mb4_bin NOT NULL,
  `time` longtext COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `reference_post`
--

INSERT INTO `reference_post` (`id`, `post_id`, `uid`, `username`, `text`, `ref_by`, `time`) VALUES
(2, 'reference_post_20b57cb2025cf023896a1baa546b340eee426b77edb64696611670838688684ec5a0d13da833745c61acb980d097680f806be2fc12', '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'motivation_bucket', 'The people who are crazy enough to think they can change the world are the one''s who do', 'Steve Jobs', '12/12/2022 10:51:28 am'),
(3, 'reference_post_742dabd237d21a81cc05eddafe8c12e02775a14921981094c11670838724476aef8318bc8795e4778309fa631eba2f45b7b3a5921f', '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'motivation_bucket', 'Be yourself; everyone else is already taken.', 'Oscar Wilde', '12/12/2022 10:52:04 am'),
(4, 'reference_post_a4a28cb143eca3cf2fd84daf1bc2074aef1566962d55f850b9167083880498a16f4ba3e34b6887f7a1ccafb1aa80d3096120d5c728', '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'motivation_bucket', 'You''ve gotta dance like there''s nobody watching,\nLove like you''ll never be hurt,\nSing like there''s nobody listening,\nAnd live like it''s heaven on earth.', 'William W. Purkey', '12/12/2022 10:53:24 am'),
(5, 'reference_post_f7b286ebabf07de6757fe17d5c87ac0c4c106ccc6560789b5a16708388406a81abb845b02ca59c1f16fabe75f3c5651565205f2dd1', '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'motivation_bucket', 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.', 'Martin Luther King Jr', '12/12/2022 10:54:00 am'),
(6, 'reference_post_c01f0dabde2cbd377d5cc071280f76543c3c9b108769b49ef916708388738ca2255d5ec5a3ae0258af0a8421f06ae621b1abfcaa86', '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'motivation_bucket', 'Live as if you were to die tomorrow. Learn as if you were to leave forever', 'Mahatma Gandhi', '12/12/2022 10:54:33 am'),
(7, 'reference_post_b60ccdee9e50b8570463023b264b72e38d055dcfe09251f38b16708434081d3a17bed72b39c62c77d857d4b4634eac3b996a2d23e3', '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'motivation_bucket', 'I''ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.', 'Maya Angelou', '12/12/2022 12:10:08 pm'),
(8, 'reference_post_e9d17d93b3279c5572753b079533de56598cbfd774bc7048991670843434e12c3151d03211e1824adb913fae5fdfabf62f5c2a9b63', '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'motivation_bucket', 'Whether you think you can or you think you can''t, you''re right.', 'Henry Ford', '12/12/2022 12:10:34 pm'),
(9, 'reference_post_427038f8596f80f74f6fadd19695136ef0679e4ae4a5f84c2f167084354031f9e32abed86da9937836bbc547b84ee0206b32be8e3c', '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'motivation_bucket', 'Perfection is not attainable, but if we chase perfection we can catch excellence.', 'Vince Lombardi', '12/12/2022 12:12:20 pm'),
(10, 'reference_post_f244e20ad068458539a8e5426b6087018251db588b60511a10167084357196cc051ec5a989909d953fd42648f168e8ec128aca9360', '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'motivation_bucket', 'Life is 10 percent what happens to me and 90 percent of how I react to it.', 'Charles Swindoll', '12/12/2022 12:12:51 pm'),
(11, 'reference_post_345998b6e1e55ccecb75eb347ab90f1e991e434d9f9d6fa01d1670843603d65cae043516bd4ffdc0804bebcb960b06d51c6df240cc', '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'motivation_bucket', 'If you look at what you have in life, you''ll always have more. If you look at what you don''t have in life, you''ll never have enough.', 'Oprah Winfrey', '12/12/2022 12:13:23 pm');

-- --------------------------------------------------------

--
-- Table structure for table `regular_post_media_table`
--

CREATE TABLE `regular_post_media_table` (
  `id` int(11) NOT NULL,
  `post_id` longtext COLLATE utf8mb4_bin NOT NULL,
  `name` longtext COLLATE utf8mb4_bin NOT NULL,
  `type` longtext COLLATE utf8mb4_bin NOT NULL,
  `time` longtext COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `regular_post_media_table`
--

INSERT INTO `regular_post_media_table` (`id`, `post_id`, `name`, `type`, `time`) VALUES
(1, 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'peffet_regular_image76421670973257.jpg', 'image', '12/14/2022 12:14:17 am'),
(2, 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'peffet_regular_image31381671231235.jpg', 'image', '12/16/2022 11:53:55 pm'),
(3, 'regular_post167144794990512fe362855f87e492fda039ff032a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'peffet_regular_image20251671447949.jpg', 'image', '12/19/2022 12:05:49 pm');

-- --------------------------------------------------------

--
-- Table structure for table `regular_post_table`
--

CREATE TABLE `regular_post_table` (
  `id` int(11) NOT NULL,
  `post_id` longtext COLLATE utf8mb4_bin NOT NULL,
  `uid` longtext COLLATE utf8mb4_bin NOT NULL,
  `username` longtext COLLATE utf8mb4_bin NOT NULL,
  `caption` longtext COLLATE utf8mb4_bin NOT NULL,
  `type` longtext COLLATE utf8mb4_bin NOT NULL,
  `time` longtext COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `regular_post_table`
--

INSERT INTO `regular_post_table` (`id`, `post_id`, `uid`, `username`, `caption`, `type`, `time`) VALUES
(1, 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'Checkout the neon picture @dav #neon', 'image', '12/14/2022 12:14:17 am'),
(2, 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'Damn this guy is really looking good', 'image', '12/16/2022 11:53:55 pm'),
(3, 'regular_post167144794990512fe362855f87e492fda039ff032a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'Cyclone', 'image', '12/19/2022 12:05:49 pm');

-- --------------------------------------------------------

--
-- Table structure for table `reply_reaction_table`
--

CREATE TABLE `reply_reaction_table` (
  `id` int(11) NOT NULL,
  `uid` longtext COLLATE utf8mb4_bin NOT NULL,
  `post_id` longtext COLLATE utf8mb4_bin NOT NULL,
  `cid` longtext COLLATE utf8mb4_bin NOT NULL,
  `repid` longtext COLLATE utf8mb4_bin NOT NULL,
  `username` longtext COLLATE utf8mb4_bin NOT NULL,
  `time` longtext COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `saved_login`
--

CREATE TABLE `saved_login` (
  `id` int(11) NOT NULL,
  `uid` longtext NOT NULL,
  `username` longtext NOT NULL,
  `hash` longtext NOT NULL,
  `user_agent` longtext NOT NULL,
  `remote_addre` longtext NOT NULL,
  `time` longtext NOT NULL,
  `did_user_logout` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `saved_login`
--

INSERT INTO `saved_login` (`id`, `uid`, `username`, `hash`, `user_agent`, `remote_addre`, `time`, `did_user_logout`) VALUES
(61, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', '34ca5e1f8595dc8b600edffaa7a34965$2y$10$O.3MuKpg.UN2jjE.2ny3Aegf8oS1Cml4Yfv12ibn2Hist5p29shSm7a873b96a0f5e1e2f2801671705875', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Mobile Safari/537.36', '127.0.0.1', '2022/12/22 11:44:35 am', 'no');

-- --------------------------------------------------------

--
-- Table structure for table `typing_text_post`
--

CREATE TABLE `typing_text_post` (
  `id` int(11) NOT NULL,
  `post_id` longtext COLLATE utf8mb4_bin NOT NULL,
  `uid` longtext COLLATE utf8mb4_bin NOT NULL,
  `username` longtext COLLATE utf8mb4_bin NOT NULL,
  `text` longtext COLLATE utf8mb4_bin NOT NULL,
  `bg` longtext COLLATE utf8mb4_bin NOT NULL,
  `font` longtext COLLATE utf8mb4_bin NOT NULL,
  `time` longtext COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `typing_text_post`
--

INSERT INTO `typing_text_post` (`id`, `post_id`, `uid`, `username`, `text`, `bg`, `font`, `time`) VALUES
(1, 'typing_textc1be7946a06b29eac5a6121eeae3951a5e7b27c777bae669951671231387d121771cdb5181d57270e9162491a6c31364380f330f23', '0fa2294ee58945fb8190f7272e990b9e7518b4d2fc3a8db51a', 'kizdver', 'death ain''t know me I ain''t know death||death ain''t seeing me I ain''t seeing death||money knows me we are good friends||we grew up in the early days||..', 'type_pb_two', 'roboto_fonts', '12/16/2022 11:56:27 pm');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uid` longtext COLLATE utf8mb4_bin NOT NULL,
  `username` longtext COLLATE utf8mb4_bin NOT NULL,
  `email` longtext COLLATE utf8mb4_bin NOT NULL,
  `password` longtext COLLATE utf8mb4_bin NOT NULL,
  `phone` longtext COLLATE utf8mb4_bin NOT NULL,
  `bio` longtext COLLATE utf8mb4_bin NOT NULL,
  `region` longtext COLLATE utf8mb4_bin NOT NULL,
  `longi` longtext COLLATE utf8mb4_bin NOT NULL,
  `lati` longtext COLLATE utf8mb4_bin NOT NULL,
  `name` longtext COLLATE utf8mb4_bin NOT NULL,
  `website` longtext COLLATE utf8mb4_bin NOT NULL,
  `verify_status` longtext COLLATE utf8mb4_bin NOT NULL,
  `verify_code` longtext COLLATE utf8mb4_bin NOT NULL,
  `avatar` longtext COLLATE utf8mb4_bin NOT NULL,
  `location` longtext COLLATE utf8mb4_bin NOT NULL,
  `spec` longtext COLLATE utf8mb4_bin NOT NULL,
  `active_status` longtext COLLATE utf8mb4_bin NOT NULL,
  `active_last` datetime NOT NULL,
  `blocked_list` longtext COLLATE utf8mb4_bin NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uid`, `username`, `email`, `password`, `phone`, `bio`, `region`, `longi`, `lati`, `name`, `website`, `verify_status`, `verify_code`, `avatar`, `location`, `spec`, `active_status`, `active_last`, `blocked_list`, `time`) VALUES
(1, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'itzkellydaniel@gmail.com', '$2y$10$H0BsTgm.e9IfHyDM9sDwH.TpNQJBuXqdnxV5Ao5r/le.mCGHYmdW6', '', 'I''m Kelly Daniel, a Coding Maestro', '', '', '', 'Kelly Daniel (The Coding Maestro)', '', 'unverified', '8459', 'peffet_profile_image16911671282169.jpg', 'Africa, Nigeria, Lagos', 'NF,EMINEM,OPM,GOD,ME,CODING,OCD', '', '0000-00-00 00:00:00', '', '2022-12-10 22:03:14'),
(2, '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet', 'peffet@gmail.com', '$2y$10$CqLNzzbL8VcTJHJVIS5RduxRMG6sUiN82QrQtSi70To.RqYMu7Nvq', '', 'Stay picture peffet', '', '', '', 'Peffet', '', 'unverified', '2661', 'peffet_profile_image77101670707038.png', 'Africa, Nigeria, Lagos', 'NF,EMINEM,OPM,GOD,ME,CODING,OCD', '', '0000-00-00 00:00:00', '', '2022-12-10 22:16:26'),
(3, 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev', 'dev@gmail.com', '$2y$10$oUeMmBOk3OQ7XXLPgLi8Te/Zwvl9E8hM6rMyry4p./z1UKQ7LphKO', '', 'no bio yet!', '', '', '', 'Dev The Coder', '', 'unverified', '4466', 'peffet_profile_image26311670707248.jpg', 'Africa, Nigeria, Lagos', 'NF,EMINEM,OPM,GOD,ME,CODING,OCD', '', '0000-00-00 00:00:00', '', '2022-12-10 22:18:44'),
(4, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav', 'dav@gmail.com', '$2y$10$PG7LISy5nW4DOSso68SKwu6rQl597QKolnl04J8XCAg9Lh5VUZIXi', '', 'Just that cool guy', '', '', '', 'David Daniel', '', 'unverified', '3566', 'peffet_profile_image19921670707381.jpeg', 'Africa, Nigeria, Lagos', 'NF,EMINEM,OPM,GOD,ME,CODING,OCD', '', '0000-00-00 00:00:00', '', '2022-12-10 22:21:58'),
(5, '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'motivation_bucket', 'example@gmail.com', '$2y$10$1IBRS5Xfp/QgAnecfc58ku1q/uUSO37ZQHEtV5fosRg7.gti6qffS', '', 'None of us is as smart as all of us.', '', '', '', 'Motivation Bucket', '', 'unverified', '2100', 'peffet_profile_image80001670707841.jpg', 'Africa, Nigeria, Lagos', 'NF,EMINEM,OPM,GOD,ME,CODING,OCD', '', '0000-00-00 00:00:00', '', '2022-12-10 22:24:05'),
(6, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay', 'itzkellydaniel@gmail.com', '$2y$10$ywBKMUHX3szmIiUX4LQGROfkqEqpHPrkGtKhyJI1x0PWidQ8gsXLe', '', 'Bankai Tensa Zangetsu', '', '', '', 'Animix Play', '', 'unverified', '7699', 'peffet_profile_image20021671054370.jpg', 'Africa, Nigeria, Lagos', 'NF,EMINEM,OPM,GOD,ME,CODING,OCD', '', '0000-00-00 00:00:00', '', '2022-12-14 22:44:39'),
(7, 'a7841247acd035452005651dd20eb1fb51116cd026476887e6', 'scott_choker', 'itzkelldaniel@gmail.com', '$2y$10$yWHpU5E0t1TAamP7fA4nu.1NrQqa7KFznygIjdjy4QEAZS2AStarK', '', 'no bio yet!', '', '', '', 'Scott Choker', '', 'unverified', '1622', 'peffet_profile_image28671671705704.jpg', 'Africa, Nigeria, Lagos', 'NF,EMINEM,OPM,GOD,ME,CODING,OCD', '', '0000-00-00 00:00:00', '', '2022-12-15 23:34:15'),
(8, '31a51d1a6c06544e7fef4daaaf334ecafa17d7d3859336a6ab', 'serene', 'mylove@gmail.com', '$2y$10$O8LfRVetJ5E99mXJ.xVNo.uEwZwPKSQQzaZJsJT/1hlRzQ0m4XTTe', '', 'no bio yet!', '', '', '', '', '', 'unverified', '4421', 'default.png', 'Africa, Nigeria, Lagos', 'NF,EMINEM,OPM,GOD,ME,CODING,OCD', '', '0000-00-00 00:00:00', '', '2022-12-15 23:34:52'),
(9, '466888187db016a56a7839f21b21a55f54523fada48fc20b6d', 'gideon', 'mygee@gmail.com', '$2y$10$rHp1whQKiZE8Kpcj3YoURuWlgyL0nZJBmT90ump51UmBVtJBrie0u', '', 'no bio yet!', '', '', '', '', '', 'unverified', '5132', 'default.png', 'Africa, Nigeria, Lagos', 'NF,EMINEM,OPM,GOD,ME,CODING,OCD', '', '0000-00-00 00:00:00', '', '2022-12-15 23:35:31'),
(10, '7dfe3acce2e995f8b1085b128a2ea0cd80bbbe4c25e149a5e1', 'jada', 'itzkellydaniel@gmail.com', '$2y$10$FfHx.GeH.qGBBx9YZlIPC..aGDwlx0oVNwFV6QLAr.reevjvklwYO', '', 'no bio yet!', '', '', '', '', '', 'unverified', '3056', 'default.png', 'Africa, Nigeria, Lagos', 'NF,EMINEM,OPM,GOD,ME,CODING,OCD', '', '0000-00-00 00:00:00', '', '2022-12-15 23:36:10'),
(11, 'f00d74087940f22599100d78d18a3de3cfa8c38c85f2115153', 'John_doe', 'example@gmail.com', '$2y$10$AX8FL7bTYQHXI1Xmbz5Y9e9Pmg/YRnFFI9R2Z5nKc6v5Hix02Wcle', '', 'no bio yet!', '', '', '', 'John Doe', '', 'unverified', '6510', 'peffet_profile_image46121671705640.jpg', 'Africa, Nigeria, Lagos', 'NF,EMINEM,OPM,GOD,ME,CODING,OCD', '', '0000-00-00 00:00:00', '', '2022-12-15 23:36:47'),
(12, '0fa2294ee58945fb8190f7272e990b9e7518b4d2fc3a8db51a', 'kizdver', 'kizdver@gmail.com', '$2y$10$n73YSRP7bjiJVrWkMa30bO8oFgy8RMX9H2NSN5S/zVb6hFCJOCFxG', '', 'Lyrics to make your day', '', '', '', 'Kiz Dver', '', 'unverified', '8717', 'peffet_profile_image74461671231301.jpg', 'Africa, Nigeria, Lagos', 'NF,EMINEM,OPM,GOD,ME,CODING,OCD', '', '0000-00-00 00:00:00', '', '2022-12-16 23:43:37');

-- --------------------------------------------------------

--
-- Table structure for table `usersavedpost`
--

CREATE TABLE `usersavedpost` (
  `id` int(11) NOT NULL,
  `uid` longtext NOT NULL,
  `username` longtext NOT NULL,
  `post_id` longtext NOT NULL,
  `time` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usersavedpost`
--

INSERT INTO `usersavedpost` (`id`, `uid`, `username`, `post_id`, `time`) VALUES
(1, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '14-12-2022 00:02:48'),
(2, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'classic_write_up_133781f47e7ebefc50475146e7931fbc49c0ef3443bfac93af1670972368f6fa3f39209beea848fd9f157f2501eb903a6119d308c2', '14-12-2022 00:02:50'),
(3, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '16-12-2022 23:54:04'),
(4, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'regular_post167144794990512fe362855f87e492fda039ff032a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '22-12-2022 11:46:48'),
(5, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel', 'classic_write_up_6873f0ab68cd991224a82295f7fa502ece2473248921cfe5a016712874492cba3ae1ab96cae3c2d3b04ccc9b43cf9a216e44d2df90', '23-12-2022 20:01:39');

-- --------------------------------------------------------

--
-- Table structure for table `users_chat_fav`
--

CREATE TABLE `users_chat_fav` (
  `id` int(11) NOT NULL,
  `saver_username` longtext NOT NULL,
  `saved_username` longtext NOT NULL,
  `saved_uid` longtext NOT NULL,
  `time` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user_search`
--

CREATE TABLE `user_search` (
  `id` int(11) NOT NULL,
  `uid` longtext NOT NULL,
  `text` longtext NOT NULL,
  `time` longtext NOT NULL,
  `sid` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_search`
--

INSERT INTO `user_search` (`id`, `uid`, `text`, `time`, `sid`) VALUES
(1, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly', '2022/12/10 22:11:03 pm', 'peffet_search_1058967e4747b99414924ada060947ce89975275'),
(2, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'bucket', '2022/12/12 12:18:28 pm', 'peffet_search_39108e5120cb7c48efa2fccd96d703d49b81466c'),
(3, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', '#portrait', '2022/12/14 12:03:30 pm', 'peffet_search_729223e536224c34e669ba3b88dbe42272da6cc6'),
(4, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'portrait', '2022/12/12 12:40:26 pm', 'peffet_search_3bd363b073bb36efeb0ad991e0936a69e0bb7419'),
(5, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'D', '2022/12/13 23:46:08 pm', 'peffet_search_8a299f794107435cfa35d4a6d9adfe473984d561'),
(6, '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'd', '2022/12/13 23:46:28 pm', 'peffet_search_12cc806fead1957a2a7e249dcd9ea460d687d094'),
(7, '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'Dope guy ', '2022/12/13 23:51:28 pm', 'peffet_search_29b467c0f43d9666c73a64f00b5900f7f0d703b9'),
(8, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', '#nice', '2022/12/14 12:03:20 pm', 'peffet_search_e67d1dd9a585ff1856e1c43ecc7691909f945cd1'),
(9, '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', '#dope', '2022/12/14 12:03:39 pm', 'peffet_search_6a85fd8cc9a264e4ed3987bb7623644cc7fac8c8'),
(10, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animix', '2022/12/14 22:46:43 pm', 'peffet_search_12b3b06e18984bcdd6bcd9f8234ee8c62cd2d6b6'),
(11, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', '', '2022/12/14 22:46:59 pm', 'peffet_search_73acd1e429826098b41d04829f85f28daf00cecd'),
(12, 'f00d74087940f22599100d78d18a3de3cfa8c38c85f2115153', 'd', '2022/12/15 23:37:01 pm', 'peffet_search_d78357521f8811d10ca92a662f694dec1c72ff85'),
(13, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'tokyo', '2022/12/16 00:28:17 am', 'peffet_search_72ad1ce1d79f859311e9cf7dfaa4ab80cb245430'),
(14, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', '#portrait', '2022/12/16 22:48:00 pm', 'peffet_search_f0248b47a54c77975139cc86332fb4132c7a7361'),
(15, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'p', '2022/12/16 22:10:19 pm', 'peffet_search_b301f38f418ddc0362e623ecc89963d48205190f'),
(16, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', '#anime', '2022/12/16 22:03:10 pm', 'peffet_search_723502fcd001a5a3e2ab3a5ae24faaa86ad90cb6'),
(17, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', '#nice', '2022/12/16 22:07:48 pm', 'peffet_search_251de7b654753df6bba46dcd17d6f918f852cccc'),
(18, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', '#port', '2022/12/16 22:24:45 pm', 'peffet_search_7df4050fa2e38d51c76c33707e3ab2b6f0d524e3'),
(19, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'best', '2022/12/16 22:37:03 pm', 'peffet_search_0eda2df3f8ebc04017b3c98be96ed2b997b2a132'),
(20, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'Hey what''s up My name is Kelly Daniel I''m a full stack developer And I''m the founder of @peffet', '2022/12/16 22:37:49 pm', 'peffet_search_6b6a65c94df760202014b845be0d0896a5fac7ec'),
(21, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'hey', '2022/12/16 22:39:00 pm', 'peffet_search_650f40e6d23c8422535e1e476323bc0d664dbdf3'),
(22, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'Yo bro what''s up', '2022/12/16 22:41:20 pm', 'peffet_search_2adf3974af9afd25c17d0c20d15f04664a280421'),
(23, '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'd', '2022/12/16 22:47:44 pm', 'peffet_search_1b4e584600009369adf0c0883a435eb2723b3d22'),
(24, '0fa2294ee58945fb8190f7272e990b9e7518b4d2fc3a8db51a', 'kelly', '2022/12/17 14:00:40 pm', 'peffet_search_19b0f5bb00c3e8c79e491726e05ba8b8af470809'),
(25, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '#neon', '2022/12/17 14:04:13 pm', 'peffet_search_8ff6c33c829b722813e3c64040e59d27700e15f9'),
(26, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '#p', '2022/12/19 11:39:37 am', 'peffet_search_f5a85998d4812ff29ea12d7a9b6fe04526748bf9'),
(27, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '#anime', '2022/12/19 11:49:38 am', 'peffet_search_b2f41a454ebaeeb06a41d5e48224a74954cf5060'),
(28, 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'kelly daniel', '2022/12/19 20:40:52 pm', 'peffet_search_02837832e3b3757c3b45b63262742a031715dded'),
(29, 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'kelly', '2022/12/19 20:41:03 pm', 'peffet_search_fb72262933d2c481dba03a37073aab48024d481c'),
(30, '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '#portrait', '2022/12/23 20:13:54 pm', 'peffet_search_ae3f03c2f802e9bcb0ce0daaf9d305fef3b84195');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `id` int(11) NOT NULL,
  `text_content` longtext COLLATE utf8mb4_bin NOT NULL,
  `type` longtext COLLATE utf8mb4_bin NOT NULL,
  `initial_poster` longtext COLLATE utf8mb4_bin NOT NULL,
  `time` longtext COLLATE utf8mb4_bin NOT NULL,
  `wish_id` longtext COLLATE utf8mb4_bin NOT NULL,
  `wisher_id` longtext COLLATE utf8mb4_bin NOT NULL,
  `wisher_username` longtext COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`id`, `text_content`, `type`, `initial_poster`, `time`, `wish_id`, `wisher_id`, `wisher_username`) VALUES
(1, 'The people who are crazy enough to think they can change the world are the one''s who do by Steve Jobs', 'reference_post', 'motivation_bucket', '2022/12/12 12:14:24', 'reference_post_20b57cb2025cf023896a1baa546b340eee426b77edb64696611670838688684ec5a0d13da833745c61acb980d097680f806be2fc12', '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'motivation_bucket'),
(2, 'Be yourself; everyone else is already taken. by Oscar Wilde', 'reference_post', 'motivation_bucket', '2022/12/12 12:14:28', 'reference_post_742dabd237d21a81cc05eddafe8c12e02775a14921981094c11670838724476aef8318bc8795e4778309fa631eba2f45b7b3a5921f', '4e80c259dff37033d428c027f28aa18ddddb7c0904b0c6511c', 'motivation_bucket'),
(3, 'Dope guy #dope #frenchguy', 'portrait_post', 'dav', '2022/12/12 12:18:15', 'portrait_post1670843879768eae2024d03c92ff46c4cafacbf6', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(4, 'Guy on black #portrait #dope', 'portrait_post', 'dav', '2022/12/12 12:23:08', 'portrait_post1670844180676783f659af3e89e03959187761f8', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(5, 'NF dope guy GOAT #portrait #NF #NFReal', 'portrait_post', 'dav', '2022/12/12 12:26:49', 'portrait_post1670844381a9f51cb639e644cd6c01ccccefcf0a', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(7, '#portrait', 'portrait_post', 'dav', '2022/12/12 12:29:58', 'portrait_post1670844570cf6b3fd5663b440ad6dfef5a483a1a', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(8, '#portrait', 'portrait_post', 'dav', '2022/12/12 12:31:16', 'portrait_post167084465667b45cf4196acf6522f72172bc3f2b', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(9, '#portrait', 'portrait_post', 'dav', '2022/12/12 12:33:32', 'portrait_post167084474352fcc3bc04f86edb6ec93b7ff3352c', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(10, '#portrait', 'portrait_post', 'dav', '2022/12/12 12:33:35', 'portrait_post16708447715aedd36f2d9b15e9739023390331dc', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(11, '#portrait', 'portrait_post', 'dav', '2022/12/12 12:35:26', 'portrait_post1670844914ac1a6b2590eb575624aa37353d122c', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(12, '#portrait', 'portrait_post', 'dav', '2022/12/12 12:36:57', 'portrait_post1670844895fe55e4d358fda7d557af6cf75ec5bc', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(13, 'Perfection is not attainable, but if we chase perfection we can catch excellence. by Vince Lombardi', 'reference_post', 'motivation_bucket', '2022/12/12 12:43:39', 'reference_post_427038f8596f80f74f6fadd19695136ef0679e4ae4a5f84c2f167084354031f9e32abed86da9937836bbc547b84ee0206b32be8e3c', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(14, 'Be yourself; everyone else is already taken. by Oscar Wilde', 'reference_post', 'motivation_bucket', '2022/12/12 12:43:42', 'reference_post_742dabd237d21a81cc05eddafe8c12e02775a14921981094c11670838724476aef8318bc8795e4778309fa631eba2f45b7b3a5921f', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(15, 'Whether you think you can or you think you can''t, you''re right. by Henry Ford', 'reference_post', 'motivation_bucket', '2022/12/12 12:43:50', 'reference_post_e9d17d93b3279c5572753b079533de56598cbfd774bc7048991670843434e12c3151d03211e1824adb913fae5fdfabf62f5c2a9b63', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(16, 'this guy is looking nice #dope #nice #portrait', 'portrait_post', 'dav', '2022/12/12 12:43:55', 'portrait_post1670844095fa3b2728d67f6b100c96c9bd5ecad7', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(17, '#portrait', 'portrait_post', 'dav', '2022/12/12 12:44:22', 'portrait_post1670845406bfb48702a735f963dfca8becb91fe5', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(18, '#portrait', 'portrait_post', 'dav', '2022/12/12 12:44:32', 'portrait_post167084487134cf462ef76c55cde087401bf8dd1a', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(19, 'Yo bro what''s up', 'classic_write_up', 'dev', '2022/12/12 21:15:35', 'classic_write_up_2147771c053feb9e17d58db6c5fead2c714d122a803573baf7167087612808585749443a1926cabc6c43c1b7d57178496e8d0bc9ec', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev'),
(20, 'Hey what''s up\nMy name is Kelly Daniel\nI''m a full stack developer\nAnd I''m the founder of @peffet', 'classic_write_up', 'kelly_daniel', '2022/13/12 23:29:41', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(21, 'Hey what''s up\nMy name is Kelly Daniel\nI''m a full stack developer\nAnd I''m the founder of @peffet', 'classic_write_up', 'kelly_daniel', '2022/13/12 23:35:49', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet'),
(23, 'Checkout the neon picture @dav #neon', 'regular_post', 'kelly_daniel', '2022/14/12 00:14:23', 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(25, 'Checkout the neon picture @dav #neon', 'regular_post', 'kelly_daniel', '2022/14/12 00:15:33', 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(26, '#portrait', 'portrait_post', 'dav', '2022/14/12 11:47:59', 'portrait_post1670844895fe55e4d358fda7d557af6cf75ec5bc', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(27, '#portrait', 'portrait_post', 'dav', '2022/14/12 11:48:05', 'portrait_post167084465667b45cf4196acf6522f72172bc3f2b', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(28, 'Guy on black #portrait #dope', 'portrait_post', 'dav', '2022/14/12 11:48:08', 'portrait_post1670844180676783f659af3e89e03959187761f8', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(29, '#portrait', 'portrait_post', 'dav', '2022/14/12 11:48:12', 'portrait_post1670844570cf6b3fd5663b440ad6dfef5a483a1a', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(30, 'this guy is looking nice #dope #nice #portrait', 'portrait_post', 'dav', '2022/14/12 11:48:16', 'portrait_post1670844095fa3b2728d67f6b100c96c9bd5ecad7', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(31, '#portrait', 'portrait_post', 'dav', '2022/14/12 11:48:19', 'portrait_post167084487134cf462ef76c55cde087401bf8dd1a', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(32, '#portrait', 'portrait_post', 'dav', '2022/14/12 11:48:28', 'portrait_post1670845406bfb48702a735f963dfca8becb91fe5', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(33, 'Dope guy #dope #frenchguy', 'portrait_post', 'dav', '2022/14/12 11:48:32', 'portrait_post1670843879768eae2024d03c92ff46c4cafacbf6', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(34, 'Checkout the neon picture @dav #neon', 'regular_post', 'kelly_daniel', '2022/14/12 12:06:10', 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet'),
(35, 'Welcome to peffet', 'classic_write_up', 'peffet', '2022/14/12 12:12:27', 'classic_write_up_408708de8e7f560d440427d4f342ee7125f7cd361465f8755416710163426582ed7c137f032471c3eec8fcbaca85b8fe038a461be2', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet'),
(36, 'Yo bro what''s up', 'classic_write_up', 'dev', '2022/14/12 22:49:37', 'classic_write_up_2147771c053feb9e17d58db6c5fead2c714d122a803573baf7167087612808585749443a1926cabc6c43c1b7d57178496e8d0bc9ec', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(38, 'Dope guy #dope #frenchguy', 'portrait_post', 'dav', '2022/15/12 23:23:32', 'portrait_post1670843879768eae2024d03c92ff46c4cafacbf6', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(39, 'Hey what''s up\nMy name is Kelly Daniel\nI''m a full stack developer\nAnd I''m the founder of @peffet', 'classic_write_up', 'kelly_daniel', '2022/15/12 23:39:56', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', 'a7841247acd035452005651dd20eb1fb51116cd026476887e6', 'scott_choker'),
(40, 'Anime characters and Anime names check profile for details', 'write_up_regular', 'animixplay', '2022/16/12 00:03:48', '804d70388276153be3e8a9a91fd2a5798e8daa23c2de252e61eae810', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(41, 'Yourichi Demon Slayer #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:04:43', 'portrait_post1671145477aba7ff5236e00fcf625e4bb0c6783a', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(42, 'Satarou Gojo Jujutsu Kaisen #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:14:06', 'portrait_post1671146039d5e9f22896f5d2f2e80000e416bcaa', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(43, 'Zarachi Kenpachi Bleach #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:26:40', 'portrait_post1671146785c02978126b0eb093850973bb6c79b4', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(44, 'Sakuna Jujutsu Kaisen #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:26:43', 'portrait_post1671146688b43f1e5ddbe312fe6d4bb44aa853fc', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(45, 'Unuohana Yachiru Bleach #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:26:47', 'portrait_post16711466535de9e6bc914462a7754cd3614b542e', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(46, 'Asta Black Clover #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:26:50', 'portrait_post16711466141d43f97c8e2e5bb633aa07e3b7e837', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(48, 'Unknown Demon Slayer #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:26:54', 'portrait_post1671146586c28c2bf8ba4bc5f83f265794530738', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(49, 'Sasuke Uchiha Naruto #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:26:57', 'portrait_post1671146547372cbcb4b9eddaae9940d4c9354d21', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(50, 'Itachi Uchiha Naruto #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:26:59', 'portrait_post1671146509ece4f5c4443ddea4f4c481e49f673b', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(51, 'Kurosaki Ichigo Bleach #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:27:04', 'portrait_post1671146475512c038d7f664a141f2ed0c6cf4938', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(52, 'Sakuna Jujutsu Kaisen #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:27:06', 'portrait_post167114645032e5ed2fc60d506126159683970852', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(53, 'Unkown Jujutsu Kaisen #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:27:09', 'portrait_post1671146413c48a5c46021c1deacca101351e431e', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(54, 'Kaneki Tokyo Ghoul #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:27:13', 'portrait_post1671146387f85b1f6e70a7417a0a87bd9f2faa18', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(55, 'Chifuyu Tokyo Revengers #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:27:18', 'portrait_post1671146354e72de2a7938f7e7e672a85881fa07a', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(56, 'Kaneki Tokyo Ghoul #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:27:20', 'portrait_post1671146327ca16fe9d8d27df8ba6fb0270eb8bc8', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(57, 'Sasuke Uchiha Naruto #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:27:22', 'portrait_post1671146300a73c482309c4939d555a682590e21b', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(58, 'Kaneki Tokyo Ghoul  #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:27:25', 'portrait_post16711462683f6429c90375b00cff40f95924eb03', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(59, 'Kaneki Tokyo Ghoul  #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:27:28', 'portrait_post1671146245ea1647b0c11bea050e92f4a2c935c1', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(60, 'Vegeta and Goku or Kakarote Dragon Ball  #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:27:31', 'portrait_post167114621180be63be7ed5eca3af4704671f616c', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(61, 'Goku or Kakarote Dragon Ball  #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:27:34', 'portrait_post1671146179689271f6af4e5e4f81322a5d24cee7', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(62, 'Sasuke Uchiha Naruto  #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:27:37', 'portrait_post16711461397012d5c53622a381ddda76934b219d', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(63, 'Gon Freeces Hunter X Hunter  #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:27:40', 'portrait_post1671146112f9eacff45f55c9d63ba43ddc843b33', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(64, 'Naruto Uzumaki Naruto  #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:27:42', 'portrait_post16711460747e7006e0a5cccdebf171dda2a7c901', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(65, 'Asta Black Clover #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:27:46', 'portrait_post1671145704e599b655cb2f4de3b62dc4f3deacc7', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(66, 'Unkown Naruto #anime #portrait', 'portrait_post', 'animixplay', '2022/16/12 00:27:50', 'portrait_post16711456369bf498241c7822d2a4a7152f42e768', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(68, 'Checkout the neon picture @dav #neon', 'regular_post', 'kelly_daniel', '2022/16/12 21:54:29', 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '9e0529fdf1e7d5fef8f078a2dd5bed4fec3a75a69deda3dab6', 'animixplay'),
(69, 'Damn this guy is really looking good', 'regular_post', 'kelly_daniel', '2022/16/12 23:54:01', 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(70, 'death ain''t know me I ain''t know death||death ain''t seeing me I ain''t seeing death||money knows me we are good friends||we grew up in the early days||..', 'typing_text', 'kizdver', '2022/16/12 23:56:36', 'typing_textc1be7946a06b29eac5a6121eeae3951a5e7b27c777bae669951671231387d121771cdb5181d57270e9162491a6c31364380f330f23', '0fa2294ee58945fb8190f7272e990b9e7518b4d2fc3a8db51a', 'kizdver'),
(71, 'Checkout the neon picture @dav #neon', 'regular_post', 'kelly_daniel', '2022/17/12 14:00:55', 'regular_post16709732577390105ed9709edcdf4833271200bb2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '0fa2294ee58945fb8190f7272e990b9e7518b4d2fc3a8db51a', 'kizdver'),
(72, 'Hey what''s up\nMy name is Kelly Daniel\nI''m a full stack developer\nAnd I''m the founder of @peffet', 'classic_write_up', 'kelly_daniel', '2022/17/12 14:00:58', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '0fa2294ee58945fb8190f7272e990b9e7518b4d2fc3a8db51a', 'kizdver'),
(73, 'Peffet will be coming out soon ', 'classic_write_up', 'kelly_daniel', '2022/17/12 14:01:00', 'classic_write_up_133781f47e7ebefc50475146e7931fbc49c0ef3443bfac93af1670972368f6fa3f39209beea848fd9f157f2501eb903a6119d308c2', '0fa2294ee58945fb8190f7272e990b9e7518b4d2fc3a8db51a', 'kizdver'),
(74, 'Damn this guy is really looking good', 'regular_post', 'kelly_daniel', '2022/17/12 14:01:54', 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '0fa2294ee58945fb8190f7272e990b9e7518b4d2fc3a8db51a', 'kizdver'),
(75, ' @kelly_daniel if i no kpie @gideon @peffet @dav @motivation_bucket appollo dey', 'classic_write_up', 'kelly_daniel', '2022/17/12 15:23:11', 'classic_write_up_bf6d002bdac3232cc7f9a18d5093b0abd7bec56fc03ec54e3416712869840003c6e2a231e67cd3d87d4268fe605a9d15d85f08a66a', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(77, ' @kelly_daniel if i no kpie @gideon @peffet @dav @motivation_bucket appollo dey', 'classic_write_up', 'kelly_daniel', '2022/17/12 15:25:40', 'classic_write_up_bf6d002bdac3232cc7f9a18d5093b0abd7bec56fc03ec54e3416712869840003c6e2a231e67cd3d87d4268fe605a9d15d85f08a66a', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(78, 'Damn this guy is really looking good', 'regular_post', 'kelly_daniel', '2022/17/12 15:26:08', 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(79, 'Peffet will be coming out soon ', 'classic_write_up', 'kelly_daniel', '2022/17/12 15:26:12', 'classic_write_up_133781f47e7ebefc50475146e7931fbc49c0ef3443bfac93af1670972368f6fa3f39209beea848fd9f157f2501eb903a6119d308c2', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(80, 'Hey what''s up\nMy name is Kelly Daniel\nI''m a full stack developer\nAnd I''m the founder of @peffet', 'classic_write_up', 'kelly_daniel', '2022/17/12 15:26:16', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(81, 'Kurosaki Ichigo Bleach #anime #portrait', 'portrait_post', 'animixplay', '2022/19/12 11:49:44', 'portrait_post1671146475512c038d7f664a141f2ed0c6cf4938', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(82, ' @kelly_daniel #anime ', 'classic_write_up', 'kelly_daniel', '2022/19/12 11:51:25', 'classic_write_up_f5c67d6d205b158bafb570449b5c3b974afb3231c6d857d2a516714469712e532683f79bbbd26a2ec52fceed7fd26eda9909f6b0c4', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(83, 'Cyclone', 'regular_post', 'kelly_daniel', '2022/19/12 12:08:38', 'regular_post167144794990512fe362855f87e492fda039ff032a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(84, 'Sakuna Jujutsu Kaisen #anime #portrait', 'portrait_post', 'animixplay', '2022/19/12 12:09:18', 'portrait_post167114645032e5ed2fc60d506126159683970852', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(85, 'Anime characters and Anime names check profile for details', 'write_up_regular', 'animixplay', '2022/19/12 12:10:10', '804d70388276153be3e8a9a91fd2a5798e8daa23c2de252e61eae810', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(87, 'Gon Freeces Hunter X Hunter  #anime #portrait', 'portrait_post', 'animixplay', '2022/19/12 12:16:55', 'portrait_post1671146112f9eacff45f55c9d63ba43ddc843b33', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(88, 'Yourichi Demon Slayer #anime #portrait', 'portrait_post', 'animixplay', '2022/19/12 20:23:27', 'portrait_post1671145477aba7ff5236e00fcf625e4bb0c6783a', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(89, '#portrait', 'portrait_post', 'dav', '2022/19/12 20:33:53', 'portrait_post1670844895fe55e4d358fda7d557af6cf75ec5bc', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev'),
(90, 'Peffet will be coming out soon ', 'classic_write_up', 'kelly_daniel', '2022/19/12 20:34:15', 'classic_write_up_133781f47e7ebefc50475146e7931fbc49c0ef3443bfac93af1670972368f6fa3f39209beea848fd9f157f2501eb903a6119d308c2', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev'),
(91, 'NF dope guy GOAT #portrait #NF #NFReal', 'portrait_post', 'dav', '2022/19/12 20:34:19', 'portrait_post1670844381a9f51cb639e644cd6c01ccccefcf0a', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev'),
(92, 'senior man @kelly_daniel #anime ', 'regular_post', 'dev', '2022/19/12 20:36:26', 'regular_post1671478581e3532ec7fdc261eadc55f156f35399bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev'),
(93, 'lit ðŸ˜', 'portrait_post', 'dev', '2022/19/12 20:37:22', 'portrait_post167147863594386090314c4c06e9496ef4aff2f2', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev'),
(94, ' @kelly_daniel if i no kpie @gideon @peffet @dav @motivation_bucket appollo dey', 'classic_write_up', 'kelly_daniel', '2022/19/12 20:41:18', 'classic_write_up_bf6d002bdac3232cc7f9a18d5093b0abd7bec56fc03ec54e3416712869840003c6e2a231e67cd3d87d4268fe605a9d15d85f08a66a', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev'),
(95, 'Cyclone', 'regular_post', 'kelly_daniel', '2022/22/12 11:25:06', 'regular_post167144794990512fe362855f87e492fda039ff032a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet'),
(96, ' @kelly_daniel #anime ', 'classic_write_up', 'kelly_daniel', '2022/22/12 11:25:10', 'classic_write_up_f5c67d6d205b158bafb570449b5c3b974afb3231c6d857d2a516714469712e532683f79bbbd26a2ec52fceed7fd26eda9909f6b0c4', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet'),
(97, 'Damn this guy is really looking good', 'regular_post', 'kelly_daniel', '2022/22/12 11:25:11', 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet'),
(98, 'Damn this guy is really looking good', 'regular_post', 'kelly_daniel', '2022/22/12 11:35:31', 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev'),
(99, 'Hey what''s up\nMy name is Kelly Daniel\nI''m a full stack developer\nAnd I''m the founder of @peffet', 'classic_write_up', 'kelly_daniel', '2022/22/12 11:35:32', 'classic_write_up_16e16062af13dde7b76594299c18bde7cbd24e43c612b917b7167097055539de6bb1893271c2e0614857f2b232818196725b83eea9', 'bd1b9ebe91b3aded56806d45c54d3cfc4fc12074dec08168ef', 'dev'),
(100, ' @kelly_daniel #anime ', 'classic_write_up', 'kelly_daniel', '2022/22/12 11:36:41', 'classic_write_up_f5c67d6d205b158bafb570449b5c3b974afb3231c6d857d2a516714469712e532683f79bbbd26a2ec52fceed7fd26eda9909f6b0c4', '8edc52399d00937967424cf230553c5e19fee506bf1ede8b31', 'dav'),
(101, 'Kurosaki Ichigo Bleach #anime #portrait', 'portrait_post', 'animixplay', '2022/22/12 11:39:15', 'portrait_post1671146475512c038d7f664a141f2ed0c6cf4938', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet'),
(102, 'Unkown Jujutsu Kaisen #anime #portrait', 'portrait_post', 'animixplay', '2022/22/12 11:39:18', 'portrait_post1671146413c48a5c46021c1deacca101351e431e', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet'),
(103, 'If you look at what you have in life, you''ll always have more. If you look at what you don''t have in life, you''ll never have enough. by Oprah Winfrey', 'reference_post', 'motivation_bucket', '2022/22/12 11:39:21', 'reference_post_345998b6e1e55ccecb75eb347ab90f1e991e434d9f9d6fa01d1670843603d65cae043516bd4ffdc0804bebcb960b06d51c6df240cc', '44ab16002f6ed45cd1b32c392f6e542fb9c597366e5c6ff4b5', 'peffet'),
(104, 'Asta Black Clover #anime #portrait', 'portrait_post', 'animixplay', '2022/22/12 11:42:10', 'portrait_post1671145704e599b655cb2f4de3b62dc4f3deacc7', 'a7841247acd035452005651dd20eb1fb51116cd026476887e6', 'scott_choker'),
(105, 'Kurosaki Ichigo Bleach #anime #portrait', 'portrait_post', 'animixplay', '2022/22/12 11:44:05', 'portrait_post1671146475512c038d7f664a141f2ed0c6cf4938', 'a7841247acd035452005651dd20eb1fb51116cd026476887e6', 'scott_choker'),
(106, 'Damn this guy is really looking good', 'regular_post', 'kelly_daniel', '2022/22/12 11:44:08', 'regular_post1671231235603625e1facd1eee99aa13e4b4852a2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'a7841247acd035452005651dd20eb1fb51116cd026476887e6', 'scott_choker'),
(107, 'Hey whats up @scott_choker ', 'classic_write_up', 'dav', '2022/22/12 11:44:14', 'classic_write_up_6873f0ab68cd991224a82295f7fa502ece2473248921cfe5a016712874492cba3ae1ab96cae3c2d3b04ccc9b43cf9a216e44d2df90', 'a7841247acd035452005651dd20eb1fb51116cd026476887e6', 'scott_choker'),
(108, 'Naruto Uzumaki Naruto  #anime #portrait', 'portrait_post', 'animixplay', '2022/22/12 11:44:17', 'portrait_post16711460747e7006e0a5cccdebf171dda2a7c901', 'a7841247acd035452005651dd20eb1fb51116cd026476887e6', 'scott_choker'),
(109, 'I''ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. by Maya Angelou', 'reference_post', 'motivation_bucket', '2022/22/12 11:44:20', 'reference_post_b60ccdee9e50b8570463023b264b72e38d055dcfe09251f38b16708434081d3a17bed72b39c62c77d857d4b4634eac3b996a2d23e3', 'a7841247acd035452005651dd20eb1fb51116cd026476887e6', 'scott_choker'),
(110, 'Unuohana Yachiru Bleach #anime #portrait', 'portrait_post', 'animixplay', '2022/22/12 11:44:43', 'portrait_post16711466535de9e6bc914462a7754cd3614b542e', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(111, 'Satarou Gojo Jujutsu Kaisen #anime #portrait', 'portrait_post', 'animixplay', '2022/22/12 19:25:34', 'portrait_post1671146039d5e9f22896f5d2f2e80000e416bcaa', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel'),
(112, 'Hey whats up @scott_choker ', 'classic_write_up', 'dav', '2022/23/12 20:01:37', 'classic_write_up_6873f0ab68cd991224a82295f7fa502ece2473248921cfe5a016712874492cba3ae1ab96cae3c2d3b04ccc9b43cf9a216e44d2df90', '2a1ca87971a4509ecf91199079fbd9c0e4317251fa7456480e', 'kelly_daniel');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `central_post_holder`
--
ALTER TABLE `central_post_holder`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat_central_holder`
--
ALTER TABLE `chat_central_holder`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat_media_table`
--
ALTER TABLE `chat_media_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `classic_write_up`
--
ALTER TABLE `classic_write_up`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `commentsreaction`
--
ALTER TABLE `commentsreaction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments_table`
--
ALTER TABLE `comments_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment_reply`
--
ALTER TABLE `comment_reply`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fanf`
--
ALTER TABLE `fanf`
  ADD PRIMARY KEY (`id_k`);

--
-- Indexes for table `ip_count`
--
ALTER TABLE `ip_count`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `is_online`
--
ALTER TABLE `is_online`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `peffet_event_application_table`
--
ALTER TABLE `peffet_event_application_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `peffet_event_main_table`
--
ALTER TABLE `peffet_event_main_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `peffet_event_pair`
--
ALTER TABLE `peffet_event_pair`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `peffet_event_reaction`
--
ALTER TABLE `peffet_event_reaction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portrait_post`
--
ALTER TABLE `portrait_post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reaction_table`
--
ALTER TABLE `reaction_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reference_post`
--
ALTER TABLE `reference_post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `regular_post_media_table`
--
ALTER TABLE `regular_post_media_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `regular_post_table`
--
ALTER TABLE `regular_post_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reply_reaction_table`
--
ALTER TABLE `reply_reaction_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saved_login`
--
ALTER TABLE `saved_login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `typing_text_post`
--
ALTER TABLE `typing_text_post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usersavedpost`
--
ALTER TABLE `usersavedpost`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_chat_fav`
--
ALTER TABLE `users_chat_fav`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_search`
--
ALTER TABLE `user_search`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `central_post_holder`
--
ALTER TABLE `central_post_holder`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;
--
-- AUTO_INCREMENT for table `chat_central_holder`
--
ALTER TABLE `chat_central_holder`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `chat_media_table`
--
ALTER TABLE `chat_media_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `classic_write_up`
--
ALTER TABLE `classic_write_up`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `commentsreaction`
--
ALTER TABLE `commentsreaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `comments_table`
--
ALTER TABLE `comments_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `comment_reply`
--
ALTER TABLE `comment_reply`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `fanf`
--
ALTER TABLE `fanf`
  MODIFY `id_k` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT for table `ip_count`
--
ALTER TABLE `ip_count`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `is_online`
--
ALTER TABLE `is_online`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;
--
-- AUTO_INCREMENT for table `peffet_event_application_table`
--
ALTER TABLE `peffet_event_application_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `peffet_event_main_table`
--
ALTER TABLE `peffet_event_main_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `peffet_event_pair`
--
ALTER TABLE `peffet_event_pair`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `peffet_event_reaction`
--
ALTER TABLE `peffet_event_reaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT for table `portrait_post`
--
ALTER TABLE `portrait_post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
--
-- AUTO_INCREMENT for table `reaction_table`
--
ALTER TABLE `reaction_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;
--
-- AUTO_INCREMENT for table `reference_post`
--
ALTER TABLE `reference_post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `regular_post_media_table`
--
ALTER TABLE `regular_post_media_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `regular_post_table`
--
ALTER TABLE `regular_post_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `reply_reaction_table`
--
ALTER TABLE `reply_reaction_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `saved_login`
--
ALTER TABLE `saved_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;
--
-- AUTO_INCREMENT for table `typing_text_post`
--
ALTER TABLE `typing_text_post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `usersavedpost`
--
ALTER TABLE `usersavedpost`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `users_chat_fav`
--
ALTER TABLE `users_chat_fav`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user_search`
--
ALTER TABLE `user_search`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
