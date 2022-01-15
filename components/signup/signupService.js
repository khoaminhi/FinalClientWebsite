const {models} = require('../../models')
const Account = models.customers
exports.signup = async (email, password) => {
    try{
        const account = await Account.findOne({where: {email: email}, raw: true});
        if (account) {
            throw new Error('Email already registered');
        }
        const new_account = await Account.create({email: email, password: password, name: email,
            id: email, age: 20, createddate: '2021-11-12', 
            locked: null, phone: '0334487689'});
        return new_account;
    }
    catch (err) {
        return done(err);
    }
};