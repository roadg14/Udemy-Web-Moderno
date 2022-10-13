export default function handler(req, res) { // Utilizar o req, res
    
    if(req.method === "GET") { // Em caso chamar GET ele vai mostrar, caso não seja um GET e sim POST ele vai mosta o erro.
        handlerGet(req, res)
    } else {
        res.status(495).send()
    }
}

function handlerGet(req, res) {
    res.status(200).json({ // Utilizando esse comnado ele vai responder no Postman. Podemos não monstrar nada usando o .send() usando o .json({}) é para postar no Postman.
        id: 1,
        nome: 'Douglas Rodrigues',
        idade: 25
    })
}