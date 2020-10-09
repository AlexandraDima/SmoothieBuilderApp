import React from 'react';
import classes from './SmoothieIngredient.module.css';

const SmoothieIngredient = (props) => {
        let ingredient =  null;
        switch(props.type){
            case('milk'): 
                ingredient=<div className={classes.milk}></div>;
                break;
            case ('spinach'):
                ingredient = <div className={classes.spinach}></div>;
                break;
            case ('berries'):
                ingredient = <div className={classes.berries}></div>;
                break;
            case ('seeds'):
                ingredient = <div className={classes.seeds}></div>;
                break;
            case ('vanilla'):
                ingredient = <div className={classes.vanilla}></div>;
                break;
            default:
                ingredient = null;
        }
            return ingredient;
    
    
};

export default SmoothieIngredient;