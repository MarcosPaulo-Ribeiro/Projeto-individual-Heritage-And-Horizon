CREATE DATABASE HeritageHorizon;
USE HeritageHorizon;

CREATE TABLE usuario (
id INT NOT NULL,
nome VARCHAR(45) NOT NULL,
email VARCHAR(200) NOT NULL UNIQUE,
senha VARCHAR(45) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE tentativa (
id INT NOT NULL,
acertos INT NOT NULL,
erros INT NOT NULL,
tema VARCHAR(45) NOT NULL,
usuario_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

CREATE TABLE duvidas (
idDuvida INT NOT NULL,
titulo VARCHAR(45) NOT NULL,
pergunta VARCHAR(300) NOT NULL,
marca VARCHAR(20) NULL,
usuario_id INT NOT NULL,
PRIMARY KEY (idDuvida),
FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);