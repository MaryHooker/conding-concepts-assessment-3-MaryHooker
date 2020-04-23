import React,{Component} from 'react';
import AddAccount from './AddAccount';
import ListAccounts from './ListAccounts';
import ViewAccount from './ViewAccount';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>Bank Account Manager</h1>
                <AddAccount/>
                <ListAccounts/>
                <ViewAccount/>
            </div>
         );
    }
}
 
export default AppContainer;