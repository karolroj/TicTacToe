import { CellInfo } from './cell/models/cellInfo';
import { Board } from './models/board';
import { AfterViewInit, Component } from '@angular/core';
import { State } from './models/state';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  board: Board;
  currentTurn: number = 0;
  private boardSize: number = 3;
  constructor() {
    this.board = new Board();
  }

  changeTurn(turn: number) {
    this.currentTurn = turn;
  }

  fillCell(cellInfo: CellInfo) {
    this.board.Cells[cellInfo.positionX][cellInfo.positionY] = cellInfo.state;
    this.checkForWin(cellInfo);
  }

  private checkForWin(cellInfo: CellInfo) {
    this.checkColumns(cellInfo.positionY, cellInfo.state);
    this.checkRows(cellInfo.positionX, cellInfo.state);
    if(cellInfo.positionX == cellInfo.positionY)
      this.checkDiagonal(cellInfo.state);

    if(cellInfo.positionX + cellInfo.positionY == this.boardSize - 1)
      this.checkAntiDiagonal(cellInfo.state);
  }

  checkAntiDiagonal(state : State) {
    for (let i = 0; i < this.boardSize; i++) {
      if (this.board.Cells[i][this.boardSize - 1 - i] !== state) {
        return;
      }
      this.callWinner(i);
    }
  }

  private checkDiagonal(state : State) {
    for (let i = 0; i < this.boardSize; i++) {
      if (this.board.Cells[i][i] !== state) {
        return;
      }
      this.callWinner(i);
    }
  }

  private checkRows(x: number, state: State) {
    for (let i = 0; i < this.boardSize; i++) {
      if (this.board.Cells[x][i] !== state) {
        return;
      }
      this.callWinner(i);
    }
  }

  private checkColumns(y: number, state: State) {
    for (let i = 0; i < this.boardSize; i++) {
      if (this.board.Cells[i][y] !== state) {
        return;
      }
      this.callWinner(i);
    }
  }

  private callWinner(i: number) {
    if (i == this.boardSize - 1) {

      alert('Winner');
    }
  }
}
