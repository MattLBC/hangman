import "./App.css";
import React from "react";
import Keyboard from "./components/Keyboard";
import Display from "./components/Display";
const listOfWords = require("./components/word-list");
let num = Math.floor(Math.random() * 210);

function App() {
  const [correctGuess, setCorrectGuess] = React.useState([]);
  const [incorrectGuess, setIncorrectGuess] = React.useState([]);
  const [disable, setDisabled] = React.useState(false);
  const word = listOfWords[num].toUpperCase();

  let maskedWord = word
    .split("")
    .map((letter) => (correctGuess.includes(letter) ? letter : "_"))
    .join(" ");

  const newChar = (event, char) => {
    if (word.includes(char)) {
      setCorrectGuess([...correctGuess, char]);
    } else {
      setIncorrectGuess([...incorrectGuess, char]);
    }
    event.target.disabled = true;
  };

  let source = "";
  if (incorrectGuess.length > 7) {
    source = "./hang-pics/7.png";
  } else {
    source = "./hang-pics/" + incorrectGuess.length + ".png";
  }

  const resetGame = () => {
    num = Math.floor(Math.random() * 210);
    setCorrectGuess([]);
    setIncorrectGuess([]);
    setDisabled(false);
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="title">Hangman</h1>
      </header>
      <main className="main">
        <Display
          maskedWord={maskedWord}
          incorrectGuess={incorrectGuess}
          source={source}
          setDisabled={setDisabled}
          resetGame={resetGame}
        />
        <Keyboard
          newChar={newChar}
          disable={disable}
          setDisabled={setDisabled}
        />
      </main>
    </div>
  );
}

export default App;
