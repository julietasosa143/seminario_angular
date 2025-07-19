import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameCartService } from '../game-cart.service';
import { Game } from '../game-list/Game';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  cartList$ : Observable<Game[]>;
  constructor(private cart:GameCartService){
    this.cartList$=cart.cartList$;
  }
   
  ngOnInit():void{}

  deleteFromCart(game:Game){
    this.cart.deleteFromCart(game);
  }
  clearCart():void{
    this.cart.clearCart();
  }
  getTotal( cart:Game[]|null):number{
    if(!cart) return 0;
    return cart.reduce((sum,game)=>sum+ game.price * game.quantity, 0);
  }
}
