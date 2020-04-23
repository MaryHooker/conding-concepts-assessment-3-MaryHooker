import React, { Component } from 'react';

class AddAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountNumber: 0,
            accountType: '',
            accountName: '',
            accountBalance: 0,
        }
    }

    //update stated values
    handleInputs = (event) => {
        if (event.target.name === 'accountNumber') {
            this.setState({ accountNumber: event.target.value })
        } else if (event.target.name === 'accountType') {
            this.setState({ accountType: event.target.value })
        } else if (event.target.name === 'accountName') {
            this.setState({ accountName: event.target.value })
        } else if (event.target.name === 'accountBalance') {
            this.setState({ accountBalance: event.target.value })
        }
    }

    //On Submission send new bank account to the database
    handleSubmission = async (event) => {
        event.preventDefault();

        //form to send
        let form = {
            accountNumber: this.state.accountNumber,
            accountType: this.state.accountType,
            accountName: this.state.accountName,
            accountBalance: this.state.accountBalance,
        }
        //fetch POST endpoint
        let response = await fetch('/api', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //send into the body as string
            body: JSON.stringify(form)
        });
        let json = await response.json();
        //sanity
        console.log(json)

        //clear form
        this.setState(
            {
                accountNumber: 0,
                accountType: '',
                accountName: '',
                accountBalance: 0,
            }
        )
        //brute force redirect
        window.location = '/';
    }

    render() {
        return (
            <div>
                <h2>Add Account Form</h2>
                <form action="">
                    <div>
                        <label htmlFor="accountNumber">Account #</label>
                        <br />
                        <input type="number" name='accountNumber' id='accountNumber' value={this.state.accountNumber} onChange={this.handleInputs} />
                        <br />
                        <br />
                    </div>
                    <div>
                        <label htmlFor="accountType">Account Type:</label>
                        <br />
                        <input type="text" name='accountType' id='accountType' value={this.state.accountType} onChange={this.handleInputs} />
                        <br />
                        <br />
                    </div>
                    <div>
                        <label htmlFor="accountName">Account Name:</label>
                        <br />
                        <input type="text" name='accountName' id='accountName' value={this.state.accountName} onChange={this.handleInputs} />
                        <br />
                        <br />
                    </div>
                    <div>
                        <label htmlFor="accountBalance">Account Balance:</label>
                        <br />
                        <input type="number" name='accountBalance' id='accountBalance' value={this.state.accountBalance} onChange={this.handleInputs} />
                        <br />
                        <br />
                    </div>
                </form>
                <br />
                <button onClick={this.handleSubmission}>Submit</button>
            </div>
        );
    }
}

export default AddAccount;