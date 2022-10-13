CREATE TABLE IF NOT EXISTS cidades ( -- if not exists -> Crie a tabela se ela não existir.
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id INT UNSIGNED NOT NULL, -- estado_id -> combcache é uma forma de apreviar. / Uma cidade vai ter obrigatorio um estado.
    area DECIMAL(10,2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) REFERENCES estados (id) -- foreing key -> é uma chave estrangeira, que no caso estado, sempre vai esta vinculado ao cidade. 
);

-- CREATE TABLE IF NOT EXISTS teste (
--    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
-- );

-- DROP TABLE IF EXISTS teste; -- drop -> ele retira uma tabela que ja foi criada!.
