import React, {
    Component
} from 'react';
import Card from './Card/Card';

class Training extends Component {
    state = { trainings: [{}, {}, {}, {}, {}] };
    renderCardsContent() {
        const trainingsCard = this.state.trainings.map((training) => {
            return (
                <div class="six wide tablet four wide computer column">
                    <Card />
                </div>
            );
        });

        return (
            <div class="ui grid centered">
                {trainingsCard}
            </div>
        );
    }

    render() {
        return ( 
            <div>  
                {this.renderCardsContent()}
            </div>
        );
    }
}

export default Training;