import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectTraining, fetchTrainings } from '../../../actions';
import TrainingCard from './TrainingCard/TrainingCard';
import TrainingDetail from '../TrainingDetail/TrainingDetail';

class TrainingList extends Component {
    componentDidMount() {
        this.props.fetchTrainings();
    }

    renderList() {
        return this.props.trainings.map(training => {
            return (
                <div key={training.id} className="sixteen wide mobile six wide tablet four wide computer column">
                    <div className="training-card" onClick={() => this.props.selectTraining(training)}>
                        <TrainingCard
                            training={training}
                        />
                    </div>
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

                {this.renderList()}

                <TrainingDetail />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { trainings: state.trainings };
};

export default connect(mapStateToProps, { selectTraining, fetchTrainings })(TrainingList);