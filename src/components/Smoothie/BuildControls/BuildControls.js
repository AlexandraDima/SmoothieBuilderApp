import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

const controls =[
    {category:'Veggies', 'label': 'Spinach', type:'spinach'},
    {category:'Fruits', 'label': 'Berries', type:'berries'},
    {category:'Fat', 'label': 'Seeds', type:'seeds'},
    {category:'Flavours', 'label': 'Vanilla', type:'vanilla'}
]
const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: {props.price.toFixed(2)}</p>
        {
            controls.map(item => (
                <BuildControl 
                    key={item.label} 
                    added={() => props.addIngredient(item.type)} 
                    removed={() => props.removeIngredient(item.type)}
                    disabled = {props.disabled[item.type]}
                    label={item.label}>
                    </BuildControl>
            ))
        }
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>
        Order now</button>
    </div>
)
export default BuildControls;