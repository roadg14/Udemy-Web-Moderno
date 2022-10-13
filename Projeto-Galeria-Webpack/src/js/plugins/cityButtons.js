import $ from 'jquery' // Importa jQuery

import { onLoadHtmlSuccess } from '../core/includes' // Tem que importa dos arquivos includes.

const duration = 300 // Essa é a variavel para a Animação

function filterByCity(city) { // Fazendo cada cidade um botão.
    $('[wm-city]').each(function (i, e) { // Para wm-city que for encontrado.
        const isTarget = $(this).attr('wm-city') === city
            || city === null
        if (isTarget) {
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration) // se for a cidade ele da o fadeIn
        } else {
            $(this).fadeOut(duration, () => { // Se não for ele da o fadeOut
                $(this).parent().addClass('d-none')
            })
        }
    })
}

$.fn.cityButtons = function () {
    const cities = new Set // Esse set não vai deixar se repetir as class
    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city'))
    })

    const btns = Array.from(cities).map(city => { // Transformando as cidades em botões no caso as IMG
        const btn = $('<button>')
            .addClass(['btn', 'btn-dark']).html(city)
        btn.click(e => filterByCity(city))
        return btn
    })

    const btnAll = $('<button>') // Todos os bõtões
        .addClass(['btn', 'btn-dark', 'active']).html('Todas')
    btnAll.click(e => filterByCity(null))
    btns.push(btnAll)

    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)

    $(this).html(btnGroup)
    return this
}

onLoadHtmlSuccess(function() { // chamando a função
    $('[wm-city-buttons]').cityButtons()
})