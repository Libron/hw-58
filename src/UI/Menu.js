import React from 'react';
import './Menu.css';

const Menu = props => {
    return (
        <nav className={props.class}>
            {props.list.map(item=>{
                return <a href="http://google.com" key={item}>{item}</a>
            })}
        </nav>
    );
};

export default Menu;