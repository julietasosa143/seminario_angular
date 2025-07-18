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
    this.cartList$=cart.cartList.asObservable();
  }
  ngOnInit():void{}

}
