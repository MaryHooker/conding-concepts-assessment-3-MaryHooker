import React, { Component } from 'react';
import AddAccount from './AddAccount';
import ListAccounts from './ListAccounts';
import ViewAccount from './ViewAccount';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addAccountForm: false,
            listAllAccounts: false,
        }
    }

    //when add account button is clicked/display form
    addAccount = () => {
        this.setState(
            {
                addAccountForm: true
            }
        )
        //hide list
        this.setState(
            {
                listAllAccounts: false
            }
        )
    }

    //when available accounts button is clicked/display all accounts
    showAccounts = () => {
        this.setState(
            {
                listAllAccounts: true
            }
        )
        //hide form
        this.setState(
            {
                addAccountForm: false
            }
        )
    }

    render() {
        let displayForm;
        let displayAccounts;

        //conditionally rendering account form 
        if (this.state.addAccountForm) {
            displayForm = <AddAccount />
        }

        //conditionally rendering account list
        if (this.state.listAllAccounts) {
            displayAccounts = <ListAccounts />
        }
        return (
            <div>
                <Router>
                    <Link to='/'>Home</Link>
                    <h1>Bank Account Manager</h1>
                    <div className='appContainer'>
                    <div>
                        <button onClick={this.addAccount}>Add Bank Account</button>
                    </div>
                    <div>
                        <button onClick={this.showAccounts}>Available Accounts</button>
                    </div>
                    <div>
                        {displayForm}
                    </div>
                    <div>
                        {displayAccounts}
                    </div>
                    </div>
                    <Route path={'/details/:accountNumber'} component={ViewAccount}/>
                </Router>
        
            </div >
        );
    }
}

export default AppContainer;