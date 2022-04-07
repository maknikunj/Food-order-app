import classes from './Mealitemform.module.css';
import Input from '../UI/Input'
import { useRef, useState } from 'react';

const Mealitemform = (props) => {

    const [amountisvalid, setamountisvalid] = useState(true);
    const [input, setinput] = useState('')

    const amountinputref = useRef();

    const submithandler = (event) => {

        event.preventDefault();

        const enteredamount = amountinputref.current.value;
        console.log(enteredamount)
        const enteredamountnumber = +enteredamount;
        console.log(enteredamountnumber)

        if (enteredamount.trim().length === 0 || enteredamountnumber < 1 || enteredamountnumber > 25) {
            setamountisvalid(false);
            return;
        }
        props.onAddtocart(enteredamountnumber);
    };

    const onchangehandler = (e) => {
        setinput(e.target.value)
    }

    return (
        <div className={classes.actions} >
            <form className={classes.form} onSubmit={submithandler}>
                {/* <div className={classes.label} >
                    <label>Qty</label>
                    <input value={input} ref={amountinputref} onChange={onchangehandler} type='text' /><br /><br />
                </div> */}
                <Input  ref={amountinputref} label='Qty'  input={{
                id :'amount_'+ props.id,
                type:"number",
                min:'1' ,
                max:'10',
                step:'1',
                defaultValue:'1' 
            }}  />
                <button className={classes.buttondesign} > + Add </button>
                {!amountisvalid && <p>Please Enter a Valid Amonut(1-25)</p>}
            </form>
        </div>

    )

}
export default Mealitemform;