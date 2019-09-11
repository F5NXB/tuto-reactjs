import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  handleClick_1 = () => {
    console.log("Click_1");
  };

  handleClick_2() {
    console.log("Click_2");
  }

  render() {
    return (
      <div className="container">
        <p>Première méthode</p>
        <button onClick={this.handleClick_1}>Cliquez ici</button>
        <p>Deuxième méthode</p>
        <button onClick={this.handleClick_2.bind(this)}>Cliquez ici</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
