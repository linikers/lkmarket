import { Grid, Typography } from "@mui/material";
import SocialIcons from "./Social";

export default function BoxFooter(): JSX.Element {
  return (
    <footer>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={6} sm={3} margin={1}>
          <Typography variant="body2">
            Desenvolvido por:{" "}
            <a href="https://github.com/linikers" target="_blank">
              {" "}
              LinikerS
            </a>
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} style={{ textAlign: "right" }}>
          <SocialIcons />
        </Grid>
      </Grid>
    </footer>
  );
}
