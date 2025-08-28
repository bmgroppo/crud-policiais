CREATE DATABASE IF NOT EXISTS CRUD_policiais;
USE CRUD_policiais;

DROP TABLE IF EXISTS policiais;

CREATE TABLE IF NOT EXISTS policiais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rg_civil VARCHAR(20) NOT NULL UNIQUE,
    rg_militar VARCHAR(20) NOT NULL UNIQUE,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    data_nascimento VARCHAR(20) NOT NULL,
    matricula VARCHAR(255) NOT NULL
);

INSERT INTO policiais (rg_civil, rg_militar, cpf, data_nascimento, matricula) VALUES
('12.345.678-9', '12345', '111.222.333-44', '1985-05-10', '001'),
('98.765.432-1', '54321', '555.666.777-88', '1990-11-22', '002'),
('10.203.040-5', '67890', '999.888.777-66', '1988-01-15', '003');
