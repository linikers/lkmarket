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
  onAddCart: ;
  onRemoverCart: ;
}

interface ICardProduto extends Produto {
  onClick: () => void;
}

export default function CardProduto({
  nome,
  descricao,
  imgUrl,
  preco,
  onAddCart,
  onRemoverCart,
}: ICardProduto): JSX.Element {
  return (
    <Card sx={{ height: 450 }}>
      <CardMedia component="img" image={imgUrl} alt={nome} />
      <CardContent>
        <Typography variant="h6">{nome}</Typography>
        <Typography variant="body2"> {descricao}</Typography>
        <Typography variant="body2">R${preco}</Typography>
        <Button onClick={onAddCart}>Reservar</Button>
        <Button onClick={onRemoverCart}>Remover</Button> 
      </CardContent>
    </Card>
  );
}
