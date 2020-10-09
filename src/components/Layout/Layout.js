import React from 'react';
import Auxx from '../../hoc/Auxx';
import classes from './Layout.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationItems from '../Navigation/NavigationItems';

const Layout = (props) => (
    <Auxx>
    <div className="container-fluid">
        <NavigationItems />
    </div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Auxx>
)

export default Layout;