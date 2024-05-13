import UserModel from "../models/user.model.js";
import jobsModel from "../models/jobs.model.js";

export default class UserController{
    getRegister(req,res){
        res.render('userRegistration');
    }

    postRegister(req,res){
        const {name,email,password} = req.body;
        UserModel.add_user(name,email,password);
        res.redirect('/login');
    }

    getLogin(req,res){
        res.render('userLogin',{errorMessage:null});
    }

    postLogin(req,res){
        const {email,password} = req.body;
        const user = UserModel.is_valid_user(email,password);

        if(!user){
            res.render('userLogin',{errorMessage: "Invalid credentials"});
        }
        req.session.userEmail = email;
        res.locals.userEmail = email;
        const jobs = jobsModel.list_jobs();
        res.render('listing',{jobs});
        console.log('yo');
        // req.session.save((err) => {
        //     if (err) {
        //         console.error('Error saving session:', err);
        //     }
        //     // Redirect after saving session
        //     res.redirect('/jobs');
        // });
        // res.redirect('/jobs');
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