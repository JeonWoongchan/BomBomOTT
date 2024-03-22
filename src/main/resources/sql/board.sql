-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        8.0.30 - MySQL Community Server - GPL
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- board 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `board` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `board`;

-- 테이블 board.board 구조 내보내기
CREATE TABLE IF NOT EXISTS `board` (
                                       `id` int NOT NULL AUTO_INCREMENT,
                                       `title` varchar(400) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '제목',
    `content` varchar(400) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '내용',
    `filename` varchar(400) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '파일명',
    `filepath` varchar(400) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '파일경로',
    `like_count` int DEFAULT '0' COMMENT '추천수',
    `reg_userid` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '작성자',
    `reg_date` datetime DEFAULT NULL COMMENT '등록일',
    `view_count` int DEFAULT '0' COMMENT '조회수',
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

-- 테이블 데이터 board.board:~3 rows (대략적) 내보내기
INSERT IGNORE INTO `board` (`id`, `title`, `content`, `filename`, `filepath`, `like_count`, `reg_userid`, `reg_date`, `view_count`) VALUES
	(1, '제목1', '내용1', '5754cb28-723d-4a09-92d6-ee0bd63b1d5e_', '/files/5754cb28-723d-4a09-92d6-ee0bd63b1d5e_', 0, 'hwna', '2023-10-12 22:44:17', 1),
	(2, '제목3', '내용3', '', '', 1, 'hwna', '2023-10-13 00:07:44', 55),
	(3, '1223', '123123', '', '', 0, 'hwna', '2023-10-13 00:08:34', 0),
	(4, '1', '1', '0a7b7520-8e95-4e60-923e-876b85950c6e_미기법석2.PNG', '/files/0a7b7520-8e95-4e60-923e-876b85950c6e_미기법석2.PNG', 0, 'hwna', '2023-10-13 00:12:24', 0),
	(5, '5번째글', '5번째글', '', '', 0, 'hwna', '2023-10-15 00:07:01', 2);

-- 테이블 board.board_comment 구조 내보내기
CREATE TABLE IF NOT EXISTS `board_comment` (
                                               `comment_id` int NOT NULL AUTO_INCREMENT,
                                               `board_id` int NOT NULL COMMENT '글id',
                                               `upper_comment_id` int NOT NULL COMMENT '상위댓글id',
                                               `content` varchar(400) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '내용',
    `reg_userid` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '작성자',
    `reg_date` datetime DEFAULT NULL COMMENT '등록일',
    PRIMARY KEY (`comment_id`) USING BTREE
    ) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3;

-- 테이블 데이터 board.board_comment:~0 rows (대략적) 내보내기
INSERT IGNORE INTO `board_comment` (`comment_id`, `board_id`, `upper_comment_id`, `content`, `reg_userid`, `reg_date`) VALUES
	(1, 1, 0, '1-0,1 첫번째 댓글 (1단계)', '', NULL),
	(2, 1, 1, '1-1,2 첫번째 댓글의 댓글 (2단계)', NULL, NULL),
	(3, 1, 0, '1-0,3 두번째 댓글 (1단계)', NULL, NULL),
	(4, 1, 1, '1-2,4 첫번째 댓글의 두번째댓글 (2단계)', NULL, NULL),
	(6, 2, 0, '1243245', 'hwna', '2023-10-14 22:41:23'),
	(7, 2, 0, '3333333333', 'hwna', '2023-10-14 22:43:50'),
	(8, 2, 0, '44444', 'hwna', '2023-10-14 22:50:45'),
	(9, 2, 0, '55555', 'hwna', '2023-10-14 22:51:50'),
	(10, 2, 0, '2222', 'hwna', '2023-10-14 22:53:58'),
	(11, 2, 0, 'ㅇㄹㅇㄹㅇㄹ', 'hwna', '2023-10-14 22:58:11'),
	(12, 2, 0, '22222', 'hwna', '2023-10-14 22:58:16'),
	(13, 2, 0, 'qqqq', 'hwna', '2023-10-14 23:43:37'),
	(14, 2, 0, 'qqqq', 'hwna', '2023-10-14 23:43:43'),
	(15, 2, 0, 'qqq', 'hwna', '2023-10-14 23:44:19');

-- 테이블 board.board_like 구조 내보내기
CREATE TABLE IF NOT EXISTS `board_like` (
                                            `id` int NOT NULL,
                                            `userid` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
    PRIMARY KEY (`id`,`userid`) USING BTREE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- 테이블 데이터 board.board_like:~0 rows (대략적) 내보내기
INSERT IGNORE INTO `board_like` (`id`, `userid`) VALUES
	(2, 'hwna');

-- 테이블 board.member 구조 내보내기
CREATE TABLE IF NOT EXISTS `member` (
                                        `id` int NOT NULL AUTO_INCREMENT,
                                        `userid` varchar(40) DEFAULT NULL,
    `name` varchar(40) DEFAULT NULL,
    `email` varchar(40) DEFAULT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

-- 테이블 데이터 board.member:~2 rows (대략적) 내보내기
INSERT IGNORE INTO `member` (`id`, `userid`, `name`, `email`) VALUES
	(1, 'hwna', '나현운', 'hwna0829@gmail.com'),
	(2, 'hwna', '나현운2', '22322');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
