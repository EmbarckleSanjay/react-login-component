import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';

// For Public route we don't have a side menu
export const PublicRoute = ({ component: Component, header, footer, ...rest }: any) => (
    <Route
        {...rest}
        render={(props) => (
            <div>
                {header ? <Header /> : ''}
                <Component {...props} />
                {footer ? <Footer /> : ''}
            </div>
        )}
    />
);
