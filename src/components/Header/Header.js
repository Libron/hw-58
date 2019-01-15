import React from 'react';
import './Header.css';
import Menu from "../../UI/Menu/Menu";
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <header>
            <div className="container clearfix">
                <img className="logo" src={logo} width="151px" height="47px" alt="logo" />
                <Menu
                    class={'main-menu'}
                    list={['Home', 'About', 'Service', 'Contact']}
                />
            </div>
        </header>
    );
};

export default Header;