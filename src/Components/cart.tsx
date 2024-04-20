import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

import { Produto } from "./CardProduct";
import {
  AddCircleOutlineOutlined,
  RemoveCircleOutline,
} from "@mui/icons-material";
import { useState } from "react";
import saveUserData, { IUser } from "./saveData";

interface ICartItens {
  cartItens: Produto[];
  onAddCart: (produto: Produto) => void;
  onRemoverCart: (produto: Produto) => void;
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

export default function CartBox({
  cartItens,
  onAddCart,
  onRemoverCart,
}: ICartItens): JSX.Element {
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const qtdPorItem: { [key: string]: number } = {};

  cartItens.forEach((produto) => {
    if (qtdPorItem[produto.nome]) {
      qtdPorItem[produto.nome]++;
    } else {
      qtdPorItem[produto.nome] = 1;
    }
  });

  const totalCompra = cartItens.reduce(
    (total, produto) => total + produto.preco,
    0
  );

  return (
    <ThemeProvider theme={themeCart}>
      <Typography variant="h5">Carrinho de compras</Typography>
      <List>
        {Object.keys(qtdPorItem).map((nomeProduto) => (
          <ListItem key={nomeProduto}>
            <div>
              <img
                src={
                  cartItens.find((item) => item.nome === nomeProduto)?.imgUrl
                }
                alt={nomeProduto}
              />
            </div>
            <Typography variant="body1">{nomeProduto}</Typography>
            <Typography
              variant="body1"
              sx={{ margin: "8px", textAlign: "center" }}
            >
              Quantidade: {qtdPorItem[nomeProduto]}
            </Typography>
            <IconButton
              disableFocusRipple
              disableRipple
              onClick={() => {
                const itemEncontrado = cartItens.find(
                  (item) => item.nome === nomeProduto
                );
                if (itemEncontrado) {
                  onAddCart(itemEncontrado);
                }
              }}
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
              onClick={() => {
                const itemEncontrado = cartItens.find(
                  (item) => item.nome === nomeProduto
                );
                if (itemEncontrado) {
                  onRemoverCart(itemEncontrado);
                }
              }}
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
      <Typography>Total: R$ {Number(totalCompra).toFixed(2)}</Typography>
      <Button onClick={() => setOpenDialog(true)}>Finalizar</Button>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle> Finalizar Compra</DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
