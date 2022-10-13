update estados -- update -> seleciona a tabela para atualizar.
set nome = 'Maranhão' -- set -> set vai saber qual atributo vai ser alterado.
where sigla = 'MA' -- where -> vai filtrar e selecionar pela sigla< para nâo fazer a mudança em todos so pelo nome>

select nome from estados where sigla = 'MA' -- Filtrando pelo nome e sigla.

update estados -- Mesma forma de atualizar serve tambem para os outros, população atualizou tambem
set nome = 'Paraná',
    populacao = 11.35
where sigla = 'PR'

select est.nome, sigla, populacao from estados est where sigla = "PR" -- Uma forma de tambem chamar usando est. -> que é um apelido para estados.