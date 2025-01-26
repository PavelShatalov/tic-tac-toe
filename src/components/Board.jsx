import { useState } from "react";
import Square from "./Square.jsx";
import { calculateWinner } from "./support.js";

function Board() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);

	const winner = calculateWinner(squares);
	const status = winner
		? `Winner: ${winner}`
		: `Next player: ${xIsNext ? "X" : "O"}`;

	function handleClick(index) {
		if (winner || squares[index]) return;

		setSquares((prevSquares) => {
			const nextSquares = [...prevSquares];
			nextSquares[index] = xIsNext ? "X" : "O";
			return nextSquares;
		});

		setXIsNext((prev) => !prev);
	}

	function handleReset() {
		setSquares(Array(9).fill(null));
		setXIsNext(true);
	}

	return (
		<>
			<div className="status">{status}</div>
			<button type="button" onClick={handleReset}>
				Reset
			</button>

			<div className="grid grid-cols-3 gap-2 w-fit mx-auto">
				{squares.map((value, index) => (
					<Square
						key={index}
						value={value}
						onSquareClick={() => handleClick(index)}
					/>
				))}
			</div>
		</>
	);
}

export default Board;
