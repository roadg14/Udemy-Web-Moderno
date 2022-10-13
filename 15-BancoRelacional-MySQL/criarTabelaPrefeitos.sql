CREATE TABLE IF NOT EXISTS prefeitos ( -- if not exists -> Crie a tabela se ela não existir.
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cidade_id INT UNSIGNED,
    PRIMARY KEY (id),
    UNIQUE KEY (cidade_id), -- unique key -> vai dizer que não vai receber Duplicação em cidade e id.
    FOREIGN KEY (cidade_id) REFERENCES cidades (id) -- References é para já da referenciar com oque o id vai fazer ligação.
);

select * from prefeitos