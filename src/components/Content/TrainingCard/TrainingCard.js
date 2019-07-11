import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './TrainingCard.scss';

class TrainingCard extends Component {
    state = {
        redirect: false,
        description: ''
    };

    componentDidMount() {
        const maxSizeOfDescription = 200;

        if (this.props.training.description.length > maxSizeOfDescription) {
            this.setState({ description: this.props.training.description.substring(1, maxSizeOfDescription) + '...' });
        } else {
            this.setState({ description: this.props.training.description });
        }
    }

    goToTrainingDetail = () => {
        this.setState({ redirect: true });
    }

    renderRedirectToTrainingDetail = () => {
        if (this.state.redirect) {
            return <Redirect to={`/trainings/${this.props.training.id}/detail`} />
        }
    }

    render() {
        return ( 
            <div className="training-card ui card">
                <div className="content" onClick={this.goToTrainingDetail}>
                    <div className="header">
                        {this.props.training.title}
                    </div>

                    <div className="description">
                        {this.state.description}
                    </div>
                </div>
                    
                <div className="extra content">
                    <span className="left floated like">
                        <i className="like icon"></i>
                        Like
                    </span>
                    <span className="right floated star">
                        <i className="star icon"></i>
                        Favorite
                    </span>
                </div>

                {this.renderRedirectToTrainingDetail()}
            </div>
        );
    }
}

TrainingCard.defaultProps = {
    training: {}
}

export default TrainingCard;
