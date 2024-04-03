import { Button } from "@mui/material";
import axios from "axios";
import React from "react";

export interface IUser {
  nome: string;
  rua: string;
  nRua: string;
  bairro: string;
  cep: string;

  nomeCartao: string;
  numeroCartao: string;
  validadeCartao: string;
  cvvCartao: string;
}

interface ISaveDataProps {
  userData: IUser;
}
const SaveDataFile: React.FC<ISaveDataProps> = ({ userData }) => {
  const saveUserData = async () => {
    try {
      await axios.post("http://localhost:3005/salvar-dados", userData);
      console.log("Dados salvos");
    } catch (error) {
      console.error("Erro ao salvar dados", error);
    }
  };

  return (
    <div>
      <Button onClick={saveUserData}>Comprar</Button>
    </div>
  );
};
export default SaveDataFile;
