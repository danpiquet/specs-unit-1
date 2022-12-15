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
  return (
    <div className="square" onClick={() => handleClick()}>
      {props.squareValue === "O" ? (
        <img src="https://i.ibb.co/fqJdjfp/O.png" alt="O" />
      ) : (
        props.squareValue
      )}
      {/* {console.log(props.squares, props.player)} */}
    </div>
  );
};

{
  /* <a href="https://imgbb.com/"><img src="https://i.ibb.co/jTN7qcs/X.png" alt="X" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/fqJdjfp/O.png" alt="O" border="0"></a> */
}


export default Square;
