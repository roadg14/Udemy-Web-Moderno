-- Adicionando um novo estados. Como adicionar
insert into estados (id, nome, sigla, regiao, populacao)
values (1000, 'Novo', 'NV', 'Norte', 2.39)

insert into estados (nome, sigla, regiao, populacao) -- Fazendo um insert colocando um novo estado so que sem o ID.
values ('Mais Novo', 'MN', 'Nordeste', 2.29)
-- Memso não colocando o id, o proprio banco já coloca um id novo sem que precise já informar.

select * from estados