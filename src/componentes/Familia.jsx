import React from 'react'
import {FilhosComProps} from '../utils/utils'

export default props => 
    <div>
        <h1>Familia</h1>

        {FilhosComProps(props)}
        {/* {React.Children.map(props.children, child => {
            return React.cloneElement(child, {...props})
        })} */}
        {/* O exemplo abaixo so funciona se eu chamar um membro por vez, o exemplo acima resolve isso  */}
        {/* {React.cloneElement(props.children, {...props})} */}
        {/* {React.cloneElement(props.children, { sobrenome: props.sobrenome})} */}
        {/* {props.children} */}
    </div>