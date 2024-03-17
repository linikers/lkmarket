import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox(): JSX.Element {
  return (
    <div>
      <div>
        <IconButton
          sx={{
            "&:hover, &:focus": {
              backgroundColor: "transparent",
            },
          }}
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Buscar..."
          inputProps={{ "aria-label": "buscar" }}
        />
      </div>
    </div>
  );
}
