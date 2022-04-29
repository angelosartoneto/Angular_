import { ICardapio } from "../models/interface";

export const BEBIDAS_MOCK: ICardapio[] = [
  {
    img:'https://source.unsplash.com/random/360x300/?soda',
    nome: "Refrigerante lt",
    descricao: "Coca-cola, Pepsi, Guaraná Antartica, Fanta Laranja, Fanta Uva",
    preco: 8,
  },
  {
    img:'https://source.unsplash.com/random/360x300/?juice',
    nome: "Suco Natural",
    descricao: "Morango, Uva, Manga, Larana, Limão, Abacaxi...",
    preco: 10,
  },
  {
    img:'https://source.unsplash.com/random/360x300/?beer',
    nome: "Cerveja Long Neck",
    descricao: "Stela Artois, Budweiser, Spaten, heineken",
    preco: 12,
  },
  {
    img:'https://source.unsplash.com/random/360x300/?cocktail',
    nome: "Drinks",
    descricao: "Caipirinha, Vodka, Wisky, Gin",
    preco: 21,
  },
];