-- Criando Tabela Estados!
create table estados ( -- Criação da tabela.
    -- AUTO_INCREMENT -> uma chave sintetica, quando outros id's forem criando ele vai automaticamente vai gerndo os outros.
    id INT UNSIGNED NOT NULL AUTO_INCREMENT, -- INT -> pode dizer que ele tem um tamanho que voce quiser. // UNSIGNED -> VALOR SEM SINAL // AUTO_INCREMENT -> Ele é um valor que automaticamente se acrecentar. 
    nome VARCHAR(45) NOT NULL, -- NOT NULL -> Ele não receber valor nulo.
    sigla VARCHAR(2) NOT NULL, -- VARCHAR -> Vai dizer quantas possições você quer.
    regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL,
    populacao DECIMAL(5,2) NOT NULL,
    PRIMARY KEY (id), -- 'Primary key' a Chave primaria que não vai ser alterada.
    UNIQUE KEY (nome), -- 'Unique Key' -> é para não da dublicidade.
    UNIQUE KEY (sigla)
)