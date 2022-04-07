import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import { useContext, useState } from 'react';
import CartContext from '../Store/Cart-context';
import Cartitem from './Cartitem';
import Checkout from '../Meals/Checkout';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [order, setorder] = useState(false);
  const [details, setdetails] = useState(false);
  const [ischeckout, setischeckout] = useState(false);
  const[input,setinput]=useState('')

  const totalAmount = `Rs.${cartCtx.totalAmount.toFixed(0)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 ,input})
  };

  const onchanghandler=(e)=>{
    setinput(e.target.value)
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => 
      <li className={classes['cart-item']}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{`Rs.${item.price.toFixed(0)}`}</span>
          <span className={classes.amount}>x {item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={cartItemRemoveHandler.bind(null,item.id)}>−</button>
      
       <button onClick={cartItemAddHandler.bind(null,item)}>+</button>
      </div>
    </li>
        
        // <Cartitem
        //   key={item.id}
        //   name={item.name}
        //   amount={item.amount}
        //   price={item.price}
        //   onRemove={cartItemRemoveHandler.bind(null, item.id)}
        //   onAdd={cartItemAddHandler.bind(null, item)}
        // />
      )}
    </ul>
  );
  const submitorderdetailshandler = (userdata) => {
    fetch('https://meals-order-a42d8-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userdata,
        orderitem: cartCtx.items,
      })
    });
  };

  const orderhandler = () => {
    setischeckout(true)
  };

  const modalaction = <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
    {hasItems && <button onClick={orderhandler} className={classes.button}>Order</button>}
  </div>



  const oredersubmit = () => {
    setorder(true)
  }

  if (order) {
    return (
      <Modal>
        <div>
          <p className={classes.modalstyle} >Order Successfully! </p>
          <p className={classes.modalstyle2} >your Delicious Food is On the way ! </p>
          <button className={classes.backtomenu} onClick={props.onClose} >Back To Menu</button>
        </div>
      </Modal>
    )
  } else {
    return (
      <div className={classes.cartscroll}>
        <Modal onClose={props.onClose}>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          {ischeckout && <Checkout onclose={oredersubmit} onConfirm={submitorderdetailshandler} onCancel={props.onClose} />}
          {!ischeckout && modalaction}
        </Modal>
      </div>
    );
  };
};

export default Cart;




