import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICardapio } from 'src/app/models/interface';

@Component({
  selector: 'ntf-card-bebidas',
  templateUrl: './card-bebidas.component.html',
  styleUrls: ['./card-bebidas.component.scss']
})
export class CardBebidasComponent  {

  bebidas: ICardapio[] = [] ;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
    .get<ICardapio[]>('http://localhost:3000/bebidas')
    .subscribe((resultado) => {
      this.bebidas = resultado;
    });
  }

}
