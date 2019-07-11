import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import jsonTraining from '../../../api/training';

class TrainingEdit extends Component {
    state = {
        redirect: false,
        training: {}
    };

    componentDidMount() {
        this.fetchTrainingById();
    }

    fetchTrainingById() {
        jsonTraining.get(`${this.props.match.params.trainingId}/detail`)
            .then(res => {
                if (res.data) {
                    this.setState({ training: res.data });
                }
            });
    }

    updateTraining = event => {
        event.preventDefault();

        jsonTraining.put('', this.state.training)
            .then(res => {
                this.setState({ redirect: true });
            });
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={`/trainings/${this.props.match.params.trainingId}/detail`} />
        }
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.updateTraining}>
                <div className="field">
                    <label>Titre</label>
                    <input id="title" type="text" name="title" placeholder="Titre" required maxLength="100" value={this.state.training.title}
                        onChange={event => this.setState({ training: { ...this.state.training, title: event.target.value } })} />
                </div>

                <div className="field">
                    <label>Description</label>
                    <textarea id="description" placeholder="Description" required maxLength="5000" value={this.state.training.description}
                        onChange={event => this.setState({ training: { ...this.state.training, description: event.target.value } })}>
                    </textarea>
                </div>

                <button type="submit" className="ui primary button">Sauvegarder</button>

                {this.renderRedirect()}
            </form>
        );
    }
}

export default TrainingEdit;