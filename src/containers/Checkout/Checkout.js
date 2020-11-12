import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
class Checkout extends Component{
    state={
        ingredients:{
            berries:1,
            seeds:1,
            spinach:1,
            vanilla:1
        }
    }
/*     componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients={};
        for (let param of query.entries()){
            ingredients[param[0]] = +param[1]
        }
        this.setState({ingredients:ingredients})
    } */
    checkoutCancelled = () => {
        this.props.history.goBack();
    }
    checkoutContinued = () =>{
        this.props.history.replace('/checkout/contact')
    }
    render(){
        return(
            <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled = {this.checkoutCancelled}
                    checkoutContinued = {this.checkoutContinued} />
        )
    }
}

export default Checkout;