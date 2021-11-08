import React, { lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface IRoute {
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent; // () => JSX.Element;
  name: string;
  children?: IRoute[];
}

export const routes: IRoute[] = [
  {
    path: "/lazyload",
    Component: lazy(
      () =>
        import(
          /*webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
        )
    ),
    name: "LazyLoading Nested",
  },
  {
    path: "/no-lazy",
    Component: NoLazy,
    name: "No Lazy Loading",
  },
];
