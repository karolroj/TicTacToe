import { Component, destroyPlatform } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { Board } from './board/models/board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TicTacToe';

  reinitializeBoardComponent(){
    window.location.reload();
  }
}
