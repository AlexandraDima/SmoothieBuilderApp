import React from 'react';
import Smoothie from '../../Smoothie/Smoothie';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
    return(
        <div className={classes.CheckoutSummary}>
        <h1>Enjoy your smoothie</h1>
            <Smoothie ingredients={props.ingredients}></Smoothie>
       {/*  <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button> */}
    </div>
    )
   
}
export default CheckoutSummary;