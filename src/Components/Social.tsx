import { GitHub, Instagram, LinkedIn, X } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";

export default function SocialIcons(): JSX.Element {
  return (
    <Grid container spacing={20}>
      <Grid item>
        <IconButton
          component="a"
          href="https://www.instagram.com/linikers/"
          target="_blank"
        >
          <Instagram />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com/linikers/"
          target="_blank"
        >
          <X />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/linikers/"
          target="_blank"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/linikers"
          target="_blank"
        >
          <GitHub />
        </IconButton>
      </Grid>
    </Grid>
  );
}
