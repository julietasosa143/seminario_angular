import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../game-list/Game';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit{
  constructor(){}

  @Input() game! : Game;

  ngOnInit():void{}

  upQuantity(game: Game):void{
    if(game.stock>game.quantity){
    game.quantity++;
    }
  }
  lowerQuantity(game: Game):void{
    if(game.quantity>0){
      game.quantity--;
    }
  }
  changeQuantity(event:KeyboardEvent, game: Game): void{
    console.log(event.key);
  
  }
}