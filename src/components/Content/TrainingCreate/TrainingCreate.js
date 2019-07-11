import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import jsonTraining from '../../../api/training';
import PracticeItemEditable from '../PracticeItemEditable/PracticeItemEditable';

class TrainingCreate extends Component {
    state = {
        redirect: false,
        trainingId: null,
        training: {},
        practices: []
    };

    createTraining = event => {
        event.preventDefault();

        jsonTraining.post('', this.state.training)
            .then(res => {
                if (res.data) {
                    this.setState({ redirect: true, trainingId: res.data });
                }
            });
    }

    practiceIsValid(practice) {
        return !(!practice.name || /^\s*$/.test(practice.name));
    }

    addPractice = () => {
        if (this.state.practices.length > 0 && 
            !this.practiceIsValid(this.state.practices[this.state.practices.length - 1])) 
            return;

        const practices = this.state.practices;
        practices.push({});

        this.setState({practices});
    }

    renderPracticeItemEditables() {
        if (!this.state.practices || this.state.practices.length <= 0)
            return '';

        return this.state.practices.map((practice, i) => {
            return (
                <PracticeItemEditable key={i} practice={practice} />
            );
        });
    }

    renderRedirect = () => {
        if (this.state.redirect && this.state.trainingId) {
            return <Redirect to={`/trainings/${this.state.trainingId}/detail`} />
        }
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.createTraining}>
                <div className="field">
                    <label>Titre</label>
                    <input id="title" type="text" name="title" placeholder="Titre" required maxLength="100"
                        onChange={event => this.setState({ training: { ...this.state.training, title: event.target.value } })} />
                </div>

                <div className="field">
                    <label>Description</label>
                    <textarea id="description" placeholder="Description" required maxLength="5000"
                        onChange={event => this.setState({ training: { ...this.state.training, description: event.target.value } })}>
                    </textarea>
                </div>

                <div className="field">
                    <h4 className="ui header">
                        {!this.props.practices || this.props.practices.length <= 1 ? 'Excercice' : 'Excercices'} :
                    </h4>

                    {this.renderPracticeItemEditables()}

                    <i className="plus circle icon" onClick={this.addPractice}></i>
                </div>

                <button className="ui primary button">Créer</button>

                {this.renderRedirect()}
            </form>
        );
    }
}

export default TrainingCreate;