import { lazy, LazyExoticComponent } from "react";
import { noLazy } from "../01-lazyload/pages/noLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}


const LazyLayout = lazy( () => import( /* webpackChunkName: "LazyLayout" */'../01-lazyload/components/layout/LazyLayout'));
// const Lazy2 = lazy( () => import( /* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy( () => import( /* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout - Dash' 
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: noLazy,
        name: 'No - Lazy' 
    },
  
]