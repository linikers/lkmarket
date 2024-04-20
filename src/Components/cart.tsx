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

  const [userData, setUserData] = useState<IUser>({
    nome: "",
    rua: "",
    nRua: "",
    bairro: "",
    cep: "",
    nomeCartao: "",
    numeroCartao: "",
    validadeCartao: "",
    cvvCartao: "",
  });
  //const [formFilled, setFormFilled] = useState(false);
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
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // <SaveDataFile userData={userData} />;
    try {
      await saveUserData(userData);
    } catch (error) {
      console.error("Erro ao finalizar compra", error);
    }
  };

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
              <TextField
                id="endereco"
                label="Endereço"
                variant="outlined"
                onChange={(event) =>
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    endereco: event.target.value,
                  }))
                }
              />
              <TextField
                id="bairro"
                label="Bairro"
                variant="outlined"
                onChange={(event) =>
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    bairro: event.target.value,
                  }))
                }
              />
              <TextField
                id="cep"
                label="Cep"
                variant="outlined"
                onChange={(event) =>
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    cep: event.target.value,
                  }))
                }
              />
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
                onChange={(event) =>
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    nomeCartao: event.target.value,
                  }))
                }
              />
              <TextField
                id="numeroCartao"
                label="Número do cartão"
                variant="outlined"
                sx={{ width: "60%" }}
                onChange={(event) =>
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    numeroCartao: event.target.value,
                  }))
                }
              />
              <Box sx={{}}>
                <TextField
                  id="validadeCartao"
                  label="Data de validade"
                  variant="outlined"
                  sx={{ margin: "0.5rem" }}
                  onChange={(event) =>
                    setUserData((prevUserData) => ({
                      ...prevUserData,
                      validadeCartao: event.target.value,
                    }))
                  }
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
