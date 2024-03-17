//import item1 from "../public/item1.jpeg";
import { Produto } from "../Components/CardProduct";

export default function ListaDeProdutos(): Produto[] {
  const produtos: Produto[] = [
    {
      nome: "Caneca do Batman",
      descricao: "Caneca decorativa do Batman.",
      imgUrl: "/item12.jpeg",
      preco: 19.99,
    },
    {
      nome: "Camiseta Star Wars",
      descricao: "Camiseta com estampa do Star Wars.",
      imgUrl: "/item1.jpeg",
      preco: 29.99,
    },
    {
      nome: "Boneco Funko Pop! Harry Potter",
      descricao: "Boneco colecionável do Harry Potter.",
      imgUrl: "/item2.jpeg",
      preco: 15.99,
    },
    {
      nome: "Poster de Game of Thrones",
      descricao: "Poster decorativo da série Game of Thrones.",
      imgUrl: "/item3.jpeg",
      preco: 9.99,
    },
    {
      nome: "Capa para Celular Homem de Ferro",
      descricao: "Capa para celular com tema do Homem de Ferro.",
      imgUrl: "/item4.jpeg",
      preco: 12.99,
    },
    {
      nome: "Chaveiro Pac-Man",
      descricao: "Chaveiro colecionável do Pac-Man.",
      imgUrl: "/item5.jpeg",
      preco: 6.99,
    },
    {
      nome: "Caneta Montblanc Star Trek",
      descricao: "Caneta esferográfica de luxo Star Trek.",
      imgUrl: "/item6.jpeg",
      preco: 49.99,
    },
    {
      nome: "Pôster de Super Mario",
      descricao: "Pôster decorativo do Super Mario Bros.",
      imgUrl: "/item7.jpeg",
      preco: 8.99,
    },
    {
      nome: "Mochila Harry Potter Hogwarts",
      descricao: "Mochila escolar com brasão de Hogwarts.",
      imgUrl: "/item8.jpeg",
      preco: 39.99,
    },
    {
      nome: "Luminária Darth Vader",
      descricao: "Luminária em formato de capacete do Darth Vader.",
      imgUrl: "/item9.jpeg",
      preco: 24.99,
    },
    {
      nome: "Caneca Pokémon",
      descricao: "Caneca temática dos Pokémon.",
      imgUrl: "/item10.jpeg",
      preco: 14.99,
    },
    {
      nome: "Miniatura DeLorean Back to the Future",
      descricao: "Miniatura do DeLorean da série De Volta para o Futuro.",
      imgUrl: "/item11.jpeg",
      preco: 34.99,
    },
  ];

  return produtos;
}
