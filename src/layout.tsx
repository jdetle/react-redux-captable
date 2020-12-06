import { AppBar } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import React from "react";
const styles = (theme: Theme) =>
  createStyles({
    layout: {
      minHeight: "100vh",
      padding: "0 0.5rem",
      display: "grid",
      gridTemplateColumns: "5px 1fr 5px",
      gridTemplateRows: "65px 1fr 60px",
      gridColumnGap: 10,
      gridRowGap: 10,
    },
    header: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      gridRowStart: 0,
      gridRowEnd: 1,
      gridColumnStart: 0,
      gridColumnEnd: 3,
    },
    main: {
      padding: "10rem 0",
      gridRowStart: 2,
      gridRowEnd: 3,
      gridColumnStart: 0,
      gridColumnEnd: 3,
    },

    footer: {
      borderTop: "1px solid #eaeaea",
      gridRowStart: 3,
      gridRowEnd: 3,
      gridColumnStart: 1,
      gridColumnEnd: 3,
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
      <AppBar className={classes.footer}></AppBar>
    </div>
  );
};

export default Layout;
