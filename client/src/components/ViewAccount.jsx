import React, { Component } from 'react';

class ViewAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountNumber: 0,
            accountType: '',
            accountName: '',
            accountBalance: 0,
        }
    }

    //life cycle when component loads
    componentDidMount() {
        this.loadData();
    }

    //Get one account from database
    loadData = async () => {
        //fetch read one endpoint
        let response = await fetch(`/api/${this.props.match.params.accountNumber}`);
        //get json data
        let json = await response.json();
        //sanity
        console.log(json)//coming in as object

        //place imported object in stated properties
        this.setState(
            {
                accountNumber: json.accountNumber,
                accountType: json.accountType,
                accountName: json.accountName,
                accountBalance: json.accountBalance,
            }
        )
    }
    //When +100 is clicked/ run update method to change the value of accountBalance
    addMoney = async() => {
        let form = {
            accountNumber: this.state.accountNumber,
            accountType: this.state.accountType,
            accountName: this.state.accountName,
            accountBalance: this.state.accountBalance,
        }
        //fetch update method
        let response = await fetch(`/api/${this.props.match.params.accountNumber}`, {
            method: "PUT",
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

        //Brute for redirect
        window.location = '/';
    }
    render() {
        return (
            <div>
                <h2>View Account Details</h2>
                <p>Account # {this.state.accountNumber}</p>
                <p>Type: {this.state.accountType}</p>
                <p>Name: {this.state.accountName}</p>
                <p>Balance: ${this.state.accountBalance}</p>
                <button onClick={this.addMoney}>+ $100</button>  <button onClick={this.deleteMoney}>- $100</button>
                <hr />

            </div>
        );
    }
}

export default ViewAccount;