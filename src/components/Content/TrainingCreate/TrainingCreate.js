import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTraining } from '../../../actions';

class TrainingCreate extends Component {
    createTraining = event => {
        event.preventDefault();

        this.props.createTraining(this.state.training);
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.createTraining}>
                <div className="field">
                    <label>Titre</label>
                    <input id="title" type="text" name="title" placeholder="Titre" required
                        onChange={event => this.setState({ training: { title: event.target.value } })}>
                    </input>
                </div>

                <div className="field">
                    <label>Description</label>
                    <textarea id="description" placeholder="Description" 
                        onChange={event => this.setState({ training: { description: event.target.value } })}>
                    </textarea>
                </div>

                <button className="ui primary button">Créer</button>
            </form>
        );
    }
}

TrainingCreate.defaultProps = {
    training: {}
}

export default connect(null, { createTraining })(TrainingCreate);