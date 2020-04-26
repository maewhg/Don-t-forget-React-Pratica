import React from 'react'

import Membro from './Membro'

export default props => 
    <div>
        <Membro nome="Rafael" sobrenome={props.sobrenome} />
        <Membro nome="Rafaela" sobrenome={props.sobrenome} />
        <Membro nome="Raphael" sobrenome={props.sobrenome} />
        <Membro nome="Raphaela" sobrenome={props.sobrenome} />
    </div>