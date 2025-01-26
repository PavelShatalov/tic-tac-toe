/* eslint-disable react/prop-types */
function Square({ value, onSquareClick }) {
	return <button onClick={onSquareClick}>{value}</button>;
}
export default Square;
