import React, {Component} from 'react'

export default class Contador extends Component {

    // Solucao 1
    // constructor(props){
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this)
    // }
    // Solucao 2
    // <button onClick={()=> this.maisUm()}>Inc</button>
    // Solucao 3
    // maisUm = () => {
    //     // this.props.numero++
    //     console.log(this)
    // }

    state = {
        numero: 0
    }

    maisUm = () => {
        this.setState({numero: this.state.numero + 1})
    }
    menosUm = () => {
        this.setState({numero: this.state.numero - 1})
    }
    alterarNumero = diferenca => {
        this.setState({
            numero: this.state.numero + diferenca
        })
    }
    
    render(){
        return (
            <div>Numero: {this.state.numero}
            <button onClick={this.maisUm}>Inc</button>
            <button onClick={this.menosUm}>Dec</button>
            <button onClick={() => this.alterarNumero(10)}>+10</button>
            <button onClick={() => this.alterarNumero(-10)}>-10</button>
            </div>
        )
    }
}