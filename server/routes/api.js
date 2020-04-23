//create route
let express = require('express');
let router = express.Router();
//pull in json middleware
router.use(express.json());

//import model
let BankAccountCollection = require('../models/BankAccountSchema');


//Create new bank account
router.post('/',(req,res)=>{
    console.log(`Create request!`)
    res.send(`Account created!`);
})

//Read on bank account by account number
router.get('/:accountNumber',(req,res)=>{
    console.log(`Get request of ${req.params.accountNumber}!`)
    res.send(`Read specific account!`);
})

//Update bank account balance
router.put('/:accountBalance',(req,res)=>{
    console.log(`Update request of ${req.params.accountBalance}!`)
    res.send(`Account updated!`);
})

//Delete bank account balance
router.delete('/:accountBalance',(req,res)=>{
    console.log(`Delete request of ${req.params.accountBalance}!`)
    res.send(`Account deleted!`);
})

//Read all bank accounts
router.get('/',(req,res)=>{
    console.log(`Get request of all accounts!`)
    res.send(`Reading all accounts!`);
})


// //sanity
// router.get('/test',(req,res)=>{
//     res.send(`Loud and Clear`);
// })

//export route
module.exports = router;