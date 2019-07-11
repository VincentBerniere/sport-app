import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import jsonTraining from '../../../api/training';
import TrainingCard from '../TrainingCard/TrainingCard';

class Profile extends Component {
    state = {
        trainings: [],
        redirect: false
    }

    componentDidMount() {
        this.fetchMyTrainings();
    }

    fetchMyTrainings() {
        jsonTraining
            .get()
            .then(res => this.setState({ trainings: res.data }));
    }

    renderList() {
        if (!this.state.trainings) return '';

        return this.state.trainings.map(training => {
            return (
                <div key={training.id} className="boards-element">
                    <TrainingCard
                        training={training}
                    />
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui centered grid">
                <div className="row">
                    <Link to="/trainings/new">
                        <button className="ui primary button">
                            Créer un entraînement
                        </button>
                    </Link>
                </div>

                <div id="boards">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

export default Profile;