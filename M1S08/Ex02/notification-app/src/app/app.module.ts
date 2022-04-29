import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './paginas/home/home.component';
import { ComidasComponent } from './paginas/Comidas/comidas/comidas.component';
import { BebidasComponent } from './paginas/Bebidas/bebidas/bebidas.component';
import { CardapioComponent } from './paginas/Cardapio/cardapio/cardapio.component';
import { ContatoComponent } from './paginas/Contato/contato/contato.component';
import { CardBebidasComponent } from './components/card-bebidas/card-bebidas.component';
import { CardsComponent } from './components/cards/cards.component';
import { ListaItemComponent } from './components/lista-item/lista-item.component';


const ROUTES: Route[] = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'comidas',
    component:ComidasComponent
  },

  {
    path: 'bebidas',
    component:BebidasComponent
  },

  {
    path: 'cardapio',
    component:CardapioComponent
  },

  {
    path: 'contato',
    component:ContatoComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    ComidasComponent,
    BebidasComponent,
    CardapioComponent,
    ContatoComponent,
    CardBebidasComponent,
    CardsComponent,
    ListaItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }