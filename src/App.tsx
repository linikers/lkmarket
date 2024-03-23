import "./App.css";
import { Container, Grid } from "@mui/material";
import Header from "./Components/Header";
import CardProduto, { Produto } from "./Components/CardProduct";
import ListaDeProdutos from "./assets/produtos";
import { useState } from "react";
import BoxFooter from "./Components/Footer";
import CartBox from "./Components/cart";

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [carrinhoItems, setCarrinhoItems] = useState<Produto[]>(null);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleAddCart = (produto: Produto) => {
    setCarrinhoItems((prevItens) => [...prevItens, produto]);
  };

  const handleRemoveCart = (index: number) => {
    setCarrinhoItems((prevItens) => {
      const newItens = [...prevItens];
      newItens.splice(index, 1);
      return newItens;
    });
  };

  const filtrarProdutos = searchTerm
    ? ListaDeProdutos().filter((produto: Produto) =>
        produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : ListaDeProdutos();

  return (
    <>
      <Header onSearch={handleSearch} />
      <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Grid container spacing={3}>
          {filtrarProdutos.map((produto: Produto) => (
            <Grid item xs={12} sm={6} md={4}>
              <CardProduto
                nome={produto.nome}
                descricao={produto.descricao}
                imgUrl={produto.imgUrl}
                preco={produto.preco}
                onAddCart={() => handleAddCart(produto)}
                onRemoverCart={() => handleRemoveCart(index)}
              />
            </Grid>
          ))}
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <CartBox onAddCart={carrinhoItems} onRemoveCart={handleRemoveCart} />
        </Grid>
      </Container>
      <BoxFooter />
    </>
  );
}
