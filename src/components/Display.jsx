function Display({maskedWord, incorrectGuess, source, setDisabled, resetGame}) {
    
    return (
    <>
    <div className="display">
        <div className="word three"> 
            <h3>{maskedWord}</h3>
            <img className="hangman" src={require("" + source)} alt="The gallows"/>
        </div>
        <div className="lives">
            <h3>Guesses</h3>
            <h3>{incorrectGuess.length}/7</h3>
        </div>
    </div>
    <div className="incorrect">
        <div className="letters">
            <h3 className="one">Incorrect<br></br>Letters</h3>
            <div className="letter-box one">
            {incorrectGuess.map((letter) => <div className="one wrong-letters">{letter}</div>)}
            </div> 
        </div>
    </div>
    <div className="outcome"> 
    {incorrectGuess.length >= 7 ? <div><div>You Lost!</div><button className="gameover-button" onClick={resetGame}>Play again?</button> {setDisabled(true)}</div> : !maskedWord.includes("_") && <div><div>You Won!</div><button className="gameover-button" onClick={resetGame}>Play again?</button> {setDisabled(true)}</div>}
    </div>
    </>
    )
}

export default Display