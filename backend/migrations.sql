CREATE TABLE IF NOT EXISTS `__EFMigrationsHistory` (
    `MigrationId` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
    `ProductVersion` varchar(32) CHARACTER SET utf8mb4 NOT NULL,
    CONSTRAINT `PK___EFMigrationsHistory` PRIMARY KEY (`MigrationId`)
) CHARACTER SET utf8mb4;

START TRANSACTION;


DROP PROCEDURE IF EXISTS MigrationsScript;
DELIMITER //
CREATE PROCEDURE MigrationsScript()
BEGIN
    IF NOT EXISTS(SELECT 1 FROM `__EFMigrationsHistory` WHERE `MigrationId` = '20220602021127_initial') THEN

    ALTER DATABASE CHARACTER SET utf8mb4;

    END IF;
END //
DELIMITER ;
CALL MigrationsScript();
DROP PROCEDURE MigrationsScript;


DROP PROCEDURE IF EXISTS MigrationsScript;
DELIMITER //
CREATE PROCEDURE MigrationsScript()
BEGIN
    IF NOT EXISTS(SELECT 1 FROM `__EFMigrationsHistory` WHERE `MigrationId` = '20220602021127_initial') THEN

    CREATE TABLE `Employee` (
        `Id` int NOT NULL AUTO_INCREMENT,
        `Name` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
        `LastName` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
        `Email` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
        `Hash` char(36) COLLATE ascii_general_ci NOT NULL,
        `Deleted` tinyint(1) NOT NULL DEFAULT FALSE,
        `CreationDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        CONSTRAINT `PK_Employee` PRIMARY KEY (`Id`)
    ) CHARACTER SET utf8mb4;

    END IF;
END //
DELIMITER ;
CALL MigrationsScript();
DROP PROCEDURE MigrationsScript;


DROP PROCEDURE IF EXISTS MigrationsScript;
DELIMITER //
CREATE PROCEDURE MigrationsScript()
BEGIN
    IF NOT EXISTS(SELECT 1 FROM `__EFMigrationsHistory` WHERE `MigrationId` = '20220602021127_initial') THEN

    CREATE TABLE `FinancialInstitution` (
        `Id` int NOT NULL AUTO_INCREMENT,
        `Name` varchar(250) CHARACTER SET utf8mb4 NOT NULL,
        `FinancialInstitutionCode` varchar(3) CHARACTER SET utf8mb4 NOT NULL,
        `LogoURL` varchar(500) CHARACTER SET utf8mb4 NULL,
        `ShortName` varchar(250) CHARACTER SET utf8mb4 NOT NULL,
        `LastUpdateDate` datetime(6) NULL,
        `Hash` char(36) COLLATE ascii_general_ci NOT NULL,
        `Deleted` tinyint(1) NOT NULL DEFAULT FALSE,
        `CreationDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        CONSTRAINT `PK_FinancialInstitution` PRIMARY KEY (`Id`)
    ) CHARACTER SET utf8mb4;

    END IF;
END //
DELIMITER ;
CALL MigrationsScript();
DROP PROCEDURE MigrationsScript;


DROP PROCEDURE IF EXISTS MigrationsScript;
DELIMITER //
CREATE PROCEDURE MigrationsScript()
BEGIN
    IF NOT EXISTS(SELECT 1 FROM `__EFMigrationsHistory` WHERE `MigrationId` = '20220602021127_initial') THEN

    CREATE TABLE `Project` (
        `Id` int NOT NULL AUTO_INCREMENT,
        `Name` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
        `Description` varchar(250) CHARACTER SET utf8mb4 NOT NULL,
        `Hash` char(36) COLLATE ascii_general_ci NOT NULL,
        `Deleted` tinyint(1) NOT NULL DEFAULT FALSE,
        `CreationDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        CONSTRAINT `PK_Project` PRIMARY KEY (`Id`)
    ) CHARACTER SET utf8mb4;

    END IF;
END //
DELIMITER ;
CALL MigrationsScript();
DROP PROCEDURE MigrationsScript;


DROP PROCEDURE IF EXISTS MigrationsScript;
DELIMITER //
CREATE PROCEDURE MigrationsScript()
BEGIN
    IF NOT EXISTS(SELECT 1 FROM `__EFMigrationsHistory` WHERE `MigrationId` = '20220602021127_initial') THEN

    CREATE TABLE `ProjectEmployee` (
        `Id` int NOT NULL AUTO_INCREMENT,
        `Project` int NOT NULL,
        `Employee` int NOT NULL,
        `Hash` char(36) COLLATE ascii_general_ci NOT NULL,
        `Deleted` tinyint(1) NOT NULL DEFAULT FALSE,
        `CreationDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        CONSTRAINT `PK_ProjectEmployee` PRIMARY KEY (`Id`),
        CONSTRAINT `FK_ProjectEmployee_Employee_Employee` FOREIGN KEY (`Employee`) REFERENCES `Employee` (`Id`) ON DELETE RESTRICT,
        CONSTRAINT `FK_ProjectEmployee_Project_Project` FOREIGN KEY (`Project`) REFERENCES `Project` (`Id`) ON DELETE RESTRICT
    ) CHARACTER SET utf8mb4;

    END IF;
END //
DELIMITER ;
CALL MigrationsScript();
DROP PROCEDURE MigrationsScript;


DROP PROCEDURE IF EXISTS MigrationsScript;
DELIMITER //
CREATE PROCEDURE MigrationsScript()
BEGIN
    IF NOT EXISTS(SELECT 1 FROM `__EFMigrationsHistory` WHERE `MigrationId` = '20220602021127_initial') THEN

    CREATE UNIQUE INDEX `IX_Employee_Hash` ON `Employee` (`Hash`);

    END IF;
END //
DELIMITER ;
CALL MigrationsScript();
DROP PROCEDURE MigrationsScript;


DROP PROCEDURE IF EXISTS MigrationsScript;
DELIMITER //
CREATE PROCEDURE MigrationsScript()
BEGIN
    IF NOT EXISTS(SELECT 1 FROM `__EFMigrationsHistory` WHERE `MigrationId` = '20220602021127_initial') THEN

    CREATE UNIQUE INDEX `IX_FinancialInstitution_Hash` ON `FinancialInstitution` (`Hash`);

    END IF;
END //
DELIMITER ;
CALL MigrationsScript();
DROP PROCEDURE MigrationsScript;


DROP PROCEDURE IF EXISTS MigrationsScript;
DELIMITER //
CREATE PROCEDURE MigrationsScript()
BEGIN
    IF NOT EXISTS(SELECT 1 FROM `__EFMigrationsHistory` WHERE `MigrationId` = '20220602021127_initial') THEN

    CREATE UNIQUE INDEX `IX_Project_Hash` ON `Project` (`Hash`);

    END IF;
END //
DELIMITER ;
CALL MigrationsScript();
DROP PROCEDURE MigrationsScript;


DROP PROCEDURE IF EXISTS MigrationsScript;
DELIMITER //
CREATE PROCEDURE MigrationsScript()
BEGIN
    IF NOT EXISTS(SELECT 1 FROM `__EFMigrationsHistory` WHERE `MigrationId` = '20220602021127_initial') THEN

    CREATE INDEX `IX_ProjectEmployee_Employee` ON `ProjectEmployee` (`Employee`);

    END IF;
END //
DELIMITER ;
CALL MigrationsScript();
DROP PROCEDURE MigrationsScript;


DROP PROCEDURE IF EXISTS MigrationsScript;
DELIMITER //
CREATE PROCEDURE MigrationsScript()
BEGIN
    IF NOT EXISTS(SELECT 1 FROM `__EFMigrationsHistory` WHERE `MigrationId` = '20220602021127_initial') THEN

    CREATE UNIQUE INDEX `IX_ProjectEmployee_Hash` ON `ProjectEmployee` (`Hash`);

    END IF;
END //
DELIMITER ;
CALL MigrationsScript();
DROP PROCEDURE MigrationsScript;


DROP PROCEDURE IF EXISTS MigrationsScript;
DELIMITER //
CREATE PROCEDURE MigrationsScript()
BEGIN
    IF NOT EXISTS(SELECT 1 FROM `__EFMigrationsHistory` WHERE `MigrationId` = '20220602021127_initial') THEN

    CREATE INDEX `IX_ProjectEmployee_Project` ON `ProjectEmployee` (`Project`);

    END IF;
END //
DELIMITER ;
CALL MigrationsScript();
DROP PROCEDURE MigrationsScript;


DROP PROCEDURE IF EXISTS MigrationsScript;
DELIMITER //
CREATE PROCEDURE MigrationsScript()
BEGIN
    IF NOT EXISTS(SELECT 1 FROM `__EFMigrationsHistory` WHERE `MigrationId` = '20220602021127_initial') THEN

    INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
    VALUES ('20220602021127_initial', '5.0.7');

    END IF;
END //
DELIMITER ;
CALL MigrationsScript();
DROP PROCEDURE MigrationsScript;

COMMIT;

