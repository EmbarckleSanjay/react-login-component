import React, { Suspense } from 'react';
import { appRoutes } from './appRoutes/appRoutes';
import { PublicRoute } from './appRoutes/publicRoute';
import { PrivateRoute } from './appRoutes/privateRoute';
import { BrowserRouter as Routes, Switch } from 'react-router-dom';

const routes: any[] = [];

const { publicRoutes, privateRoutes } = appRoutes;

publicRoutes.map((publicRouteObj: any, index: number) =>
  routes.push(
    publicRouteObj.route === '/' ? (
      <PublicRoute
        key={index}
        path={publicRouteObj.route}
        exact
        component={publicRouteObj.component}
      />
    ) : (
        <PublicRoute
          key={index}
          path={publicRouteObj.route}
          component={publicRouteObj.component}
        />
      )
  )
);

privateRoutes.map((privateRouteObj: any, index: number) =>
  routes.push(
    <PrivateRoute
      key={index}
      path={privateRouteObj.route}
      component={privateRouteObj.component}
      header
      footer
      sidemenu
    />
  )
);

export const Router: any = (props: any) => {
  return (
    <Routes>
      <Suspense fallback={<div>Loading..!</div>}>
        <Switch>{routes}</Switch>
      </Suspense>
    </Routes>
  );
};
