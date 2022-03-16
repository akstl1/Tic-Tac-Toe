# Tic Tac Toe App

When I attended the Missouri Scholar Academy during high school, I was introduced to 3D tic tac toe. Gameplay is similar to tic tac toe, but differs in that the grid is 4x4 and there are 4 such grids on top of each other in tiers. To win, you need to get 4 in a row either on one board or across the different tiers. For example, you could win by placing markers in the same grid position on all four tiers of the game.

Recently I remembered how much I enjoyed playing this game with my fellow scholars that summer, and wanted to re-create the game online. In this app, I first learned how to make a regular tic tac toe game using React. This portion of the app included normal gameplay and ability to go back to previous moves.

Next I expanded this to include a page with 3d tic tac toe gameplay and time travel / previous move ability.

In the future I would also like to include a section with ultimate tic tac toe. This version of the game has individual tic tac toe boards within each square of a normal board. To win a square of the overall board, you have to win the mini-board located within that square. After each player makes a move, the next player can only put their next marker in the board corresponding to the previous player's move. For example, if a player puts a marker in the center square, top left position of the mini-board therein the next player must put their next marker in the board within the top left square. When a player wins 3 squares in a row / diagonally on the overall board, they win.

## Starting the app

To start the app via React:
- clone this repo
- install all dependent packages
- type 'npm start' command in the terminal
- the app should then start on localhost:3000
