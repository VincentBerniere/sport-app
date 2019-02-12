import React, {
    Component
} from 'react';
import Training from './Training/Training';
import Authentification from './Authentification/Authentification';

class Content extends Component {
    render() {
        return ( 
            <div>  
                <Authentification />
                <br /><br/>
                <Training />
            </div>
        );
    }
}

export default Content;