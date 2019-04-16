import React, { Component } from 'react';

class TrainingCard extends Component {
    render() {
        return ( 
            <div className="ui card">
                <div className="content">
                    <div className="header">{this.props.training.title}</div>

                    <div className="description">
                        Comment prendre de la masse musculaire ? Les charges à déplacer et les rythmes d'exécution sont différents selon le but visé (esthétique, puissance, maintien d'un métabolisme basal élevé)
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
            </div>
        );
    }
}

export default TrainingCard;