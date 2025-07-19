import { Component , OnInit,} from '@angular/core';
import { Observable } from 'rxjs';
import { GameCartService } from '../game-cart.service';
import {Game} from './Game'; 
@Component({
  selector: 'app-game-list',
  standalone: false,
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
}) 
export class GameListComponent implements OnInit{
  games$! :Observable<Game[]>;
 
  constructor(private games : GameCartService){ 
    this.games$ = this.games.games$;
  }
  ngOnInit():void{}
  
  addToCart(game:Game){
    this.games.addToCart(game);
    game.quantity=0;
  }

}
