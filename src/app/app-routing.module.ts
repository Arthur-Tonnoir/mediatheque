import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NotFoundComponent } from './_commons/not-found/not-found.component';

const routes: Routes = [
  //Permet de redigirer vers la page home si rien n'est indiquer dans l'URL
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  //Indique les pages home et products
  {path: 'home', component: HomePageComponent},
  {path: 'products', component: ProductPageComponent},

  //Indique la page 404 quand il ne trouve pas la page
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
