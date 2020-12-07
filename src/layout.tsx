import AppBar from "@material-ui/core/AppBar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import React from "react";
const styles = (theme: Theme) =>
  createStyles({
    layout: {
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "5px 1fr 5px",
      gridTemplateRows: "65px 1fr 60px",
    },
    header: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      gridRowStart: 1,
      gridRowEnd: 2,
      minHeight: 60,
      gridColumnStart: 1,
      gridColumnEnd: 3,
    },
    main: {
      gridRowStart: 2,
      gridRowEnd: 3,
      gridColumnStart: 1,
      gridColumnEnd: 3,
    },
    footer: {
      borderTop: `1px solid ${theme.palette.background.paper}`,
      minHeight: 50,
      gridRowStart: 3,
      gridRowEnd: 4,
      gridColumnStart: 1,
      gridColumnEnd: 4,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });

const useStyles = makeStyles(styles);

const Layout: React.FC<{}> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <AppBar className={classes.header}></AppBar>
      <main className={classes.main}>{children}</main>
      <BottomNavigation className={classes.footer}></BottomNavigation>
    </div>
  );
};

export default Layout;
