import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTraining } from '../../../actions';

import TrainingCard from './TrainingCard/TrainingCard';

class TrainingList extends Component {
    renderList() {
        const trainingList = this.props.trainings.map(training => {
            return (
                <div key={training.id} className="six wide tablet four wide computer column">
                    <div onClick={() => this.props.selectTraining(training)}>
                        <TrainingCard 
                            training={training}
                        />
                    </div>
                </div> 
            );
        });

        return (
            <div className="ui grid centered">
                {trainingList}
            </div>
        );
    }

    render() {
        return ( 
            <div>  
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { trainings: state.trainings };
};

export default connect(mapStateToProps, { selectTraining })(TrainingList);