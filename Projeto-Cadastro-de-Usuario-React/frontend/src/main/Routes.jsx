import React from 'react'
import { Routes ,Route } from 'react-router-dom' // Essa é o import da nova depencia não vai se utilizar mais o Switchs. 
// Redirect -> Acho aconteça alguma coisa o Redirect vai direcionar para o link direto.

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props => // Fazendo a configurações de Rotas.
    <Routes>
        {/* exact -> navegará p/ Home se for exatamente '/',
         pois demais path's também possuem '/' */}
        <Route exact path='/' element={<Home/>} /> {/* Digitar o a / vai para o Homer*/}
        <Route path='/users' element={<UserCrud/>} /> {/* E digitando /users e direcionar para os usuarios.*/}
        <Route path='*' element={<Home/>} />  {/*Em casa de qualquer outra URL for digitada o "to='/'" -> vai direcionar para o path='/' que é o mesmo direcionamento do Home. */} 
    </Routes>