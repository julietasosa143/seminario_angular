import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutTokensAndTreasuresComponent } from './about-tokens-and-treasures/about-tokens-and-treasures.component';
import { TokensAndTreasuresComponent } from './tokens-and-treasures/tokens-and-treasures.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'games',
    pathMatch: "full"
  },
  {
    path : 'games', 
    component: TokensAndTreasuresComponent
  },
  {
    path :'about',
    component : AboutTokensAndTreasuresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
