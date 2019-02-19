import React from 'react';
import { connect } from 'react-redux';

const TrainingDetail = ({ training }) => {
    if (!training) {
        return <div></div>;
    }

    return (
        <div className="ui container grid">
            <div className="ui row">
                <h4>{training.title}</h4>

                <p>Autheur: {training.author}</p>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return { training: state.selectedTraining };
};

export default connect(mapStateToProps)(TrainingDetail);