import { Component , OnInit, ViewEncapsulation} from '@angular/core';
import {Game} from './Game'
@Component({
  selector: 'app-game-list',
  standalone: false,
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  encapsulation: ViewEncapsulation.None
}) 
export class GameListComponent implements OnInit{

  games : Game [] = [
  {
    name : "Zombiecide 2da Edicion",
    description: "Cooperativo Apocalíptico de Supervivencia con Zombis",
    price: 399000,
    stock: 3,
    image: "assets/img/zombiecide.jpg",
    clearance: false,
    quantity: 0
  },
  {
    name : "Bunny Kingdom",
    description :"Estrategia Territorial de Fantasía Animal",
    price: 175000,
    stock : 0,
    image: "assets/img/bunny_kingdom.jpg",
    clearance: false,
    quantity: 0
  },
  {
    name: "Glooomhaven",
    description: "Campaña epica de fantasia tactica",
    price: 160000,
    stock: 5,
    image: "assets/img/gloomhaven.jpg",
    clearance: true,
    quantity: 0
  },
  {
    name: "Hero Quest",
    description: "Clasico dungeon crawler de fantasia heroica",
    price: 250000,
    stock: 3,
    image: "assets/img/heroquest.jpg",
    clearance: false,
    quantity: 0
  }
  
]
  
constructor(){  }
ngOnInit():void{
}
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
changeQuantity(event, game:Game):void {
  console.log(event.key);
}
}