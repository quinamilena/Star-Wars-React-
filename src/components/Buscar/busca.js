import React from 'react';
import styles from './e_busca.module.css';
import { Link } from 'react-router-dom';
import img from '../../img/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

class Busca extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Pesquisa: props.match.params.Pesquisa, // Acessando o conteudo dentro da vaiavel do props
            error: null,
            isLoaded: false,
            results: []
        }
    };
    componentDidMount(){ //Chamar a função ao entrar na pagina;
        this.pesquisar()
    };
    pesquisar(){
        fetch(`https://swapi.co/api/people/?search=${this.state.Pesquisa}`, {
            method : 'GET'
        })
        .then(res => res.json())
        .then((response) => {
            this.setState({ results: response.results, isLoaded: true}) // Passando o array de busca para o estado results;
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    };
    Atualiza(e){ // Para buscar de novo na pagina de busca;
        const { Pesquisa } = this.state;
        if(Pesquisa !== ""){
            e.preventDefault(); // Para a pagina não fivar atualizando;
            this.props.history.push(`/search/${Pesquisa}`)// Puxar a pagina de novo para fazer a requizição;
            this.pesquisar()
        }
    };
    render(){
        const { results, error, isLoaded } = this.state;
        if(error){ // Prevenção de erros
            return <div className={styles.Alet}>Error: {error.message}</div>;
        }else if (!isLoaded){ // Mostrar o carregando...
            return <div className={styles.Alet}>Carrengando . . .</div>;
        }else { // Etapa final;
            return(
            <div className={styles.Total}> {/* Barra de navegação, bootstrap */}
                <nav className="navbar navbar-expand-lg justify-content-between navb">
                        <Link to="/">
                            <img src={img} alt="" name="" className={styles.lBusca}/>{/* O Link que precisar importar, para a pagina anterior */}
                        </Link>
                        <div className="Area">{/* O campo de busca */}
                            <form className="form-inline">
                                <input type="text" className={styles.BInput} placeholder="Buscar..." size="30" autoComplete="off"
                                        value={this.state.Pesquisa} onChange={e => this.setState({ Pesquisa: e.target.value })} />
                                <button className="btn btn-warning" onClick={($event) => this.Atualiza($event)}>Buscar</button>                        
                            </form>
                        </div>
                </nav>
                <div>
                    {results.map(item =>{ // Mapiando os itens do array results
                        return(
                            <div className={styles.Resultados} key={item.url}>{/* item, como paramentro, e o valor desejando dentro do array */}
                                <Link to={`/person/${item.url.match(/\d+/g)[0]}/${item.name.replace(/[ ]/, '-')}`} className={styles.Rest}>
                                    <span>{item.name}</span>
                                </Link>
                                <br/><br/>
                                <div className={styles.Alt}>h:{item.height}</div>
                            </div>
                        )
                        })
                    }
                </div>
            </div>
            )
        }
    }
}

export default Busca;
// match para tratar o  valor da url, para numeros;
// replace para trocar o espaço pelo -; 