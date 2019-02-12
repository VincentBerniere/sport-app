import React, { Component } from 'react';

class Login extends Component {
    onLoginFormSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onLoginFormSubmit}>
                    <div className="field">
                        <label>Adresse e-mail</label>
                        <input type="email" required />
                    </div>

                    <div className="field">
                        <label>Mot de passe</label>
                        <input type="password" required />
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;