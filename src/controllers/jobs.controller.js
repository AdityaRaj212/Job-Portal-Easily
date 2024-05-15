import PdfParse from "pdf-parse";
import jobsModel from "../models/jobs.model.js";
import fs from 'fs';
import path from "path";

export default class JobsController{
    getWelcome(req,res){
        if(req.cookies.userName){
            console.log(req.cookies.userName);
        }
        res.render('welcome');
    }
    getListing(req,res){
        const jobs = jobsModel.list_jobs();
        res.render('listing',{jobs});
    }
    getJobDetail(req,res){
        const index = req.params.id;
        const job = jobsModel.get_job_by_index(index);
        const days_passed = jobsModel.get_days_passed(job);
        res.render('jobDetails',{job, days_passed});
    }
    getJobCreationForm(req,res){
        const curr_date = new Date();
        res.render('createJob',{curr_date,errorMessage:null});
    }
    postJobCreationForm(req,res){
        // console.log(req.body);
        jobsModel.add_job(req.body);
        res.redirect('/jobs');
    }

    getUpdateJob(req,res){
        const curr_date = new Date();
        const index = req.params.id;
        const job = jobsModel.get_job_by_index(index);
        res.render('updateJob',{curr_date,errorMessage:null,job});
    }

    postJobUpdate(req,res){
        console.log(req.body);
        jobsModel.update_job(req.body);
        res.redirect('/jobs');
    }

    getNewApplicant(req,res){
        res.render('newApplicant');
    }

    upload_file(req,res){
        const pdfPath = req.file.path;
        PdfParse(pdfPath).then((data)=>{
            res.send(data.text);
        }).catch((error)=>{
            res.status(500).send('Error parsing the PDF file');
        });
    }

    getApplicantList(req,res){
        const job_id = req.params.id;
        const job = jobsModel.get_job_by_index(job_id);
        const applicants = jobsModel.get_applicants(job_id);
        res.render('applicantList',{applicants,job});
    }

    read_file(req,res){
        const pdfPath = path.join(path.resolve(),req.params.file_path);
        // const pdfPath = req.params.file_path;
        if(fs.existsSync(pdfPath)){
            res.setHeader('Content-type','application/pdf');
            const stream = fs.createReadStream(pdfPath);
            stream.pipe(res);
        }else{
            res.status(404).send('PDF file not found');
        }
    }

    getApplyForJob(req,res){
        const job_id = req.params.job_id;
        const userName = req.session.userName;
        const userEmail = req.session.userEmail;
        res.render('applyForJob',{userName,userEmail,job_id});
    }

    postApplyForJob(req,res){
        const job_id = req.params.job_id;
        const name = req.session.userName;
        const email = req.session.userEmail;
        const contact_no = req.body.contact_no;
        const resume_path = req.file.path;
        jobsModel.add_applicant(job_id,name,email,contact_no,resume_path);
        // console.log('waa..............................');
        // console.log(req.body);
        // console.log(req.file);
        res.redirect('/jobs');
    }

    getDeleteJob(req,res){
        const job_id = req.params.job_id;
        jobsModel.delete_job(job_id);
        res.redirect('/jobs');
    }

    getError404(req,res){
        res.status(404).render('error404');
    }
}