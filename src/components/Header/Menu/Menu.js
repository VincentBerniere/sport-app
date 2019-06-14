import React, { Component } from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';
import './Menu.scss';

import Search from './Search/Search.js';

class Menu extends Component {
    render() {
        return (
            <div className="ui fixed inverted menu">
                <div className="ui container">
                    <Link to="/" className="header item">
                        <img className="logo" alt="logo" src={faker.image.avatar()} />
                        SportApp
                    </Link>

                    <Link to="/trainings" className="item">
                        Entraînement
                    </Link>

                    <Link to="/nutrition" className="item">
                        Nutrition
                    </Link>

                    <div className="right menu">
                        <div className="item">
                            <Search />
                        </div>
                        <div className="item">
                            <Link to="/signin" className="ui inverted button">Connexion</Link>

                            <Link to="/signup" id="sign-up" className="ui inverted button">Inscription</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;