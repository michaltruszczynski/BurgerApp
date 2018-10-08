import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css';


const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div
            className={classes.Modal}
            style={{
                trnsform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                display: props.show ? 'block' : 'none'
            }}>
            {props.children}
        </div>
    </Aux>
)

export default modal;