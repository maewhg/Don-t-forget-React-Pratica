import React from 'react'

//Como retornar MULTIPLOS ELEMENTOS sem erros?

// Solução 3 - Array de componentes
 export default props => [ <h1>Parte 1</h1>,
    <h2>Parte 2</h2>]

// Solução 2 - React.Fragment é uma div imaginaria
// export default props => 
// <React.Fragment>
// <h1>Parte 1</h1>
// <h2>Parte 2</h2>
// </React.Fragment>

// Solução 1 - Envolver as tags com uma div para não dar erro (Mais usada)
// export default props =>
// <div><h1>Parte 1</h1>
// <h2>Parte 2</h2></div>
