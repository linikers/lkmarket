import { AppBar, Box, Toolbar } from "@mui/material";
import SearchBox from "./BoxSearch";

export default function Header(): JSX.Element {
  return (
    <AppBar>
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
          <SearchBox />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
