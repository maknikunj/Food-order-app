import React,{useRef, useState} from 'react';
import classes from './Cartitem.module.css';


const Cartitem = (props) => {

  const [input,setinput]= useState('')
  const [inputhide,setinputhide]=useState(false)


  const onchangehandler=(e)=>{
    setinput(e.target.value)    
  }
  
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{`Rs.${props.price.toFixed(0)}`}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
       <input  type='text' />
       <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default Cartitem;