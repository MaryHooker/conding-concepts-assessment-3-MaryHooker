import React,{Component} from 'react';

class ListAccounts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            availableAccounts:[],
         }
    }

    //lifecycle method to run inner function when component mounts
    componentDidMount(){
        this.loadData();
    }

    //Fetch all accounts from database
    loadData = async() => {
        //fetch from endpoint
        let response = await fetch('/api');
        //pull out json data
        let json = await response.json();
        //sanity
        console.table(json);
        //place data in stated array
        this.setState(
            {
                availableAccounts:json
            }
        )

    }

    render() { 
        return ( 
            <div>
                <h2>Available Accounts</h2>
                {
                    this.state.availableAccounts.map((account)=>{
                        return(
                            <div key={account._id}>
                                <p>Account # {account.accountNumber}</p>
                                <p>Type: {account.accountType}</p>
                                <p>Name: {account.accountName}</p>
                                <p>Balance: ${account.accountBalance}</p>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
         );
    }
}
 
export default ListAccounts;