import React, { Suspense } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Loader from "./components/loader/Loader";
import { mainRoutes } from "./routes/mainRoutes";

const App = () => {
  return (
    <div className={styles.global}>
      <ul className={styles.nav}>
        {mainRoutes.map((route) => {
          return route.name ? (
            <li className={styles.li} key={route.path}>
              <NavLink
                exact={route.exact}
                to={route.path}
                className="NavLink"
                activeClassName="NavLink--Active"
              >
                {route.name}
              </NavLink>
            </li>
          ) : null;
        })}
      </ul>
      <Suspense fallback={<Loader />}>
        <Switch>
          {mainRoutes.map((route) => (
            <Route
              exact={route.exact}
              path={route.path}
              component={route.component}
              key={route.path}
            />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
