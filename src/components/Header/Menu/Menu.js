import React, { Component } from 'react';
import faker from 'faker';
import './Menu.scss';

import Search from './Search/Search.js';

class Menu extends Component {
    render() {
        return (
            <div className="ui fixed inverted menu">
                <div className="ui container">
                    <a href="#" className="header item">
                        <img className="logo" alt="logo" src={faker.image.avatar()} />
                        SportApp
                    </a>
                    <a href="#" className="item">
                        Entraînement
                    </a>
                    <a href="#" className="item">
                        Nutrition
                    </a>

                    <div className="right menu">
                        <div className="item">
                            <Search />
                        </div>
                        <div className="item">
                            <a className="ui inverted button">Connexion</a>
                            <a id="sign-up" className="ui inverted button">Inscription</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;