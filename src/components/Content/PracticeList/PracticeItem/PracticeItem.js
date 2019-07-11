import React from 'react';

const PracticeItem = ({ practice }) => (
    <div className="item">
        <i className="large github middle aligned icon"></i>
        <div className="content">
            <div className="header">{practice.name}</div>
            <div className="description">
                Série: {practice.serie}, 

                Répétition: {practice.repetition}, 

                Temps de repos: {practice.timeout}
            </div>
        </div>
    </div>
);

export default PracticeItem;