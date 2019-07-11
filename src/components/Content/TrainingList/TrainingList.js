import React, { Component } from 'react';
import jsonTraining from '../../../api/training';
import { Link } from 'react-router-dom';
import TrainingCard from '../TrainingCard/TrainingCard';
import './TrainingList.css';

class TrainingList extends Component {
    state = {
        trainings: []
    }

    componentDidMount() {
        this.fetchTrainings();
    }

    fetchTrainings() {
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

export default TrainingList;