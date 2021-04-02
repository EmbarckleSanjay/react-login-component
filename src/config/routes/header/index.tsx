import React from 'react';
import { withRouter } from 'react-router-dom';

const HeaderComponent: React.FC<any> = (props: any) => {
    return (
        <>
            {/* <nav>
                Your Header
            </nav> */}
        </>
    );
};

export const Header = withRouter(HeaderComponent);
