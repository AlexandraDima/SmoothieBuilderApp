import React, {useState} from 'react';
import Logo from '../Logo/Logo';
const NavigationItems = () => {
    const [menuState, setToggleMenu]= useState({
        menu: false
    })
    const toggleMenuFnc = () => {
        setToggleMenu({menu: !menuState.menu})
    }
 
    const show = menuState.menu ? "show" : "";
        return (
        <nav className="navbar navbar-expand-lg pt-0 pb-0 navbar-light mr-auto">
        <a className="navbar-brand" href="/"><Logo /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={toggleMenuFnc} data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className={` collapse navbar-collapse + ${show}`} id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link" href="/">Smoothie builder</a>
            </li>
           {/*  <li className="nav-item">
                <a className="nav-link" href="/checkout">Checkout</a>
            </li> */}
            </ul>
        </div>
        </nav>
        )
}

export default NavigationItems;