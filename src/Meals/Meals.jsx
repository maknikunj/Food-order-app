import { Fragment } from 'react';
import Mealssummary from './Mealssummary';
import Availablemeals from './Availablemeals';


const Meals = () => {

    return (
        <Fragment>
            <Mealssummary/>
            <Availablemeals/>
        </Fragment>
    );
};

export default Meals;