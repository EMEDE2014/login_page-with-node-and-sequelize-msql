const bcryptjs = require('bcryptjs');
const e = require('connect-flash');
const User = require('../models/User');




exports.register = (req, res, next) => {
    res.render('register');
    next();
}

exports.receive = (req, res) => {
const name = req.body.name;
const email = req.body.email;
const password = req.body.password;
const sex = req.body.sex;

const salt = bcryptjs.genSaltSync();
const hash = bcryptjs.hashSync(password, salt);

User.findOne({where: {email: email}}).then((user) => {
if(user == undefined){
    User.create({
        name:name,
        email:email,
        password:hash,
        sex:sex
    }).then(() => {
        res.redirect('/')
    })
}else{
    res.redirect('/register/user')}
}).catch(() => {
    res.redirect('/register/user');
});
}

exports.login = (req, res) =>{
    res.render('login');
}
exports.receiveLogin = (req, res) =>{
 const email = req.body.email;
 const password = req.body.password;
    User.findOne({where:{email:email}}).then((user) =>{
        if(user !== undefined){
            const correct = bcryptjs.compareSync(password, user.password);
            if(correct){
                req.session.user = {
                    id: user.id,
                    email: user.email
                }
                res.redirect('/');
            }else{
                res.redirect('/register/user')
            }
        }else{
            res.redirect('/register/user');
        }
    });
}

exports.logout = (req, res) => {
    req.session.destroy();
    return res.redirect('/user/login');
}