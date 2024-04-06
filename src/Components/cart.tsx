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
import SaveDataFile, { IUser } from "./saveData";

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  //const [formFilled, setFormFilled] = useState(false);
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const totalCompra = cartItens.reduce(
    (total, produto) => total + produto.preco,
    0
  );
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={themeCart}>
      <Typography variant="h5">Carrinho de compras</Typography>
      <List>
        {cartItens.map((produto: Produto, index: number) => (
          <ListItem key={index}>
            <div>
              <img src={produto.imgUrl} alt={produto.nome} />
            </div>
            <Typography variant="body1">{produto.nome}</Typography>
            <IconButton
              disableFocusRipple
              disableRipple
              onClick={() => onAddCart(produto)}
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
              onClick={() => onRemoverCart(produto)}
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
      <Typography>Total: R${totalCompra}</Typography>
      <Button onClick={() => setOpenDialog(true)}>Finalizar</Button>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle> Finalizar Compra</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <TextField
                id="nome"
                label="Nome"
                variant="outlined"
                sx={{ marginTop: "0.5rem" }}
                onChange={(event) =>
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    nome: event.target.value,
                  }))
                }
              />
              <TextField id="rua" label="Rua" variant="outlined" />
              <TextField id="bairro" label="Bairro" variant="outlined" />
              <TextField id="cep" label="Cep" variant="outlined" />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                margin: "3rem 1rem",
              }}
            >
              <TextField
                id="nomeCartao"
                label="Nome no Cartão"
                variant="outlined"
                sx={{ width: "80%" }}
              />
              <TextField
                id="numeroCartao"
                label="Número do cartão"
                variant="outlined"
                sx={{ width: "60%" }}
              />
              <Box sx={{}}>
                <TextField
                  id="validadeCartao"
                  label="Data de validade"
                  variant="outlined"
                  sx={{ margin: "0.5rem" }}
                />
                <TextField
                  id="cvvCartao"
                  label="Código CVV"
                  variant="outlined"
                  sx={{ margin: "0.5rem" }}
                />
              </Box>
            </Box>
            <Button type="submit">Comprar</Button>
          </form>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
