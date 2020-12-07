import React, { useState } from "react";
import { useParams } from "react-router";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  createStyles,
  darken,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import {
  Formik,
  Form,
  Field,
  FieldArray,
  FieldArrayRenderProps,
  FormikHelpers,
} from "formik";

import FormikTextField from "./../components/formik-textfield";

import { CreateCapTableRequest, Shareholder } from "../types";
import { lightBlue, green, blueGrey, lime } from "@material-ui/core/colors";
import { VictoryPie } from "victory";
import TextField from "@material-ui/core/TextField";

export const styles = (theme: Theme) =>
  createStyles({
    capTableCard: {
      padding: theme.spacing(10),
      minHeight: 500,
      display: "flex",
      justifyContent: "flex-start",
      alignContent: "flex-start",
      flexDirection: "column",
      margin: theme.spacing(10),
      backgroundColor: theme.palette.primary.light,
      backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.light} 10%, ${theme.palette.primary.main} 100%)`,
    },
    cardContent: {
      minHeight: 300,
    },
    title: {
      color: blueGrey[900],
      marginBottom: theme.spacing(4),
    },
    textField: {
      marginBottom: theme.spacing(4),
    },
    button: {
      color: blueGrey[900],
    },
    actions: {
      color: blueGrey[900],
      display: "flex",
      justifyContent: "flex-start",
      alignContent: "flex-start",
      flexDirection: "column",
      paddingBottom: theme.spacing(2),
    },
  });

const useStyles = makeStyles(styles);

const PieChart = () => {
  const [[d1, d2, d3], setRandomData] = useState<number[]>([120, 150, 95]);
  const color = [lime[600], green[500], lightBlue[800]];

  return (
    <div style={{ marginLeft: 30, width: 250, height: 250 }}>
      <Typography align="center" variant="subtitle1">
        Shareholder Breakdown
      </Typography>
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
        style={{ labels: { fontSize: 18, fill: blueGrey[900] } }}
      />
    </div>
  );
};

const CapTable: React.FC = ({}) => {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const isEditMode = params.id !== "new";

  return (
    <>{isEditMode ? <EditCapTable id={params.id} /> : <CreateCapTable />}</>
  );
};

const Shareholders = ({
  shareholders,
}: Pick<CreateCapTableRequest, "shareholders">) => {
  const defaultFirstNameData = {
    blurred: false,
    currentFN: "",
    isValid: false,
    isUnique: true,
  };
  const defaultLastNameData = {
    blurred: false,
    currentLN: "",
    isValid: false,
    isUnique: true,
  };

  const [currentFN, setCurrentFN] = useState<{
    blurred: boolean;
    currentFN: string;
    isUnique: boolean;
    isValid: boolean;
  }>(defaultFirstNameData);

  const [currentLN, setCurrentLN] = useState<{
    blurred: boolean;
    currentLN: string;
    isUnique: boolean;
    isValid: boolean;
  }>(defaultLastNameData);

  return (
    <Card>
      <FieldArray name="shareholders">
        {({ push }: FieldArrayRenderProps) => {
          return (
            <Grid container={true} xs={12}>
              <TextField onChange={() => {}} />
            </Grid>
          );
        }}
      </FieldArray>
    </Card>
  );
};

const CreateCapTable = () => {
  const classes = useStyles();
  const initialValues: CreateCapTableRequest = {
    sharePrice: 1,
    totalShares: 100,
    companyName: "",
    shareholders: [],
  };
  const handleSubmit = async (
    values: CreateCapTableRequest,
    helpers: FormikHelpers<CreateCapTableRequest>
  ) => {};
  return (
    <Grid>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        isInitialValid={false}
      >
        {({ values, isValid, isSubmitting, isValidating }) => {
          return (
            <Form>
              <Card className={classes.capTableCard}>
                <CardContent className={classes.cardContent}>
                  <Typography
                    className={classes.title}
                    variant="h6"
                    color="textPrimary"
                    gutterBottom
                  >
                    Make a New Cap Table
                  </Typography>
                  <Grid container={true} spacing={2} justify="space-between">
                    <Grid
                      container={true}
                      xs={6}
                      spacing={2}
                      direction="column"
                    >
                      <FormikTextField
                        color="secondary"
                        label="Share Price"
                        helperText="Set a number for your cap table share price"
                        name="sharePrice"
                        variant="outlined"
                        className={classes.textField}
                      />
                      <FormikTextField
                        type="number"
                        color="secondary"
                        label="Total Shares"
                        helperText="Set a total number of shares for your captable"
                        name="totalShares"
                        variant="outlined"
                        className={classes.textField}
                      />
                      <FormikTextField
                        color="secondary"
                        label="Choose a name for your new (ad)venture"
                        helperText="Your Cap Table needs a name"
                        name="companyName"
                        variant="outlined"
                        className={classes.textField}
                      />
                    </Grid>
                    <Grid container={true} xs={6}>
                      <PieChart />
                    </Grid>
                  </Grid>
                  <Grid container={true} xs={6} direction="column">
                    <Shareholders shareholders={values.shareholders} />
                  </Grid>
                </CardContent>

                <CardActionArea>
                  <Grid container={true} xs={12} justify="flex-end">
                    <Button
                      className={classes.button}
                      type="submit"
                      disabled={isSubmitting || !isValid || isValidating}
                    >
                      Create Cap Table
                    </Button>
                  </Grid>
                </CardActionArea>
              </Card>
            </Form>
          );
        }}
      </Formik>
    </Grid>
  );
};

type EditCapTableProps = {
  id: number | string;
};
const EditCapTable: React.FC<EditCapTableProps> = ({ id }) => {
  return <Grid></Grid>;
};
export default CapTable;
