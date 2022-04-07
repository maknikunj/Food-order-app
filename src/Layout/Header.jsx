import { Fragment } from "react"
import Deliciousimg from '../index.jpeg';
import classes from './Header.module.css';
import Headercartbutton from './Headercartbutton';

const Headerinput = (props) => {

    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Chops & Hops</h1>
                <Headercartbutton onclick={props.onshowcart} />
            </header>
            <div className={classes['main-image']}>
                <img src={Deliciousimg} alt='A Full Of Delicious Food!' />
            </div>
        </Fragment>
    );
};

export default Headerinput;