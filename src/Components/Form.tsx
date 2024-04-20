import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import saveUserData, { IUser } from "./saveData";

export const FormDialog = () => {
  const [userData, setUserData] = useState<IUser>({
    nome: "",
    endereco: "",
    num: "",
    bairro: "",
    cep: "",
    nomeCartao: "",
    numeroCartao: "",
    validadeCartao: "",
    cvvCartao: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await saveUserData(userData);
    } catch (error) {
      console.error("Erro ao finalizar compra", error);
    }
  };

  return (
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
            onChange={(event) =>
              setUserData((prevUserData) => ({
                ...prevUserData,
                cvvCartao: event.target.value,
              }))
            }
          />
        </Box>
      </Box>
      <Button type="submit">Comprar</Button>
    </form>
  );
};
