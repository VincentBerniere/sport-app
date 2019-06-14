import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = { email: '', password: '' };
    }

    onLoginFormSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1 className="ui header">Login</h1>
                
                <div className="ui segment">
                    <form className="ui form" onSubmit={this.onLoginFormSubmit}>
                        <div className="field">
                            <label>Adresse e-mail</label>
                            <input id="email" type="email" onChange={event => this.setState({ email: event.target.value })} required />
                        </div>

                        <div className="field">
                            <label>Mot de passe</label>
                            <input id="password" type="password" onChange={event => this.setState({ password: event.target.value })} required />
                        </div>

                        <button className="ui primary button" type="submit">Connexion</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;