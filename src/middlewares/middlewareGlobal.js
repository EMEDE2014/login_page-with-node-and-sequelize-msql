exports.middlewareGlobal = (req, res, next) =>{
    res.locals.errors = req.errors
    res.locals.success = req.success;
    next()
}


exports.verifysession = (req, res, next) =>{
    if(req.session.user != undefined){
        next();
    }else{
        res.redirect('/register/user');
    }
}

