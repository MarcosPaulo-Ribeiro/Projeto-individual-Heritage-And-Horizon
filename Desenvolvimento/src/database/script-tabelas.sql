-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE projeto_carros;

USE projeto_carros;

CREATE USER 'usuarioInsert'@'%' IDENTIFIED BY 'Projeto#2026';

GRANT SELECT, INSERT, UPDATE, DELETE ON projeto_carros.* TO 'usuarioInsert'@'%';

FLUSH PRIVILEGES;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	nome VARCHAR(45),
	email VARCHAR(200),
	senha VARCHAR(45)
);

CREATE TABLE duvidas (
	idDuvida INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	titulo VARCHAR(45),
	pergunta VARCHAR(300),
	marca VARCHAR(20),
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

create table tentativa (
	idtentativa INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	acertos INT,
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);


