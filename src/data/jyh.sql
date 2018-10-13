/*
Navicat MySQL Data Transfer

Source Server         : study
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : jyh

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-13 17:19:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `userName` varchar(255) CHARACTER SET latin1 NOT NULL,
  `id` varchar(255) NOT NULL,
  `imgURL` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `goodsName` varchar(255) DEFAULT NULL,
  `price` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `qty` int(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('13550592343', '957441', '../img/goods_2.jpg', '今昇男款暖心羽绒套组', '399.00', '3');
INSERT INTO `car` VALUES ('13550592343', '210586', '../img/goods_3.jpg', '今昇花韵双面穿皮草大衣', '1680.00', '2');
INSERT INTO `car` VALUES ('13550592342', '210439', '../img/goods_4.jpg', '今昇狐狸毛领绵羊皮鹅绒服', '1980.00', '4');
INSERT INTO `car` VALUES ('13550592342', '210586', '../img/goods_3.jpg', '今昇花韵双面穿皮草大衣', '1680.00', '2');
INSERT INTO `car` VALUES ('13550592342', '957441', '../img/goods_2.jpg', '今昇男款暖心羽绒套组', '399.00', '2');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `ID` varchar(255) CHARACTER SET latin1 NOT NULL,
  `goodsName` varchar(255) DEFAULT NULL,
  `price` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `priced` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `qty` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `goodslist_imgURL` varchar(255) DEFAULT NULL,
  `goods_imgURL` varchar(255) DEFAULT NULL,
  `imgURL1` varchar(255) DEFAULT NULL,
  `imgURL2` varchar(255) DEFAULT NULL,
  `imgURL3` varchar(255) DEFAULT NULL,
  `imgURL4` varchar(255) DEFAULT NULL,
  `imgURL5` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('957440', '今昇女款暖心羽绒套组', '369.00', '479.00', '114', '../img/goodslist_1.jpg', '../img/goods_1.jpg', '../img/details_1_con1.jpg', '../img/details_1_con2.jpg', '../img/details_1_con3.jpg', '../img/details_1_con4.jpg', '../img/details_1_con5.jpg');
INSERT INTO `goods` VALUES ('957441', '今昇男款暖心羽绒套组', '399.00', '479.00', '139', '../img/goodslist_2.jpg', '../img/goods_2.jpg', '../img/details_2_con1.jpg', '../img/details_2_con2.jpg', '../img/details_2_con3.jpg', '../img/details_2_con4.jpg', '../img/details_2_con5.jpg');
INSERT INTO `goods` VALUES ('210586', '今昇花韵双面穿皮草大衣', '1680.00', '2019.00', '126', '../img/goodslist_3.jpg', '../img/goods_3.jpg', '../img/details_3_con1.jpg', '../img/details_3_con2.jpg', '../img/details_3_con3.jpg', '../img/details_3_con4.jpg', '../img/details_3_con5.jpg');
INSERT INTO `goods` VALUES ('210439', '今昇狐狸毛领绵羊皮鹅绒服', '1980.00', '2369.00', '58', '../img/goodslist_4.jpg', '../img/goods_4.jpg', '../img/details_4_con1.jpg', '../img/details_4_con2.jpg', '../img/details_4_con3.jpg', '../img/details_4_con4.jpg', '../img/details_4_con5.jpg');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `tel` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('13550592342', '123456');
INSERT INTO `user` VALUES ('13550592343', '123456');
INSERT INTO `user` VALUES ('13550592344', '123456');
SET FOREIGN_KEY_CHECKS=1;
