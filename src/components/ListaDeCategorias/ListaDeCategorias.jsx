import React from 'react';
import "./estilo.css"
class ListaDeCategorias extends React.Component {

    constructor(){
        super();
        this.state = {categorias:[]};
        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias});
    }

    _handleEventoInput(evento){
        if(evento.key === "Enter"){
            let nomeCategoria = evento.target.value;
            this.props.adicionarCategoria(nomeCategoria)
        }
    }

    render() { 
        return(
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categorias, index)=> {
                        return <li key ={index} className='lista-categorias_item'>{categorias}</li>;
                    })}
            </ul>
            <input 
                type="text" 
                className='lista-categorias_input' 
                placeholder='Adicionar Categoria'
                onKeyUp={this._handleEventoInput.bind(this)}
            />
            </section>

        );
    }
}
 
export default ListaDeCategorias;