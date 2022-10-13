select -- Fazendo uma tabela com todas as regiões somando elas.
    regiao as 'Região',
    sum(populacao) as Total -- sum -> é uma função de Soma. / Vai soma a população.
from estados
group by regiao -- group by -> ele agrupar / E vai agrupar por regiao.
order by Total desc

select -- Aqui vai fazzer a soma - de toda a população.
    sum(populacao) as Total
from estados

select -- Aqui vai fazzer a soma - de toda a população.
    avg(populacao) as Total --  AVG -> diz a media dividindo pela quantidade.
from estados