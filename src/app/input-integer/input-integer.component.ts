import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit{
  constructor(){}

  @Input() 
  quantity!: number;
  @Input()
  max!:number;
  @Output()
  quantityChange : EventEmitter<number>= new EventEmitter<number>();


  ngOnInit():void{}

  upQuantity():void{
    if(this.max>this.quantity){
    this.quantity++;
    this.quantityChange.emit(this.quantity);
    }
  }
  lowerQuantity():void{
    if(this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  changeQuantity(): void{
    if (!this.quantity || isNaN(this.quantity)) {
      this.quantity = 0;
      this.quantityChange.emit(this.quantity);
    } else if (this.quantity > this.max) {
      this.quantity = this.max;
      this.quantityChange.emit(this.quantity);
    } else if (this.quantity < 0) {
      this.quantity = 0;
      this.quantityChange.emit(this.quantity);
    }
  
  }
}