import { CellInfo } from './cell/models/cellInfo';
import { Board } from './models/board';
import { Component } from '@angular/core';
import { State } from './models/state';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  board: Board = new Board();
  currentTurn: number = 0;
  playerHasWon: boolean = false;
  boardSize: number = 3;
  state = State;

  changeTurn(turn: number) {
    this.currentTurn = turn;
  }

  fillCell(cellInfo: CellInfo) {
    this.board.Cells[cellInfo.positionX][cellInfo.positionY] = cellInfo.state;
    this.checkForWin(cellInfo);
  }

  checkForWin(cellInfo: CellInfo) {
    this.checkColumns(cellInfo.positionY, cellInfo.state);
    this.checkRows(cellInfo.positionX, cellInfo.state);
    if (cellInfo.positionX == cellInfo.positionY)
      this.checkDiagonal(cellInfo.state);

    if (cellInfo.positionX + cellInfo.positionY == this.boardSize - 1)
      this.checkAntiDiagonal(cellInfo.state);
  }

  checkAntiDiagonal(state: State) {
    for (let i = 0; i < this.boardSize; i++) {
      if (this.board.Cells[i][this.boardSize - 1 - i] !== state) {
        return;
      }
      this.callWinner(i);
    }
  }

  checkDiagonal(state: State) {
    for (let i = 0; i < this.boardSize; i++) {
      if (this.board.Cells[i][i] !== state) {
        return;
      }
      this.callWinner(i);
    }
  }

  checkRows(x: number, state: State) {
    for (let i = 0; i < this.boardSize; i++) {
      if (this.board.Cells[x][i] !== state) {
        return;
      }
      this.callWinner(i);
    }
  }

  checkColumns(y: number, state: State) {
    for (let i = 0; i < this.boardSize; i++) {
      if (this.board.Cells[i][y] !== state) {
        return;
      }
      this.callWinner(i);
    }
  }

  callWinner(i: number) {
    if (i == this.boardSize - 1) {
      alert(`The winner: ${this.currentTurn === 0 ? 'X' : 'O'}`);
      this.playerHasWon = true;
    }
  }
}
