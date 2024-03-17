import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import ListaDeProdutos from "../assets/produtos";
import { Produto } from "./CardProduct";

export default function SearchBox(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filtroProdutos = (term: string): Produto[] => {
    return ListaDeProdutos.filter((produto: Produto) =>
      produto.nome.toLowerCase().includes(term.toLowerCase())
    );
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const produtoFiltrado = filtroProdutos(searchTerm);

  return (
    <div>
      <div>
        <IconButton
          sx={{
            color: "white",
            "&:hover, &:focus, &.Mui-focusVisible": {
              backgroundColor: "transparent",
              outline: "none",
            },
          }}
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Buscar..."
          inputProps={{ "aria-label": "buscar" }}
          sx={{ color: "white" }}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}
