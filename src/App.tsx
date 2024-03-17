import "./App.css";
import { Container, Grid } from "@mui/material";
import Header from "./Components/Header";
import CardProduto, { Produto } from "./Components/CardProduct";
import ListaDeProdutos from "./assets/produtos";
import { useState } from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filtrarProdutos = searchTerm
    ? ListaDeProdutos().filter((produto: Produto) =>
        produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : ListaDeProdutos();

  return (
    <>
      <Header onSearch={handleSearch} />
      <Container>
        <Grid container spacing={3}>
          {filtrarProdutos.map((produto: Produto) => (
            <Grid item xs={12} sm={6} md={4}>
              <CardProduto
                nome={produto.nome}
                descricao={produto.descricao}
                imgUrl={produto.imgUrl}
                preco={produto.preco}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
