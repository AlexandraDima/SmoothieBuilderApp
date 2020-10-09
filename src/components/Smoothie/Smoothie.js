import React from 'react';

import classes from './Smoothie.module.css';
import SmoothieIngredient from './SmoothieIngredient/SmoothieIngredient';

const Smoothie = (props)=>{
    //Convert the ingredient object into an array of ingredients objects
    let ingredientsList = Object.keys(props.ingredients)
                            .map(ingredientType => { /// [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] --an array of objects
                               // [...Array(props.ingredients[ingredientType])] ---- 8 empty arrays of the ingredients objects
                               // .map( ( _, i) => ingredientType + i) --- 8 arrays with the ingredient type + the index, ex:spinach0, spinach1...
                                return [...Array(props.ingredients[ingredientType])].map( ( _, i) => {
                                  return  <SmoothieIngredient key={ingredientType + i} type={ingredientType}></SmoothieIngredient>
                                })
                            }) //8 arrays with different object types --[Array(2), Array(0), Array(3), Array(0), Array(0), Array(0), Array(0), Array(0)] 
                      
                            //calculate all the sum of all the ingredient types and return a new array of objects --(2) [{…}, {…}]
                            .reduce((arr,el)=> {
                                return arr.concat(el)
                            }, []); 
                            
    if(ingredientsList.length === 0){
        ingredientsList = <p className={classes.textMessage}>Please <br/>start <br/>adding <br/> ingredients</p>
    };
     
    return(
            <div className={classes.Smoothie}>
                <div className={classes.glass}>
                <div className={classes.neck}></div>
                <div className={classes.neckBottom}></div>
                <div className={classes.shine}></div>
                <div className={classes.shine2}></div>
                <div className={`${classes.lid} ${classes.top}`}></div>
                <div className={`${classes.lid} ${classes.mid}`}></div>
                <div className={`${classes.lid} ${classes.bot}`}></div>
                <div className={classes.cupStroke}></div>
                    <div className={classes.ingredientsAll}>
                        {ingredientsList}
                    <SmoothieIngredient type="milk"></SmoothieIngredient>
                    </div>
                </div>
            </div>
    )
}

export default Smoothie;