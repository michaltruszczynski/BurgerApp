import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css';


class Modal extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        // if (nextProps.show !== this.props.show) {
        //     return (true);
        // }
        return nextProps.show !== this.props.show;

    }
    componentWillUpdate() {
        console.log('[Mondal] WillUpdate')
    }
    
    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        trnsform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        display: this.props.show ? 'block' : 'none'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}


export default Modal;