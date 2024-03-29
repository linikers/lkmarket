import { AppBar, Box, Toolbar } from "@mui/material";
import SearchBox from "./BoxSearch";

interface IHeader {
  onSearch: (term: string) => void;
}

export default function Header({ onSearch }: IHeader): JSX.Element {
  return (
    <AppBar sx={{ backgroundColor: "#6a1b9a" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: 1,
            marginTop: 1,
            marginBottom: 1,
          }}
        >
          <img src="/logo.png" alt="LK logo" style={{ width: "140px" }} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SearchBox onSearch={onSearch} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
