const signupService = require('./signupService')

exports.signup = async (req, res) => {
    const {email, password} = req.body;
    try{
        if(!email || !password){
            res.render('signup', {errorCode: 1});
        }else{
            await signupService.signup(email, password);
            res.redirect('/login');
        }
    }catch (error){
        res.render('signup', {errorCode: 2})
    }
}