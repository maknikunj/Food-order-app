import { useContext } from 'react';
import Cartitem from '../Cart/Cartitem';
import cartContext from '../Store/Cart-context';
import classes from './Mealitem.module.css';
import Mealitemform from './Mealitemform';


const Mealitem = (props) => {
    const cartCtx = useContext(cartContext);

    const addtocarthandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{`Rs.${props.price.toFixed(0)}`}</div>
            </div>
            <div>
                <Mealitemform id={props.id} onAddtocart={addtocarthandler} />
            </div>
        </li>
    );

};

export default Mealitem;
