import { body, validationResult } from "express-validator";

const curr_date = new Date();

const validate_request = async (req,res,next)=>{
    const rules = [
        body('profile').notEmpty().withMessage("Profile can't be empty."),
        body('hirer').notEmpty().withMessage("Company name can't be empty."),
        body('salary').isFloat({gt:0}).withMessage("Salary must be a positive value."),
        body('start').custom((value)=>{
            value = new Date(value);
            if(value<curr_date){
                return false;
            }
            return true;
        }).withMessage('Joining date must be of future.'),
        body('skills').custom((value)=>{
            if(value[0]==''){
                return false;
            }
            return true;
        }).withMessage("Add at least one requied skill."),
        body('about_hirer').notEmpty().withMessage('Write something about your company.')
    ];
    
    await Promise.all(rules.map((rule)=>rule.run(req)));
    
    let validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()){
        return res.render('createJob',{curr_date,errorMessage: validationErrors.array()[0].msg})
    }
    next();
}

export default validate_request;