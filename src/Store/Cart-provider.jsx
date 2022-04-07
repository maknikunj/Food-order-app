import React, { useReducer } from 'react';
import CartContext from './Cart-context';

const defaultcarstate = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {

    if (action.type === 'ADD') {
        console.log(state.items)
        const updatedtotalamount = state.totalAmount + action.item.price * action.item.amount;
        console.log(updatedtotalamount)
        console.log(action.item.amount)
        const existingcartitemindex = state.items.findIndex((item) => item.id === action.item.id);
        console.log(existingcartitemindex)
        const existingcartitem = state.items[existingcartitemindex]

        let updateditems;

        if (existingcartitem) {
            const updateditem = { ...existingcartitem, amount: existingcartitem.amount + action.item.amount }
            console.log(updateditem)
            updateditems = [...state.items];
            updateditems[existingcartitemindex] = updateditem;
            console.log(updateditem)
        } else {
            updateditems = state.items.concat(action.item);
        }
        return {
            items: updateditems,
            totalAmount: updatedtotalamount
        }

    }


    if (action.type === 'REMOVE') {

        const existingcartitemindex = state.items.findIndex((item) => item.id === action.id)
        const existingitem = state.items[existingcartitemindex];
        const updatedtotalamount = state.totalAmount - existingitem.price;

        let updateditems;

        if (existingitem.amount === 1) {
            updateditems = state.items.filter((item) => item.id !== action.id);
        } else {
            const updateditem = { ...existingitem, amount: existingitem.amount - 1 };
            console.log(updateditem)
            updateditems = [...state.items];
            console.log(updateditems)
            updateditems[existingcartitemindex] = updateditem;
            console.log(updateditems)
        }
        return {
            items: updateditems,
            totalAmount: updatedtotalamount
        }
    }
    return defaultcarstate;
};

const Cartprovider = (props) => {

    const [carsstate, dispatchcaraction] = useReducer(cartReducer, defaultcarstate);

    const additemcarthandler = (item) => {
        dispatchcaraction({ type: 'ADD', item: item })
    };

    const removeitemcarthandler = (id) => {
        dispatchcaraction({ type: 'REMOVE', id: id })
    };

    const cartContext = {

        items: carsstate.items,
        totalAmount: carsstate.totalAmount,
        amount: carsstate.amount,
        addItem: additemcarthandler,
        removeItem: removeitemcarthandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default Cartprovider;