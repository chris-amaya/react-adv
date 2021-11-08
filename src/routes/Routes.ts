// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

import React, { lazy } from "react";
// import React from 'react';

type JSXComponent = () => JSX.Element;

interface IRoute {
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent; // () => JSX.Element;
  name: string;
  children?: IRoute[];
}

const LazyPage1 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1")
);
const LazyPage2 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2")
);
const LazyPage3 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3")
);

export const routes: IRoute[] = [
  {
    path: "/lazy1",
    Component: LazyPage1,
    name: "LazyPage-1",
  },
  {
    path: "/lazy2",
    Component: LazyPage2,
    name: "LazyPage-2",
  },
  {
    path: "/lazy3",
    Component: LazyPage3,
    name: "LazyPage-3",
  },
];
