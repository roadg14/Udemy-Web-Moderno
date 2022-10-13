select * from estados -- Fazendo uma Pesquisa no SQL

select nome, sigla from estados -- Chama fiz uma pesquisar só com nome e a sigla.

select nome, sigla as 'Nome do Estado' from estados -- AS -> ele faz com que voce possa coloca uma frase
where regiao = 'Sul' -- where -> é um filtro onde voce escolhe só oque quer por regiao ou locais.

select nome, regiao, populacao from estados
where populacao >= 10 -- where -> fazendo um filtro para os Paises maiores que 10 milhoes.
order by populacao desc -- order by -> ele organizar os nome de forma decrecente do maior para o menor.
-- desc -> ele usar a forma decrecente do menor para o maior
