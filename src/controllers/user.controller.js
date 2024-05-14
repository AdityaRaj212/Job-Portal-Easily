import UserModel from "../models/user.model.js";
import jobsModel from "../models/jobs.model.js";

export default class UserController{
    getRegister(req,res){
        res.render('userRegistration');
    }

    postRegister(req,res){
        const {name,email,password,user_type} = req.body;
        UserModel.add_user(name,email,password,user_type);
        res.redirect('/login');
    }

    getLogin(req,res){
        res.render('userLogin',{errorMessage:null});
    }

    postLogin(req,res){
        const {email,password,user_type} = req.body;
        const user = UserModel.is_valid_user(email,password);

        if(!user){
            res.render('userLogin',{errorMessage: "Invalid credentials"});
        }
        req.session.userEmail = email;
        req.session.userName = user.name;
        req.session.userPassword = user.password;
        req.session.userType = user.user_type;
        req.session.userId = user.id;

        res.locals.userEmail = email;
        res.locals.userType = user.user_type;
        const jobs = jobsModel.list_jobs();
        res.render('listing',{jobs});
        console.log('yo');
    }

    logout(req,res){
        req.session.destroy((err)=>{
            if(err){
                console.log(err);
            }
            else{
                res.redirect('/login');
            }
        })
    }
}