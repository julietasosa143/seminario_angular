import { Injectable } from '@angular/core';
import { Game } from './game-list/Game';
import {BehaviorSubject, Observable} from 'rxjs';
/**
 * maneja la logica del carrito
 */
@Injectable({
  providedIn: 'root'
})
export class GameCartService {
  constructor() { }

  private _cartList :Game []=[];
  public cartList :BehaviorSubject<Game[]>= new BehaviorSubject(this._cartList);




  addToCart(game: Game) {
    let item : Game | undefined= this._cartList.find((v1)=>v1.name== game.name);
    if(!item){
      this._cartList.push({ ...game});
    }else{
      item.quantity+= game.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }




}
