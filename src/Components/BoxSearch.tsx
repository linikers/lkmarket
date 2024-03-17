import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

interface ISeachBox {
  onSearch: (term: string) => void;
}
export default function SearchBox({ onSearch }: ISeachBox): JSX.Element {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    onSearch(term);
  };

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
