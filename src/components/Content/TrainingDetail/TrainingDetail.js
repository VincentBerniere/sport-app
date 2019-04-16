import React from 'react';
import { connect } from 'react-redux';
import './TrainingDetail.scss';

const TrainingDetail = ({ training }) => {
    if (!training) {
        return <div></div>;
    }

    return (
        <div id="training-detail" className="ui main text">
            <h1 className="ui header">Semantic UI Fixed Template</h1>

            <div className="meta">Autheur: {training.author}</div>
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return { training: state.selectedTraining };
};

export default connect(mapStateToProps)(TrainingDetail);