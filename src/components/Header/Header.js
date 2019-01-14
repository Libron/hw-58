import React from 'react';
import './Header.css';
import Menu from "../../UI/Menu";
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <header>
            <div className="container clearfix">
                <img className="logo" src={logo} width="151px" height="47px" alt="logo" />
                <Menu
                    class={'main-menu'}
                    list={['About', 'How It Works', 'Services', 'FAQ', 'Contact']}/>
            </div>
        </header>
    );
};

export default Header;