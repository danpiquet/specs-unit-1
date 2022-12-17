import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Square from "./Square";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);
  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""]);
    setPlayer(true);
  };

  const calculateWinner = (arr) => {
    const lines = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        //added a timer to automatically clear the board after 5 seconds. Tried to figure out how to render a countdown timer but went down a deep rabbit hole that I never found the bottom of.
        setTimeout(() => {
          handleClick();
        }, 5000);

        return arr.includes("POOP")
          ? "Lame...nobody wins. Click reset or I'll do it for you"
          : `${arr[a]}'s won the game! Board will reset in 5 seconds`;
        // return `${arr[a]}'s won the game! Board will reset in 5 seconds`;
      } else if (!arr.includes("")) {
        setTimeout(() => {
          handleClick();
        }, 5000);
        setSquares([
          "POOP",
          "POOP",
          "POOP",
          "POOP",
          "POOP",
          "POOP",
          "POOP",
          "POOP",
          "POOP",
        ]);
      }
    }
    return "Who will win?";

    // couldn't quite get the forEach() to work here

    //   lines.forEach((el, index) => {
    //     const [a, b, c] = lines[index];
    //     console.log(el, index)
    //     if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
    //       return `${arr[a]} won the game!`;
    //     }
    //   });
    //   return "Who will win?";
  };

  return (
    <div className="App">
      <span>{calculateWinner(squares)}</span>
      <div className="container">
        {squares.map((val, index) => {
          return (
            <Square
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
              squareValue={val}
              index={index}
            />
          );
        })}
      </div>
      <button onClick={() => handleClick()}>Reset</button>
      <br />
      <br />
    </div>
  );
}

export default App;
