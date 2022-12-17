import React from "react";

const Square = (props) => {
  const handleClick = () => {
    if (!props.squareValue) {
      if (props.player) {
        props.squares.splice(props.index, 1, "X");
        props.setSquares(props.squares);
        props.setPlayer(!props.player);
      } else {
        props.squares.splice(props.index, 1, "O");
        props.setSquares(props.squares);
        props.setPlayer(!props.player);
      }
    }
  };
  //added custom O and X images and an image to handle the event of a tie with a double-nested ternary
  return (
    <div className="square" onClick={() => handleClick()}>
      {props.squareValue === "O" ? (
        <img src="https://i.ibb.co/fqJdjfp/O.png" alt="O" />
      ) : props.squareValue === "X" ? (
        <img src="https://i.ibb.co/jTN7qcs/X.png" alt="X" />
      ) : props.squareValue === "POOP" ? (
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c39c.png"
          alt="POOP"
        />
      ) : (
        props.squareValue
      )}
    </div>
  );
};

export default Square;
