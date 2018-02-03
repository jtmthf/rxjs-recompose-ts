import asyncComponent, {
  AsyncComponentProps,
} from '@jaredpalmer/after/asyncComponent';
import * as React from 'react';
import Home from './Home';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/2-prop-passing',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/2-props-passing'),
      Placeholder: () => <div>LOADING...</div>,
    }),
  },
  {
    path: '/3-ajax',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/3-ajax'),
      Placeholder: () => <div>LOADING...</div>,
    }),
  },
  {
    path: '/4-events-as-stream',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/4-events-as-stream'),
      Placeholder: () => <div>LOADING...</div>,
    }),
  },
];
