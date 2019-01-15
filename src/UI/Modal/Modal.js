import React, { Fragment } from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
    return (
        <Fragment>
            <Backdrop show={props.show} onClick={props.closed} />

            <div className="Modal"
                 style={{display: props.show ? 'block' : 'none',
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'}}
            >
                <div>
                    <h3 >{props.title}</h3>
                    <button className="btn-close-modal" onClick={props.closed}>X</button>
                </div>
                {props.children}
            </div>
        </Fragment>
    );
};

export default Modal;