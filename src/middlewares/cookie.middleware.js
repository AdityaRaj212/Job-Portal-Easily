let save_info = (req,res,next)=>{
    if(!req.cookies.userName){
        res.cookie('userName','adi',{
            maxAge: 5*60*1000
        })
    }
    next();
};

export default save_info;