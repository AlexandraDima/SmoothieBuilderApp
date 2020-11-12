import React, {Component} from 'react';
import Smoothie from '../../components/Smoothie/Smoothie';
import BuildControls from '../../components/Smoothie/BuildControls/BuildControls';
import classes from './SmoothieBuilder.module.css';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Smoothie/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
//import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    spinach:10,
    berries:15,
    seeds:5,
    vanilla:3
}
class BurgerBuilder extends Component{

    state={
        ingredients:null,
        totalPrice: 20,
        purchasable: false,
        purchasing:false,
        loading:false,
        error:false
    }
    componentDidMount(){
        axios.get('https://react-smoothie-order.firebaseio.com/ingredients.json')
                .then(response => {
                    this.setState({ingredients:response.data});
                })
                .catch(error => {
                    this.setState({error:true})
                })
    }
    updatePurchaseState = (ingredients) =>{
        //sum up all the ingredients values
        let sum= Object.keys(ingredients)
                        .map(igKey => {return ingredients[igKey]})
                        .reduce((sum,item)=>{return sum + item;}, 0);
        console.log(sum);
        this.setState({
            purchasable:sum > 0
        })
    }
    addIngredient = (type) => {
        //access the old count of each ingredient to add upon it
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        //copy the list of ingredientes
        const updatedIngredients = {
            ...this.state.ingredients
        };
        //update the type of the copied array
        updatedIngredients[type] = updateCount;
        //get the price for each time
        const priceAddition = INGREDIENT_PRICES[type];
         //copy the price from the state
        const oldPrice = this.state.totalPrice;
        //update the new price
        const newPrice = oldPrice + priceAddition;
    
         this.setState({
            ingredients: updatedIngredients,
            totalPrice:newPrice
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredient = (type) => {
        const getTheCount = this.state.ingredients[type];
        //check if there are no ingredients and make sure that nothing happens if we try to reduce an ingredient
        if(getTheCount <= 0){
            return;
        }
        const updateCount = getTheCount - 1;
        const copiedListIngredients = {...this.state.ingredients};
        copiedListIngredients[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
         this.setState({
            ingredients: copiedListIngredients,
            totalPrice:newPrice
        }) 
        this.updatePurchaseState(copiedListIngredients);
    }
    //check if the order button has been clicked to activate the Order Summary modal
    purchaseHandler = () => {
        this.setState({purchasing: true})
    }
    //method to close the Modal/Button
    closeModal = () =>{
        this.setState({purchasing:false})
    }

    //method to continue the order
    continueOrder = () => {
      // alert('You continue');
      /* this.setState({loading: true });
      const order = {
          ingredients: this.state.ingredients,
          price: this.state.totalPrice,
          customer:{
              name: 'Ale',
              address: {
                  street:'Testaddress1',
                  country:'France'
              },
              email:'test@test.com'
          },
          deliveryMethod: 'fastest'
      }
         axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading:false, purchasing:false})
            })
            .catch(error => {this.setState({loading:false, purchasing:false})});  */

            const queryParams=[];
            for(let i in this.state.ingredients){
                queryParams.push(encodeURIComponent (i) + '=' + encodeURIComponent(this.state.ingredients[i]));
            }
            const queryString = queryParams.join('&');
            this.props.history.push({
                pathname:'/checkout',
                search:'?' + queryString
            });
    }
  
    render(){
        //disable the Less button if the ingredients are less or equal to 0
        const disableInfo={
            ...this.state.ingredients
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0 
            //console.log(disableInfo[key] <= 0)//True or false
              //{spinach:true, kale:false, .....}
        }
        let orderSummary = null;
        if(this.state.ingredients){
        orderSummary = <OrderSummary 
        cancelOrder={this.closeModal} 
        continueOrder={this.continueOrder} 
        ingredients={this.state.ingredients}
        price={this.state.totalPrice.toFixed(2)}
        >
        </OrderSummary>
        }
       

        let smoothie = <Spinner />
        if(this.state.ingredients){
            smoothie = (
                <div className="row mx-auto ">
                <div className={`col-md-6 pl-0 pr-0 ${classes.mainContainer} ${classes.left}`}>
                <Smoothie ingredients={this.state.ingredients} />
                </div>
                <div className={`col-md-6 pl-0 pr-0 ${classes.mainContainer} ${classes.right}`}>
                <BuildControls 
                    addIngredient={this.addIngredient} 
                    removeIngredient={this.removeIngredient}
                    disabled={disableInfo}
                    price ={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    />
                </div>
                </div>
            )
        }
      
        if(this.state.loading){
            orderSummary= this.state.error ? "Ingredients can't be loaded" : <Spinner />
        }

        return(
                <div className="container-fluid">
                <Modal show={this.state.purchasing} modalClosed={this.closeModal}>
                    {orderSummary}
                </Modal>
                {smoothie}
                </div>

        );
    }
}

//export default withErrorHandler(BurgerBuilder, axios);
export default BurgerBuilder;