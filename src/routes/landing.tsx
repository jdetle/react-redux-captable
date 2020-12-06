import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {
  createStyles,
  darken,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";

//@ts-ignore
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
      backgroundColor: darken(theme.palette.background.paper, 0.1),
    },
    title: {
      fontSize: 16,
    },
    actions: {
      display: "flex",
      justifyContent: "flex-start",
      alignContent: "flex-start",
      flexDirection: "column",
      padding: theme.spacing(1),
    },
    vizGrid: {
      height: 280,
      width: 280,
      display: "flex",
      justifyContent: "flex-start",
      alignContent: "flex-start",
      flexDirection: "column",
      padding: theme.spacing(1),
    },
  });

const useStyles = makeStyles(styles);

const PieChart = () => {
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
        colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
        data={[
          { x: "Founder", y: 120 },
          { x: "Investor", y: 150 },
          { x: "Shareholder", y: 95 },
        ]}
        labelRadius={100}
        style={{ labels: { fontSize: 16, fill: "navy" } }}
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
      justify="center"
      alignContent="center"
      alignItems="center"
    >
      <Grid item={true}>
        <Card raised={true} className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Make a New Cap Table
            </Typography>
            <div className={classes.vizGrid}>
              <PieChart />
            </div>
          </CardContent>
          <CardActionArea className={classes.actions}>
            <Button onClick={() => history.push("/captable/new")}>
              Get Started
            </Button>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Landing;
