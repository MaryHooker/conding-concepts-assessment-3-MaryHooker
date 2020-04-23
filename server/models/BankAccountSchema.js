//create model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create new instance of schema
let BankAccountSchema = new Schema(
    {
        accountNumber: {type:Number, unique:true},
        accountType: String,
        accountName: String,
        accountBalance: Number,
       
    } , { timestamps: true }
);

//export model
module.exports = mongoose.model('200423bankAccounts', BankAccountSchema);

