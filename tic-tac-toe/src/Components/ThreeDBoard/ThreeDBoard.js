import React, { Component } from 'react';
import Square from '../Square/square';
import classes from './ThreeDboard.module.css';

const ThreeDBoard = (props) => {
	return (
		<div>
			<div className={classes.boardRow1}>
				{Array.from(Array(4), (_, i) => i).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
			<div className={classes.boardRow2}>
				{Array.from(Array(4), (_, i) => i + 4).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
			<div className={classes.boardRow3}>
				{Array.from(Array(4), (_, i) => i + 8).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
			<div className={classes.boardRow3}>
				{Array.from(Array(4), (_, i) => i + 12).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
			<br />
			<br />
			<div className={classes.boardRow1}>
				{Array.from(Array(4), (_, i) => i + 16).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
			<div className={classes.boardRow2}>
				{Array.from(Array(4), (_, i) => i + 20).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
			<div className={classes.boardRow3}>
				{Array.from(Array(4), (_, i) => i + 24).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
			<div className={classes.boardRow3}>
				{Array.from(Array(4), (_, i) => i + 28).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
			<br />
			<br />
			<div className={classes.boardRow1}>
				{Array.from(Array(4), (_, i) => i + 32).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
			<div className={classes.boardRow2}>
				{Array.from(Array(4), (_, i) => i + 36).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
			<div className={classes.boardRow3}>
				{Array.from(Array(4), (_, i) => i + 40).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
			<div className={classes.boardRow3}>
				{Array.from(Array(4), (_, i) => i + 44).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
			<br />
			<br />
			<div className={classes.boardRow1}>
				{Array.from(Array(4), (_, i) => i + 48).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
			<div className={classes.boardRow2}>
				{Array.from(Array(4), (_, i) => i + 52).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
			<div className={classes.boardRow3}>
				{Array.from(Array(4), (_, i) => i + 56).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
			<div className={classes.boardRow3}>
				{Array.from(Array(4), (_, i) => i + 60).map((idx) => {
					return <Square key={idx} value={props.squares[idx]} onClick={() => props.onClick(idx)} />;
				})}
			</div>
			<br />
			<br />
		</div>
	);
};

export default ThreeDBoard;
