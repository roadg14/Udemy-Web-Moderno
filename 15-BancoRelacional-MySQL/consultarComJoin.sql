-- select e.nome, c.nome, regiao from estados e, cidades c -- Chamando todos de uma vez Tanto estados, cidades e siglas.
-- where e.id = c.estado_id;
SELECT * from estados e, cidades c 
where e.id = c.estado_id;

SELECT -- Informa o estado a cidade, e onde fica a região.
    e.nome as Estado,
    c.nome as Cidade,
    e.regiao as Região
from estados e, cidades c 
where e.id = c.estado_id;

-- filtra colunas que devem ser iguais
SELECT
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
from estados e
inner join cidades c on e.id = c.estado_id 
-- filtra colunas que devem ser iguais