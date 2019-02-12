import React, { Component } from 'react';
import Menu from './Menu/Menu.js';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <Menu />
            </header>
        );
    }
}

export default Header;