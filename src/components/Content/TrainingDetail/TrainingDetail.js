import React, { Component } from 'react';
import jsonTraining from '../../../api/training';
import { Link, Redirect } from 'react-router-dom';
import './TrainingDetail.scss';
import PracticeList from '../PracticeList/PracticeList';
import Commentary from './Commentary/Commentary';

class TrainingDetail extends Component {
    state = {
        trainingDetail: {},
        redirectToProfile: false
    };

    componentDidMount() {
        this.fetchTrainingDetail();
    }

    fetchTrainingDetail() {
        jsonTraining
            .get(`${this.props.match.params.trainingId}/detail`)
            .then(res => this.setState({ trainingDetail: res.data }));
    }

    deleteTraining = () => {
        jsonTraining
            .delete(this.props.match.params.trainingId)
            .then(res => this.setState({ redirectToProfile: true }));
    }

    renderRedirectToProfile() {
        if (this.state.redirectToProfile) {
            return (
                <Redirect to='/profile' />
            );
        }
    }

    renderActionItems(id, className) {
        return (
            <div id={id} className={className}>
                <Link to={`/trainings/${this.state.trainingDetail.id}/edit`} className="item">
                    <i className="edit icon"></i> Editer</Link>
                <div onClick={this.deleteTraining} className="item"><i className="trash icon"></i> Supprimer</div>
                <Link className="item"><i className="twitter icon"></i> Tweet</Link>
                <Link className="item"><i className="facebook icon"></i> Share</Link>
                <Link className="item"><i className="mail icon"></i> E-mail</Link>
            </div>
        );
    }

    renderingDetail() {
        return (
            <div className="ui main text">
                <h1 className="ui header">{this.state.trainingDetail.title}</h1>

                <p>{this.state.trainingDetail.description}</p>

                <div className="meta">Autheur: {this.state.trainingDetail.author}</div>

                <div className="overlay">
                    {this.renderActionItems('vertical-menu', 'ui labeled icon vertical menu')}
                </div>
            </div>
        );
    }

    render() {
        if (!this.state.trainingDetail || !this.state.trainingDetail.id) {
            return <div></div>;
        }

        return (
            <div id="training-detail">
                {this.renderingDetail()}

                {this.renderActionItems('bottom-actions', 'ui three item menu')}

                <PracticeList practices={this.state.trainingDetail.practices} />

                {this.renderRedirectToProfile()}

                <Commentary />
            </div>
        );
    }
};

export default TrainingDetail;