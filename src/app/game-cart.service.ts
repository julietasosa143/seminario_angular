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

  //Lista de juegos del carrito
  private _cart :Game []=[];
  private _cartList :BehaviorSubject<Game[]>= new BehaviorSubject(this._cart);
  public cartList$ = this._cartList.asObservable();
  //Lista de juegos disponibles
  private _gamelist : Game[] =[
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
  ];

  private _games :BehaviorSubject<Game[]>= new BehaviorSubject(this._gamelist);
  public games$ = this._games.asObservable();



  //Agregar a carrito
  addToCart(game:Game):void{
    let item = this._cart.find(v1=>v1.name==game.name);
    if(!item){
      this._cart.push({...game});
    }else{
      item.quantity+=game.quantity;
    }
    game.stock-= game.quantity;
    game.quantity=0;
    this._games.next(this._gamelist);
    this._cartList.next(this._cart);
  }
  //Eliminar de carrito
  deleteFromCart( gToRemove :Game):void{
    //me fijo si lo tengo en mi lista
    const gameInList = this._gamelist.find(g=>g.name==gToRemove.name);
    if(gameInList){
      //hago que al stock del juego de mi lista se le agregue el que estaba en el carrito
      gameInList.stock+=gToRemove.quantity;
    }
    //por si no lo encuentra en la lista aunque eso es creo que imposible
    this._cart = this._cart.filter(g=>g.name!== gToRemove.name);

    this._cartList.next(this._cart);
    this._games.next(this._gamelist);

  }

  //Vaciar carrito entero 
  clearCart():void{
    this._cart.forEach(game => {
      this.deleteFromCart(game);
    });

  }
  




}
