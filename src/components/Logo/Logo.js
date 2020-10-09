import React from 'react';
import classes from './Logo.module.css'
import logo from '../../assets/logo.svg';

const Logo = (props) => (
    <div className={classes.Logo}>
    <img src={logo} alt="SmoothieLogo" />
    </div>
);

export default Logo;