let save_info = (req,res,next)=>{
    res.locals.userEmail = req.session.userEmail || null;
    res.locals.userType = req.session.userType || null;
    console.log(req.session);
    next();
};

export default save_info;