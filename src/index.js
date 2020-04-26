import ReactDOM from 'react-dom'
import React from 'react'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import { compA, compB } from './componentes/DoisComponentes'
// import MultiComponentes from './componentes/MultiComponentes'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponeteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponeteClasse from './componentes/ComponenteClasse'
import Contador from './componentes/Contador'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Contador numero={0}/>
        {/* <ComponeteClasse valor="oi"/> */}
        {/* <Pai/> */}
        {/* <ComponeteComFuncao/> */}
        {/* <Familia sobrenome="Pereira">
            <Membro nome="Algusto"/>
            <Membro nome="Algusta" sobrenome="Pereira"/>
        </Familia> */}
        {/* <FamiliaSilva sobrenome="Silva"/> */}
        {/* <MultiComponentes/> */}
        {/* <PrimeiroComponente valor="Bom dia"/> */}
        {/* <compA valor="oi, eu sou o A"/>
        <compB valor="oi, eu sou o B"/> */}

    </div>
, elemento)