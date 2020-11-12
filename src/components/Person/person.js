import React from "react";
import styles from "./pessoas.module.css";

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id, // Acessando o conteudo dentro da vaiavel do props
      isLoaded: false,
      error: null,
      results: {},
    };
  }
  componentDidMount() {
    this.ChamarNome(this.state.id);
  }
  ChamarNome(id) {
    fetch(`https://swapi.co/api/people/${id}/`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(
        (response) => {
          this.setState({ results: response, isLoaded: true });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, results } = this.state;
    if (error) {
      return <div className={styles.Aleet}>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className={styles.Aleet}>Carrengando . . .</div>;
    } else {
      return (
        <div>
          <div key={results.mass}>
            <a href="javascript:window.history.back()">
              <span className={styles.link}>X</span>
            </a>
            <div className={styles.Cnomes}>{results.name}</div>
            <div className={styles.Simbolos}>{results.name}</div>
          </div>
        </div>
      );
    }
  }
}
export default Person;
