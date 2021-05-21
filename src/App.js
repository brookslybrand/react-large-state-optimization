import React, { useState, useEffect } from "react";
import { Router, Redirect, Location } from "@reach/router";

import { AppBar as MuiAppBar, Tabs, Tab } from "@material-ui/core";
import SlowApp from "./SlowApp";
import OptimizationApp1 from "./OptimizationApp1";

import { SLOW_APP_ROUTE, OPTIMIZATION_APP_1 } from "./constants/routes";

const App = () => (
  <div>
    <div>
      {/* taken from https://material-ui.com/components/tabs/#simple-tabs */}
      <Location>{(props) => <AppBar {...props} />}</Location>
      <h1>Optimizing a React App</h1>
      <Router primary={false}>
        {tabObjects.map(({ title, route, RouteComponent }) => (
          <RouteComponent key={title} path={route} />
        ))}
        <Redirect from="/*" to={tabObjects[0].route} noThrow />
      </Router>
    </div>
  </div>
);

const tabObjects = [
  {
    title: "Slow App",
    route: SLOW_APP_ROUTE,
    RouteComponent: () => <SlowApp />,
  },
  {
    title: "Optimization App 1",
    route: OPTIMIZATION_APP_1,
    RouteComponent: () => <OptimizationApp1 />,
  },
];

const AppBar = ({ navigate, location }) => {
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const routeIndex = tabObjects.findIndex(({ route }) =>
      location.pathname.includes(route)
    );
    setTabIndex(routeIndex);
  }, [location.pathname]);

  function handleChange(event, tabIndex) {
    navigate(`/${tabObjects[tabIndex].route}`);
    window.scrollTo(0, 0);
  }

  return (
    <MuiAppBar position="static">
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        aria-label="Different implementations of the same app"
      >
        {tabObjects.map(({ title }) => (
          <Tab
            key={title}
            label={title}
            {...a11yProps(tabObjects[0].title.toLowerCase().replace(" ", "-"))}
          />
        ))}
      </Tabs>
    </MuiAppBar>
  );
};

const a11yProps = (title) => ({
  id: `${title}-implementation-tab`,
  "aria-controls": `${title}-implementation-tabpanel`,
});

export default App;
