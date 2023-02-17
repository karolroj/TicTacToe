import { State } from './../../models/state';
export class CellInfo {
  positionX : number = 0;
  positionY : number = 0;
  state : State = State.Blank;

  constructor(x : number, y : number, state: State) {
    this.positionX = x;
    this.positionY = y;
    this.state = state;
  }
}
