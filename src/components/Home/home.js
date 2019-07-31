import React from 'react';
import styles from './estilo.module.css';
import img from '../../img/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Pesquisa: ""
        }
    };
    ChamarPag(e){
        const { Pesquisa } = this.state;
        if(Pesquisa !== ""){ // Condição para não entar vazio na busca;
            e.preventDefault();
            this.props.history.push(`/search/${Pesquisa}`)
        }else{
            e.preventDefault();
            this.props.history.push(`/`)
        }
    };
    render(){
        return(
            <div className={styles.CampoTotal}>
                <div className="CampoConteudo">
                    <img src={img} alt="" name="logosw" className={styles.LogoSw}/>
                    <form>
                        <div className="ConteudoTexto">
                            <input name="campo-de-pesquisa" className={styles.campoDePesquisa} type="text" size="50" placeholder="Buscar..." autoComplete="off"
                               autoFocus value={this.state.Pesquisa} onChange={e => this.setState({ Pesquisa: e.target.value })}></input>
                        </div>
                        <div className={styles.DoBotao}>
                            <button id="botao"  className="btn btn-warning" onClick={($event) => this.ChamarPag($event)}>Buscar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    };
}

export default Home;
//autofocus para ao entrar na pagina o input estará selecionado;
// placeholder Mensagem para tranparente no input;
// autocomplete Para não aparecer o historico da pesquisa;
// onchange para mudar o estado de Pesquisa;
// size é o comprimento do input, altura no css;

