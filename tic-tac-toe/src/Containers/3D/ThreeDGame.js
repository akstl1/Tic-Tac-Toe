import { React, Component } from 'react';
import classes from './ThreeDGame.module.css';
import Square from '../../Components/Square/square';
import ThreeDBoard from '../../Components/ThreeDBoard/ThreeDBoard';
import _ from 'lodash';

class ThreeDGame extends Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [
				{
					squares: Array(64).fill(null)
				}
			],
			stepNumber: 0,
			xIsNext: true
		};
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if (this.calculateWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			history: history.concat([
				{
					squares: squares
				}
			]),
			stepNumber: history.length,
			xIsNext: !this.state.xIsNext
		});
	}

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: step % 2 === 0
		});
	}

	calculateWinner(squares) {
		const lines = [
			// same tier, left to right
			_.range(0, 4),
			_.range(4, 8),
			_.range(8, 12),
			_.range(12, 16),
			_.range(16, 20),
			_.range(20, 24),
			_.range(24, 28),
			_.range(28, 32),
			_.range(32, 36),
			_.range(36, 40),
			_.range(40, 44),
			_.range(44, 48),
			_.range(48, 52),
			_.range(52, 56),
			_.range(56, 60),
			_.range(60, 64),
			// same tier, top to bottom
			_.range(0, 16, 4),
			_.range(1, 17, 4),
			_.range(2, 18, 4),
			_.range(3, 19, 4),
			_.range(16, 32, 4),
			_.range(17, 33, 4),
			_.range(18, 34, 4),
			_.range(19, 35, 4),
			_.range(32, 48, 4),
			_.range(33, 49, 4),
			_.range(34, 51, 4),
			_.range(35, 51, 4),
			_.range(48, 64, 4),
			_.range(49, 65, 4),
			_.range(50, 66, 4),
			_.range(51, 67, 4),
			// top to bottom, straight
			_.range(0, 64, 16),
			_.range(1, 65, 16),
			_.range(2, 66, 16),
			_.range(3, 67, 16),
			_.range(4, 68, 16),
			_.range(5, 69, 16),
			_.range(6, 70, 16),
			_.range(7, 71, 16),
			_.range(8, 72, 16),
			_.range(9, 73, 16),
			_.range(10, 74, 16),
			_.range(11, 75, 16),
			_.range(12, 76, 16),
			_.range(13, 77, 16),
			_.range(14, 78, 16),
			_.range(15, 79, 16),
			// diagonal, starting at top tier top row and keeping in same column (top to bottom)
			_.range(0, 80, 20),
			_.range(1, 81, 20),
			_.range(2, 82, 20),
			_.range(3, 83, 20),
			// diagonal, starting at top tier bottom row and keeping in same column (top to bottom)
			_.range(12, 60, 12),
			_.range(13, 61, 12),
			_.range(14, 62, 12),
			_.range(15, 63, 12),
			// diagonal, starting at top tier left col and going down to the right
			_.range(0, 68, 17),
			_.range(4, 69, 17),
			_.range(8, 70, 17),
			_.range(12, 71, 17),
			//diagonal, starting at top tier right col and going down to the left
			_.range(3, 63, 15),
			_.range(7, 64, 15),
			_.range(11, 65, 15),
			_.range(15, 66, 15),
			// corner to corner diagonal, across the tiers
			_.range(0, 84, 21),
			_.range(3, 79, 19),
			_.range(12, 64, 13),
			_.range(15, 59, 11),
			// corner to corner, same level
			_.range(0, 20, 5),
			_.range(3, 15, 3),
			_.range(16, 36, 5),
			_.range(19, 31, 3),
			_.range(32, 52, 5),
			_.range(35, 47, 3),
			_.range(48, 68, 5),
			_.range(51, 63, 3)
		];
		for (let i = 0; i < lines.length; i++) {
			const [ a, b, c, d ] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
				return squares[a];
			}
		}
		return null;
	}

	renderSquare(i) {
		return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
	}

	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = this.calculateWinner(current.squares);

		const moves = history.map((step, move) => {
			const desc = move ? 'Go to move #' + move : 'Go to game start';
			return (
				<p key={move}>
					<button className={classes.history} onClick={() => this.jumpTo(move)}>
						{desc}
					</button>
				</p>
			);
		});
		let status;
		if (winner) {
			status = 'Winner: ' + winner;
		} else {
			status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		}

		return (
			<div className={classes.game}>
				<div className={classes.gameBoard}>
					<ThreeDBoard
						squares={current.squares}
						onClick={(i) => this.handleClick(i)}
						renderSquare={(i) => this.renderSquare(i)}
					/>
				</div>
				<div className={classes.gameInfo}>
					<div className={classes.status}>{status}</div>
					<ol>{moves}</ol>
				</div>
			</div>
		);
	}
}

export default ThreeDGame;
