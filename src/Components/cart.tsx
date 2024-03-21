import {
  List,
  ListItem,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import ListaDeProdutos from "../assets/produtos";
import { Produto } from "./CardProduct";

export interface ICart {
  nome: string;
  quantidade: number;
  imagem: string;
}

const themeCart = createTheme({
  typography: {
    h5: {
      backgroundColor: "6a1b9a",
      color: "white",
      padding: "10px",
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          "& img": {
            maxWidth: "80px",
            maxHeight: "80px",
            borderRadius: "5px",
          },
        },
      },
    },
  },
});

export default function CartBox(): JSX.Element {
  const produtos = ListaDeProdutos();
  return (
    <ThemeProvider theme={themeCart}>
      <Typography variant="h5">Carrinho de compras</Typography>
      <List>
        {produtos.map((produto: Produto, index: number) => (
          <ListItem key={index}>
            <div>
              <img src={produto.imgUrl} alt={produto.nome} />
            </div>
          </ListItem>
        ))}
      </List>
    </ThemeProvider>
  );
}
