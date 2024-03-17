import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox(): JSX.Element {
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
        />
      </div>
    </div>
  );
}
