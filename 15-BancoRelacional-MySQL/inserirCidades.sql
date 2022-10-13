select * from estados where id = '17'

insert into cidades (nome, area, estado_id) -- Vinculando as cidades ao id de casa regiao.
values ('Recife', 799, 17)

insert into cidades (nome, area, estado_id)
values ('Niterói', 133.9, 19)

insert into cidades (nome, area, estado_id) -- Vinculando as cidades ao id de casa regiao. e esse aqui é com a Sigla.
values ('São Caetano do Sul', 200.6, (select id from estados where sigla = 'SP'))

insert into cidades (nome, area, estado_id)
values ('Juazeiro do Norte', 248.2, (select id from estados where sigla = 'CE'))

select * from cidades 