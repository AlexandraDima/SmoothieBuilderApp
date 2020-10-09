import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Auxx from '../../../hoc/Auxx';

const Modal = (props) =>(
    <Auxx>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div 
        style = {{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '0.9' :'0'
        }}
        className={classes.Modal}>
        {props.children}
    </div>
    </Auxx>
);
export default Modal;