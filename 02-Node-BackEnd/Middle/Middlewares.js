// Middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => { // "ctx" => ele vai ser o objeto que vai receber alguma coisa. ctx é contexto
// O "next" => ele vai disparar para inicia a proxima atividade.
     ctx.valor1 = "mid1"
     next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = "mid2"
    next()
}

const passo3 = ctx=> ctx.valor3 = "mid3"

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx);

// Padrão de projeto que é um passo a passo, um só faz quando o outro receber algum problema.

