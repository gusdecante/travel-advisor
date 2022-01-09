import { AppBar, Toolbar, Typography } from "@material-ui/core";

import useStyles from "./styles";

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title}>Travel Advisor</Typography>
      </Toolbar>
    </AppBar>
  );
}
