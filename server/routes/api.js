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
    // res.send(`Account created!`);
    BankAccountCollection.create(req.body,(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Read bank account by account number
router.get('/:accountNumber',(req,res)=>{
    console.log(`Get request of ${req.params.accountNumber}!`)
    // res.send(`Read specific account!`);
    BankAccountCollection.findOne({accountNumber:req.params.accountNumber},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Update bank account balance to 100
router.put('/:accountNumber',(req,res)=>{
    console.log(`Update request of ${req.params.accountNumber}!`)
    // res.send(`Account updated!`);
    BankAccountCollection.findOneAndUpdate({accountNumber:req.params.accountNumber}, {accountBalance:100}, {results:true},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Update bank account balance to 0
router.put('/remove/:accountNumber',(req,res)=>{
    console.log(`Update by removing balance request of ${req.params.accountNumber}!`)
    // res.send(`Account deleted!`);
    BankAccountCollection.findOneAndUpdate({accountNumber:req.params.accountNumber}, {accountBalance:0}, {results:true}, (errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Read all bank accounts
router.get('/',(req,res)=>{
    console.log(`Get request of all accounts!`)
    // res.send(`Reading all accounts!`);
    BankAccountCollection.find({},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})


// //sanity
// router.get('/test',(req,res)=>{
//     res.send(`Loud and Clear`);
// })

//export route
module.exports = router;