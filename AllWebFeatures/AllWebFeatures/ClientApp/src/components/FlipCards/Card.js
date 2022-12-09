import React from "react";
import classnames from "classnames";
import "./card.scss";

const Card = ({ onClick, card, isInactive, isFlipped, isDisabled }) => {
    const handleClick = () => {
        !isFlipped && !isDisabled && onClick(card);
    };

    return (
        <div
            className={classnames("card", {
                "is-flipped": isFlipped,
                "is-inactive": isInactive
            })}
            onClick={handleClick}
        >
            <div className="card-face card-font-face">Face</div>
            <div className="card-face card-back-face">{card.symbol}</div>
        </div>
    );
};

export default Card;
