import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
  inputNom = React.createRef();

  state = {
    id: 1
  };

  handleSubmit = event => {
    event.preventDefault(); // évite le rechargement de la page
    console.log(this.inputNom.current.value);
  };

  render() {
    return (
      <div className="App">
        <h3>Gérer un formulaire avec react.</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            ref={this.inputNom}
            type="text"
            name="name"
            placeholder="Entrez votre nom"
          />
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
