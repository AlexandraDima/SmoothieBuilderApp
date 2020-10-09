import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
                            .map(igKey => {
                                return <li key={igKey}>
                                           <span style={{textTransform:'capitalize'}}>{igKey}</span>: 
                                           {props.ingredients[igKey]}
                                        </li>
                            })
    console.log(ingredientSummary);
    return(
        <div>
            <h1>Your order</h1>
            <p>Delicious smoothie with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p><b>Total price: {props.price}</b></p>
            <p>Continue to checkout?</p>
            <Button clicked={props.cancelOrder} btnType="Danger">CANCEL</Button>
            <Button btnType="Success" clicked={props.continueOrder}>CONTINUE</Button>
        </div>
    )
}

export default OrderSummary;