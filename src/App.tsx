import "./App.css";
import { Container, Grid } from "@mui/material";
import Header from "./Components/Header";
import CardProduto, { Produto } from "./Components/CardProduct";
import ListaDeProdutos from "./assets/produtos";

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={3}>
          {ListaDeProdutos().map((produto: Produto, index: number) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardProduto
                nome={produto.nome}
                descricao={produto.descricao}
                imgUrl={produto.imgUrl}
                preco={produto.preco}
                sx={{ height: "100%" }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
