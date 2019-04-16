import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTraining, fetchTrainings } from '../../../actions';
import TrainingCard from './TrainingCard/TrainingCard';

class TrainingList extends Component {
    componentDidMount() {
        this.props.fetchTrainings();
    }

    renderList() {
        return this.props.trainings.map(training => {
            return (
                <div key={training.id} className="sixteen wide mobile six wide tablet four wide computer column">
                    <div onClick={() => this.props.selectTraining(training)}>
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
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { trainings: state.trainings };
};

export default connect(mapStateToProps, { selectTraining, fetchTrainings })(TrainingList);