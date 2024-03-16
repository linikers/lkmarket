import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export interface Produto {
  nome: string;
  descricao: string;
  imgUrl: string;
  preco: number;
}

export default function CardProduto({
  nome,
  descricao,
  imgUrl,
  preco,
}: Produto): JSX.Element {
  return (
    <Card>
      <CardMedia component="img" image={imgUrl} alt={nome} />
      <CardContent>
        <Typography variant="h6">{nome}</Typography>
        <Typography variant="body2"> {descricao}</Typography>
        <Typography variant="body2">R${preco}</Typography>
      </CardContent>
    </Card>
  );
}
