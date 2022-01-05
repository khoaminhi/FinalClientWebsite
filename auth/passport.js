const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const {models} = require('../models')
const Account = models.customers

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
},
  async function(username, password, done) {
    try{
      const user = await Account.findOne({where: {email: username}, raw: true});
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if(!(user.password === password)){
        return done(null, false, { message: 'Incorrect password.' });
      }
      console.log(user)
      return done(null, user)}
    catch (err) {
      return done(err)
    }
  },
));
    

passport.serializeUser(function(user,done){
  done(null, {accountID: user.id, username: user.name, phone: user.phone, age: user.age, email: user.email})
})

passport.deserializeUser(function(user, done){
  return done(null, user)
})


module.exports = passport;