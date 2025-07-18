import { Component , OnInit,} from '@angular/core';
import { GameCartService } from '../game-cart.service';
import {Game} from './Game'; 
@Component({
  selector: 'app-game-list',
  standalone: false,
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
}) 
export class GameListComponent implements OnInit{

  games : Game [] = [
  {
    name : "Zombiecide 2da Edicion",
    description: "Cooperativo Apocalíptico de Supervivencia con Zombis",
    price: 399000,
    stock: 3,
    originalStock:3,
    image: "assets/img/games/zombiecide.jpg",
    clearance: false,
    quantity: 0
  },
  {
    name : "Bunny Kingdom",
    description :"Estrategia Territorial de Fantasía Animal",
    price: 175000,
    stock : 0,
    originalStock:0,
    image: "assets/img/games/bunny_kingdom.jpg",
    clearance: false,
    quantity: 0
  },
  {
    name: "Glooomhaven",
    description: "Campaña epica de fantasia tactica",
    price: 160000,
    stock: 5,
    originalStock:5,
    image: "assets/img/games/gloomhaven.jpg",
    clearance: true,
    quantity: 0
  },
  {
    name: "Hero Quest",
    description: "Clasico dungeon crawler de fantasia heroica",
    price: 250000,
    stock: 3,
    originalStock:3,
    image: "assets/img/games/heroquest.jpg",
    clearance: false,
    quantity: 0
  }
  
]
  
constructor(private cart : GameCartService){ }
ngOnInit():void{
}
addToCart(game:Game):void{
  this.cart.addToCart(game);
  game.stock-= game.quantity;
  game.quantity=0;
}

}
