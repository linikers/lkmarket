import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export interface Produto {
  nome: string;
  descricao: string;
  imgUrl: string;
  preco: number;
}

interface ICardProduto extends Produto {
  onAddCart: () => void;
}

export default function CardProduto({
  nome,
  descricao,
  imgUrl,
  preco,
  onAddCart,
}: ICardProduto): JSX.Element {
  return (
    <Card sx={{ height: 450 }}>
      <CardMedia component="img" image={imgUrl} alt={nome} />
      <CardContent>
        <Typography variant="h6">{nome}</Typography>
        <Typography variant="body2"> {descricao}</Typography>
        <Typography variant="body2">R${preco}</Typography>
        <Button onClick={onAddCart}>Reservar</Button>
      </CardContent>
    </Card>
  );
}
