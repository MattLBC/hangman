function Keyboard({newChar, disable}) {
    return (
        <div className="keyboard">
            <div className="key-row">
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "Q")}}>Q</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "W")}}>W</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "E")}}>E</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "R")}}>R</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "T")}}>T</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "Y")}}>Y</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "U")}}>U</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "I")}}>I</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "O")}}>O</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "P")}}>P</button></div>
            </div>
            <div className="key-row">
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "A")}}>A</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "S")}}>S</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "D")}}>D</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "F")}}>F</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "G")}}>G</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "H")}}>H</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "J")}}>J</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "K")}}>K</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "L")}}>L</button></div>
            </div>
            <div className="key-row">
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "Z")}}>Z</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "X")}}>X</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "C")}}>C</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "V")}}>V</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "B")}}>B</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "N")}}>N</button></div>
                <div className="key one"><button className="keyboard-button" disabled={disable} onClick={(event) => {newChar(event, "M")}}>M</button></div>
            </div>
        </div>
    )
}

export default Keyboard