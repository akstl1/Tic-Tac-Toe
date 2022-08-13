import React from 'react';
import classes from './square.module.css';
const square = (props) => {
	return (
		<div>
			<button className={classes.square} onClick={props.onClick}>
				{props.value}
			</button>
		</div>
	);
};

export default square;
