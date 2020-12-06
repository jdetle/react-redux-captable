import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Layout from "./layout";
import StoreProvider from "./redux/provider";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
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
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
