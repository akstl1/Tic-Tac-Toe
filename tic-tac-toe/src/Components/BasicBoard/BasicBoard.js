import React, { Component } from 'react';
import Square from '../Square/square';
import classes from './basicboard.module.css';

const BasicBoard = (props) => {
	console.log(props);
	// const square = (props) => {
	//     return (
	//         <button className="square" onClick={props.onClick}>
	//             {props.value}
	//         </button>
	//     );
	// }
	// const renderSquare(i) {
	// 	return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
	// }

	return (
		<div>
			<div className={classes.boardRow1}>
				{<Square value={props.squares[0]} onClick={() => props.onClick(0)} />}
				{<Square value={props.squares[1]} onClick={() => props.onClick(1)} />}
				{<Square value={props.squares[2]} onClick={() => props.onClick(2)} />}
			</div>
			<div className={classes.boardRow1}>
				{/* {props.renderSquare(3)}
				{props.renderSquare(4)}
				{props.renderSquare(5)} */}
				{<Square value={props.squares[3]} onClick={() => props.onClick(3)} />}
				{<Square value={props.squares[4]} onClick={() => props.onClick(4)} />}
				{<Square value={props.squares[5]} onClick={() => props.onClick(5)} />}
			</div>
			<div className={classes.boardRow1}>
				{/* {props.renderSquare(6)}
				{props.renderSquare(7)}
				{props.renderSquare(8)} */}
				{<Square value={props.squares[6]} onClick={() => props.onClick(6)} />}
				{<Square value={props.squares[7]} onClick={() => props.onClick(7)} />}
				{<Square value={props.squares[8]} onClick={() => props.onClick(8)} />}
			</div>
		</div>
	);
};

export default BasicBoard;
