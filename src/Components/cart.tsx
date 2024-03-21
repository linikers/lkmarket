import { List, ListItem, Typography } from "@mui/material";
import ListaDeProdutos from "../assets/produtos";
import { Produto } from "./CardProduct";

export interface ICart {
  nome: string;
  quantidade: number;
  imagem: string;
}

export default function CartBox(): JSX.Element {
  const produtos = ListaDeProdutos();
  return (
    <div>
      <Typography>Carrinho de compras</Typography>
      <List>
        {produtos.map((produto: Produto, index: number) => (
          <ListItem key={index}>
            <div>
              <img src={produto.imgUrl} alt={produto.nome} />
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
