import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import Card from "./card";
import "./app.scss";

const uniqueElementsArray = [
    {
        symbol: "One"
    },
    {
        symbol: "Two"
    },
    {
        symbol: "Three"
    },
    {
        symbol: "Four"
    },
    {
        symbol: "Five"
    },
    {
        symbol: "Six"
    }
];

export default function App() {
    const firstMoveCount = 0;

    const [cards, setCards] = useState([]);

    const [movesCount, setMovesCount] = useState(firstMoveCount);
    const [firstValue, setFirstValue] = useState(null);
    const [secondValue, setSecondValue] = useState(null);
    const [cardsAreDisabled, setCardsAreDisabled] = useState(false);
    const [bestScore, setBestScore] = useState(null);

    const restartClicked = () => {
        let value = localStorage.getItem("bestScore");

        if (value) {
            setBestScore(value);
        }

        const shuffleCards = [...uniqueElementsArray, ...uniqueElementsArray]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, isInactive: false }));

        setCards(shuffleCards);
        setFirstValue(null);
        setSecondValue(null);
        setMovesCount(firstMoveCount);
    };

    const onClick = (card) => {
        firstValue ? setSecondValue(card) : setFirstValue(card);
    };

    const resetValues = () => {
        setFirstValue(null);
        setSecondValue(null);
        setMovesCount(movesCount + 1);
        setCardsAreDisabled(false);
    };

    useEffect(() => {
        restartClicked();
    }, []);

    useEffect(() => {
        if (firstValue && secondValue) {
            setCardsAreDisabled(true);
            if (firstValue.symbol === secondValue.symbol) {
                setCards((prevCards) => {
                    return prevCards.map((card) => {
                        if (card.symbol === firstValue.symbol) {
                            return {
                                ...card,
                                isInactive: true
                            };
                        } else {
                            return card;
                        }
                    });
                });
                resetValues();
            } else {
                setTimeout(() => resetValues(), 1000);
            }
        }
    }, [firstValue, secondValue]);

    useEffect(() => {
        if (cards.length === 0) return;

        let card = cards.find((el) => el.isInactive === false);
        if (!card) {
            let realBestScore = Math.min(bestScore, movesCount);
            localStorage.setItem("bestScore", realBestScore);
            setBestScore(realBestScore);
            alert("you win");
        }
    }, [cards]);

    return (
        <div className="App">
            <header>
                <h3>Play the Flip card game</h3>
                <div>
                    Select two cards with same content consequtively to make them vanish
                </div>
            </header>
            <div className="container">
                {cards.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            card={card}
                            isFlipped={
                                card.isInactive || card === firstValue || card === secondValue
                            }
                            isInactive={card.isInactive}
                            isDisabled={cardsAreDisabled}
                            onClick={onClick}
                        />
                    );
                })}
            </div>
            <footer>
                <div className="score">
                    <div className="moves">
                        <span className="bold">Moves:</span> {movesCount}
                    </div>
                    {bestScore && (
                        <div className="high-score">
                            <span className="bold">Best Score:</span> {bestScore}
                        </div>
                    )}
                </div>
                <div className="restart">
                    <Button color="primary" variant="contained" onClick={restartClicked}>
                        Restart
                    </Button>
                </div>
            </footer>
        </div>
    );
}
