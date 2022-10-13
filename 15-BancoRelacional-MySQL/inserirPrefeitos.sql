-- Adicionando os Prefeitos.
-- Isso é uma relação de um para um.
INSERT INTO prefeitos (nome, cidade_id)
VALUES 
    ('João Henrique Campos', 1),
    ('Raquel Lyra', 2),
    ('Douglas Rodrigues', Null);

INSERT INTO prefeitos (nome, cidade_id)
VALUES
    ('Douglas Rodrigues', 7);

SELECT * FROM prefeitos