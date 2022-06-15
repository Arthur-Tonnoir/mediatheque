import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ANgular Material
import {MatCardModule} from '@angular/material/card'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './_commons/not-found/not-found.component';
import { FooterComponent } from './_commons/footer/footer.component';
import { NavBarComponent } from './_commons/nav-bar/nav-bar.component';
import { NavFoundComponent } from './_commons/nav-found/nav-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductCardComponent } from './pages/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FooterComponent,
    NavBarComponent,
    NavFoundComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
