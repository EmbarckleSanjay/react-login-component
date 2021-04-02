import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';
import { useSelector } from 'react-redux';

// For Private route we have a side menu
export const PrivateRoute = ({ component: Component, header, footer, sidemenu, ...rest }: any) => {

  const { jwt } = useSelector((state: any) => state.login);
  const [toggleSideBar, setToggleSideBar] = useState(true);
  return (
    <Route
      {...rest}
      render={(props: JSX.IntrinsicAttributes) =>
        jwt ? (
          <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                {header ?
                  (
                    <Header
                      {...props}
                      toggleSideBar={toggleSideBar}
                      setToggleSideBar={setToggleSideBar}
                    />
                  ) : ''}
                <Component {...props} />
              </div>
              {footer ? <Footer /> : ''}
            </div>
          </div>
        ) : (
            <Redirect to="/" />
          )
      }
    />
  );
};
