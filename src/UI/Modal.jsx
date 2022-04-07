import classes from './Modal.module.css';
import ReactDom from 'react-dom'
import { Fragment } from 'react';



const Backdrop = (props) => {

    return (<div className={classes.backdrop} onClick={props.onClose} />)
    
};
    const Modaloverlay = (props) => {
        return (<div className={classes.modal}>
            <div className={classes.content}>{props.children}</div></div>);
    };

const portalelement = document.getElementById('overlays');

const Modal = (props) => {

    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onClose ={props. onClose}/>,portalelement)}
           {ReactDom.createPortal(<Modaloverlay>{props.children}
            </Modaloverlay>, portalelement)}
        </Fragment >
    );
};

export default Modal;


