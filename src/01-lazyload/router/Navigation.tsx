import React, { Fragment } from "react";
import { Link, useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export default function Navigation() {
  const { path, url } = useRouteMatch();

  return (
    <Fragment>
      <h2>LazyLayout Pages</h2>

      <ul>
        <li>
          <Link to={`${url}/lazy1`}>LazyPage 1</Link>
        </li>
        <li>
          <Link to={`${url}/lazy2`}>LazyPage 2</Link>
        </li>
        <li>
          <Link to={`${url}/lazy3`}>LazyPage 3</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={`${path}/lazy1`}>
          <LazyPage1 />
        </Route>
        <Route exact path={`${path}/lazy2`}>
          <LazyPage2 />
        </Route>
        <Route exact path={`${path}/lazy3`}>
          <LazyPage3 />
        </Route>

        <Redirect to={`${url}/lazy1`} />
      </Switch>
    </Fragment>
  );
}
