const {models} = require('../../models')
const Account = models.customers
exports.signup = async (email, password) => {
    try{
        const account = await Account.findOne({where: {email: email}, raw: true});
        if (account) {
            console.log('email already registered');
            throw new Error('Email already registered');
        }
        console.log(email, password)
        const new_account = await Account.create({email: email, password: password, name: email,
            id: email, age: 20, createddate: '2021-11-12', 
            locked: null, phone: '0334487689'});
        console.log("CREATE OBJECT SUCCESSFULLY !!");
        console.log(new_account.email, new_account.password);
        return new_account;
    }
    catch (err) {
        return done(err);
    }
};