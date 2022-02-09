import React, {FunctionComponent, ReactElement} from 'react';

import PersonaSelector from '../PersonaSelector';

import logo from './logo.svg';

import './style.css';

const Layout: FunctionComponent = ({children}): ReactElement => (
    <div className="container">
        <header>
            <a href="https://croct.com" className="logo">
                <img src={logo} title="Croct" alt="Croct" />
            </a>
            <PersonaSelector />
        </header>
        <div className="content">
            {children}
        </div>
    </div>
);

export default Layout;
