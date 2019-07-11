import React from 'react';

const PracticeItemEditable = ({ practice }) => (
    <div className="item">
        <i className="large github middle aligned icon"></i>
        <div className="content">
            <div className="header">
                <input type="text" value={practice.name} maxLength="100" />
            </div>
            <div className="description">
                Série: {practice.serie}, 

                Répétition: {practice.repetition}, 

                Temps de repos: {practice.timeout}
            </div>
        </div>
    </div>
);

export default PracticeItemEditable;