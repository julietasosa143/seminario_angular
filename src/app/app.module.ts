import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { CartComponent } from './cart/cart.component';
import { TokensAndTreasuresComponent } from './tokens-and-treasures/tokens-and-treasures.component';
import { AboutTokensAndTreasuresComponent } from './about-tokens-and-treasures/about-tokens-and-treasures.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    CartComponent,
    TokensAndTreasuresComponent,
    AboutTokensAndTreasuresComponent,
    InputIntegerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
