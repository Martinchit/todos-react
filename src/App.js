import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ToDosPage } from './pages/ToDos/ToDosPage';
import { Box } from './core/components/atoms/Box';

export const App = () => {
  return (
    <Box padding="5vw 1vh" backgorund="">
      <Router>
        <Switch>
          <Route path="/todos" component={ToDosPage} />
          <Redirect from="*" to="/todos" />
        </Switch>
      </Router>
    </Box>
  );
};
