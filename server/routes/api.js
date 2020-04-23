//create route
let express = require('express');
let router = express.Router();
//pull in json middleware
router.use(express.json());

//import model
let BankAccountCollection = require('../models/BankAccountSchema');

//sanity
router.get('/test',(req,res)=>{
    res.send(`Loud and Clear`);
})

//export route
module.exports = router;