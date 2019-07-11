import React, { Component } from 'react';
import './PracticeList.scss';
import PracticeItem from './PracticeItem/PracticeItem';

class PracticeList extends Component {
    renderPracticeItems() {
        if (!this.props.practices || this.props.practices.length <= 0)
            return '';
        
        return this.props.practices.map(practice => {
            return (
                <PracticeItem key={practice.id} practice={practice} />
            );
        });
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                <h4 className="ui header">{!this.props.practices || this.props.practices.length <= 1 ? 'Excercice' : 'Excercices'} :</h4>

                {this.renderPracticeItems()}
            </div>
        );
    }
}

PracticeList.defaultProps = {
    practices: []
}

export default PracticeList;
