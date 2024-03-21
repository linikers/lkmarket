import {
  IconButton,
  List,
  ListItem,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import ListaDeProdutos from "../assets/produtos";
import { Produto } from "./CardProduct";
import {
  AddCircleOutlineOutlined,
  RemoveCircleOutline,
} from "@mui/icons-material";

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
            <Typography variant="body1">{produto.nome}</Typography>
            <IconButton
              disableFocusRipple
              disableRipple
              sx={{
                color: "white",
                border: "none",
                "&:hover, &:focus, &.Mui-focusVisible": {
                  backgroundColor: "transparent",
                  outline: "none",
                },
              }}
            >
              <AddCircleOutlineOutlined />
            </IconButton>
            <IconButton
              disableFocusRipple
              disableRipple
              sx={{
                color: "white",
                border: "none",
                "&:hover, &:focus, &.Mui-focusVisible": {
                  backgroundColor: "transparent",
                  outline: "none",
                },
              }}
            >
              <RemoveCircleOutline
                sx={{
                  color: "white",
                  "&:hover, &:focus, &.Mui-focusVisible": {
                    backgroundColor: "transparent",
                    outline: "none",
                  },
                }}
              />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </ThemeProvider>
  );
}
