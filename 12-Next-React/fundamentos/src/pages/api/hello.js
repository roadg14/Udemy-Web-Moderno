// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// 20210707115413
// https://localhost:3000/api/hello?nome=Douglas&idade=25

export default function handler(req, res) {
  res.status(200).json({ 
    name: 'Douglas Rodrigues',
    metodo: req.method,
    nome: req.query.nome,
    idade: +req.query.idade
  })
}
