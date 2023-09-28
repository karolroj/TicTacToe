import { CellInfo } from './models/cellInfo';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { State } from '../models/state';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
})
export class CellComponent {
  @Input() turn: number = 0;
  @Input() id: number = 0;
  @Output() turnChange = new EventEmitter<number>();
  @Output() cellInfo = new EventEmitter<CellInfo>();

  markCell(event: any) {
    let cellInfo: CellInfo;
    let state = this.turn === 0 ? State.O : State.X;
    switch (this.id) {
      case 0:
        cellInfo = new CellInfo(0, 0, state);
        break;
      case 1:
        cellInfo = new CellInfo(0, 1, state);
        break;
      case 2:
        cellInfo = new CellInfo(0, 2, state);
        break;
      case 3:
        cellInfo = new CellInfo(1, 0, state);
        break;
      case 4:
        cellInfo = new CellInfo(1, 1, state);
        break;
      case 5:
        cellInfo = new CellInfo(1, 2, state);
        break;
      case 6:
        cellInfo = new CellInfo(2, 0, state);
        break;
      case 7:
        cellInfo = new CellInfo(2, 1, state);
        break;
      case 8:
        cellInfo = new CellInfo(2, 2, state);
        break;
      default:
        throw 'Index out of array.';
    }
    if (this.turn === 0) {
      event.innerHTML = 'O';
      this.turnChange.emit(1);
    } else {
      event.innerHTML = 'X';
      this.turnChange.emit(0);
    }
    event.disabled = true;
    this.cellInfo.emit(cellInfo);
  }
}
