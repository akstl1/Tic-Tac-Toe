import React from 'react';
import Square from '../Square/square';
import classes from './basicboard.module.css';

const BasicBoard = (props) => {
	return (
		<div>
			<div className={classes.boardRow1}>
				{Array.from(Array(3), (_, i) => i).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
			<div className={classes.boardRow2}>
				{Array.from(Array(3), (_, i) => i + 3).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
			<div className={classes.boardRow3}>
				{Array.from(Array(3), (_, i) => i + 6).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
		</div>
	);
};

export default BasicBoard;
