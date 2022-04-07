import React, { useContext } from 'react';
import Carticon from '../Cart/Carticon';
import CartContext from '../Store/Cart-context';
import classes from './Headercartbutton.module.css'


const Headercartbutton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberofitem = cartCtx.items.reduce((curNumber,item)=>{

        return curNumber + item.amount;  
    },0);

    return <button className={classes.button}  onClick={props.onclick}  >
        <span className={classes.icon}> <Carticon/> </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberofitem}</span>
    </button>
};

export default Headercartbutton;