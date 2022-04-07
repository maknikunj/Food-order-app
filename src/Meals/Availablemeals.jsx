import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './Availablemeals.module.css';
import Mealitem from './Mealitem';

const MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];


const DummyMEALS = () => {

    const [meals, setmeals] = useState(MEALS);
    const [httperror, sethttperror] = useState();

//     useEffect(() => {

//         const fetchmeals = async () => {
//             const response = await fetch('https://meals-order-a42d8-default-rtdb.firebaseio.com/meals.json')
//             const responsedata = await response.json();
//             console.log(responsedata)
//             const loadedmeals = [];

//             if (!response.ok) {
//                 throw new Error('Something went wrong');
//             }

//             for (const key in responsedata) {
//                 loadedmeals.push({
//                     id: key,
//                     name: responsedata[key].name,
//                     description: responsedata[key].description,
//                     price: responsedata[key].price,
//                 });
//             };
//             setmeals(loadedmeals);
//             console.log(loadedmeals)
//         };

        
//             fetchmeals().catch((error)=>{
//             sethttperror(error.message);
//         })
//     }, []);

//     if(httperror){
//         return(
//             <p>{httperror}</p>
//         )
//     }

    const mealsList = meals.map((meals) =>
        <Mealitem key={meals.id} id={meals.id}
            name={meals.name}
            description={meals.description}
            price={meals.price} />

    );

    return (
        <section className={classes.meals}>
            <Card>
                <ul >{mealsList}</ul>
            </Card>
        </section>
    );
};

export default DummyMEALS;