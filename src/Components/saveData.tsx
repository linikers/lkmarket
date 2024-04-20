import axios from "axios";

export interface IUser {
  nome: string;
  endereco: string;
  num: string;
  bairro: string;
  cep: string;

  nomeCartao: string;
  numeroCartao: string;
  validadeCartao: string;
  cvvCartao: string;
}

const saveUserData = async (userData: IUser) => {
  try {
    await axios.post("http://localhost:3005/salvar-dados", userData);
    console.log("Dados salvos");
  } catch (error) {
    console.error("Erro ao salvar dados", error);
  }
};

export default saveUserData;
