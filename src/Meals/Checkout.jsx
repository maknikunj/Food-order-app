import { useRef, useState } from 'react';
import classes from './Checkout.module.css';
import Modal from '../UI/Modal';

const Checkout = (props) => {

    

    const checkinputref = useRef();
    const checkstreetinputref = useRef();
    const checkpostalinputref = useRef();
    const checkcityinputref = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const entername = checkinputref.current.value
        const enterstreetname = checkstreetinputref.current.value
        const enterpostalname = checkpostalinputref.current.value
        const entercityname = checkcityinputref.current.value

        props.onConfirm({
            name: entername,
            street: enterstreetname,
            postalcode: enterpostalname,
            cityname: entercityname,
        });
    };


    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' ref={checkinputref} id='name' />
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Street</label>
                <input type='text' ref={checkstreetinputref} id='street' />
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' ref={checkpostalinputref} id='postal' />
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input type='text' ref={checkcityinputref} id='city' />
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit} onClick={props.onclose} >Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;



