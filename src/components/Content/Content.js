import React, {
    Component
} from 'react';
import Authentification from './Authentification/Authentification';
import TrainingList from './TrainingList/TrainingList';
import TrainingDetail from './TrainingDetail/TrainingDetail';

class Content extends Component {
    render() {
        return ( 
            <div>  
                <Authentification />
                <br /><br/>
                <TrainingList />
                <TrainingDetail />
            </div>
        );
    }
}

export default Content;