export default function handler(req, res) { // Função que pega oque foi escrito na URL e coloca na resposta.
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Douglas ${codigo}`,
        email: `Douglasgcnigga${codigo}@gmail.nigga`
    })
}