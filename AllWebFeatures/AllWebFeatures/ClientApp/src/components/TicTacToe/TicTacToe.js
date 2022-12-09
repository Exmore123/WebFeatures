import React, { useState } from 'react';

const rowStyle = {
    display: 'flex'
}

const boxStyle = {
    'width': '60px',
    'height': '60px',
    'backgroundColor': '#ddd',
    'margin': '4px',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': '20px',
    'color': 'white'
}

const boardStyle = {
    'backgroundColor': '#eee',
    'widht': '208px',
    'alignItems': 'center',
    'justifyContent': 'center',
    'display': 'flex',
    'flexDirection': 'column',
    'border': '3px #eee solid'
}

const containerStyle = {
    'display': 'flex',
    'alignItems': 'center',
    'flexDirection': 'column'
}

const messageStyle = {
    'marginTop': '5px',
    'marginBottom': '5px',
    'fontWeight': 'bold',
    'fontSize': '16px'
}

const buttonStyle = {
    'marginTop': '15px',
    'marginBottom': '16px',
    'width': '80px',
    'height': '40px',
    'backgroundColor': '#8acaca',
    'color': 'white',
    'fontSize': '16px'
}

function Square(props) {    

    return (
        <button className="square" style={boxStyle} onClick={props.value ? () => { } : props.onClickFunction}>
            {props.value}
        </button>
    )
}

function Board() {

    const emptySquares = [null, null, null, null, null, null, null, null, null];
    const firstPlayer = 'X';
    const secondPlayer = 'O';
    const emptyWinner = 'None';
    const drawWinner = 'It\'s a draw';

    const [squares, setSquares] = useState(emptySquares);
    const [currentPlayer, setCurrentPlayer] = useState(firstPlayer);
    const [winner, setWinner] = useState(emptyWinner);

    const changeCurrentPlayer = () => {
        if (currentPlayer == firstPlayer)
            setCurrentPlayer(secondPlayer);
        else
            setCurrentPlayer(firstPlayer);
    }

    const markSquare = (number) => {
        let newSquares = [...squares];
        newSquares[number] = currentPlayer;
        setSquares(newSquares);

        let calcResult = calculateWinner(newSquares);
        if (calcResult) {
            setWinner(calcResult);
        }
    }

    const onSquareClick = (number) => {

        if (winner !== emptyWinner)
            return;

        markSquare(number);
        changeCurrentPlayer();        
    }

    const onResetClicked = () => {        
        setSquares(emptySquares);
        setCurrentPlayer(firstPlayer);
        setWinner(emptyWinner);
    }

    const calculateWinner = (squaresToCheck) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [x, y, z] = lines[i];
            if (squaresToCheck[x] && squaresToCheck[x] === squaresToCheck[y] && squaresToCheck[x] === squaresToCheck[z]) {
                return squaresToCheck[x];
            }
        }

        let anyResult = squaresToCheck.indexOf(null);
        if (anyResult === -1)
            return drawWinner;

        return null;
    }

    const renderSquare = (number) => {
        return <Square value={squares[number]} onClickFunction={() => { onSquareClick(number) }} />
    }    

    return (
        <div style={containerStyle} className="tttBoard" >
            <div id="statusArea" className="status" style={messageStyle}>
                Current player:
                <span>
                    {currentPlayer}
                </span>
            </div>
            <div id="winnerArea" className="winner" style={messageStyle}>
                Winner:
                <span>
                    {winner}
                </span>
            </div>
            <div style={boardStyle}>                
                <div className="board-row" style={rowStyle}>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row" style={rowStyle}>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row" style={rowStyle}>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <button style={buttonStyle} onClick={onResetClicked}>Reset</button>
        </div>
    )
}

export default function TicTacToe() {    

    return (        
        <div className="ttt">
            <div className="tttBoard">
                <Board />
            </div>
        </div>
    )
}