import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./layout";
import StoreProvider from "./redux/provider";
import Routes from "./routes";
import ThemeProvider from "./theme";

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <ThemeProvider>
          <CssBaseline />
          <Layout>
            <Switch>
              <Route path="/captable/:id">
                <Routes.CapTable />
              </Route>
              <Route path="/">
                <Routes.Landing />
              </Route>
            </Switch>
          </Layout>
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
