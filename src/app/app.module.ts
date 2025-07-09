import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { CartComponent } from './cart/cart.component';
import { TokensAndTreasuresComponent } from './tokens-and-treasures/tokens-and-treasures.component';
import { AboutTokensAndTreasuresComponent } from './about-tokens-and-treasures/about-tokens-and-treasures.component';


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    CartComponent,
    TokensAndTreasuresComponent,
    AboutTokensAndTreasuresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
