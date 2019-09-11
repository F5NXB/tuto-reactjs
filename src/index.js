import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
  state = {
    id: 1
  };

  handleClick_1 = () => {
    console.log("Click_1");
  };

  handleClick_2() {
    console.log("Click_2");
  }

  handleClick_3 = id => {
    console.log("Click_3 id = " + id);
  };

  render() {
    return (
      <div className="App">
        <h3>
          Passer un gestionnaire d’événements (par exemple onClick) à un
          composant.
        </h3>
        <p>Première méthode : </p>
        <button onClick={this.handleClick_1}>Cliquez ici</button>
        <p>Deuxième méthode : </p>
        <button onClick={this.handleClick_2.bind(this)}>Cliquez ici</button>
        <h3>
          Passer un argument à un gestionnaire d’événements ou une fonction de
          rappel.
        </h3>
        state id = {this.state.id} <br />
        <p>Première méthode : </p>
        <button onClick={() => this.handleClick_3(this.state.id)}>
          Cliquez ici
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
