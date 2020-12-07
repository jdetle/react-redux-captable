import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { green, lightBlue } from "@material-ui/core/colors";
import {
  createStyles,
  darken,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import { VictoryPie } from "victory";
import { useHistory } from "react-router";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: 400,
      width: 330,
      minHeight: 400,
      minWidth: 300,
      display: "flex",
      justifyContent: "flex-start",
      alignContent: "flex-start",
      flexDirection: "column",
      margin: theme.spacing(10),
      backgroundColor: darken(theme.palette.background.paper, 0.3),
    },
    hero: {
      borderRadius: theme.spacing(2),
      minHeight: 300,
      padding: theme.spacing(2),
      margin: theme.spacing(5),
      backgroundColor: theme.palette.primary.dark,
      backgroundImage: `linear-gradient(135deg, ${theme.palette.background.paper} 10%, ${theme.palette.primary.dark} 100%)`,
    },
    heroGutter: {
      paddingRight: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      marginBottom: theme.spacing(2),
    },
    title: {
      fontSize: 14,
    },
    heroTitle: {
      marginBottom: theme.spacing(2),
      backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main} 10%, ${theme.palette.secondary.main} 100%)`,
      WebkitBackgroundClip: "text",
      textFillColor: "transparent",
      color: theme.palette.secondary.main,
    },
    actions: {
      display: "flex",
      justifyContent: "flex-start",
      alignContent: "flex-start",
      flexDirection: "column",
      paddingBottom: theme.spacing(2),
    },
    vizGrid: {
      backgroundColor: "rgba(0,0,0,0.1)",
      borderRadius: 4,
      height: "inherit",
      width: "inherit",
      display: "flex",
      justifyContent: "flex-start",
      alignContent: "flex-start",
      flexDirection: "column",
      padding: theme.spacing(1),
    },
  });

const useStyles = makeStyles(styles);

const PieChart = () => {
  const [[d1, d2, d3], setRandomData] = useState<number[]>([120, 150, 95]);
  const color = [green[700], green[900], lightBlue[800]];

  setInterval(() => {
    const getRandomInt = (max: number) => {
      return Math.floor(Math.random() * Math.floor(max));
    };
    setRandomData([10, 5, 2].map((n) => getRandomInt(10)));
  }, 10000);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        flexDirection: "column",
      }}
    >
      <VictoryPie
        standalone={true}
        animate={{
          duration: 2000,
        }}
        colorScale={color}
        data={[
          { x: "Founder", y: d1 },
          { x: "Investor", y: d2 },
          { x: "Shareholder", y: d3 },
        ]}
        labelRadius={100}
        style={{ labels: { fontSize: 18, fill: "white" } }}
      />
    </div>
  );
};

const Landing: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid
      container={true}
      justify="flex-start"
      alignContent="center"
      alignItems="center"
    >
      <Grid item={true} xs={12}>
        <Card className={classes.hero}>
          <Grid
            justify="center"
            alignContent="center"
            alignItems="center"
            container={true}
            item={true}
            xs={12}
          >
            <Typography
              className={classes.heroTitle}
              color="primary"
              key="title"
              variant="h1"
            >
              React Redux Cap Table
            </Typography>
          </Grid>
          <Grid
            container={true}
            xs={12}
            spacing={4}
            justify="center"
            className={classes.heroGutter}
            alignContent="center"
            alignItems="center"
          >
            <Grid></Grid>
            <Grid item={true} xs={6}>
              <Typography color="textSecondary">
                Companies usually have to raise money in order to grow.
                Capitalization Tables help keep track of what entities own a
                share of a company. This app helps keep track in a simplified
                manner. Click get started below to make a new capitalization
                table.
              </Typography>
            </Grid>
            <Grid item={true} xs={6}>
              <Typography color="textSecondary">
                Tech used includes React, Redux, Material UI, Typescript,
                Formik, Victory, Material Datatables, and a Golang Rest API for
                Postgres. Building a Go API for this in a weekend may have been
                a bit ambititious, but I think I benefited from the exercise.
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item={true}>
        <Card raised={true} className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              Make a New Cap Table
            </Typography>
            <div className={classes.vizGrid}>
              <PieChart />
            </div>
          </CardContent>
          <CardActionArea className={classes.actions}>
            <Button
              color="primary"
              onClick={() => history.push("/captable/new")}
            >
              Get Started
            </Button>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Landing;
