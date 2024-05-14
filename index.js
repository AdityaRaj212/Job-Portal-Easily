import express from 'express';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';
import session from 'express-session';
import cookieParser from 'cookie-parser';

import JobsController from './src/controllers/jobs.controller.js';
import UserController from './src/controllers/user.controller.js';
import validate_request from './src/middlewares/form_validation.middleware.js';
import upload from './src/middlewares/file_upload.middleware.js';
import auth from './src/middlewares/auth.middleware.js';
import save_info from './src/middlewares/cookie.middleware.js';

const server = new express();

const jobsController = new JobsController();
const userController = new UserController();

server.use(session({
    secret: 'jobportal',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 1*24*3600*1000,
    }
}));
server.use(save_info);
server.use(express.static('src/views'));
server.use(express.static(path.join(path.resolve(),'public')));
server.use(express.urlencoded({extended:true}));
server.use(ejsLayouts);
server.use(cookieParser());
server.set('view engine','ejs');
server.set('views',path.join(path.resolve(),'src','views'));



server.get('/',jobsController.getWelcome);
server.get('/jobs',auth,jobsController.getListing);
server.get('/jobDetail/:id',auth,jobsController.getJobDetail);
server.get('/createJob',auth,jobsController.getJobCreationForm);
server.get('/updateJob/:id',auth,jobsController.getUpdateJob);
server.get('/newApplicant',jobsController.getNewApplicant);
server.get('/applicantList/:id',auth,jobsController.getApplicantList);
server.get('/pdf/:file_path',auth,jobsController.read_file);
server.get('/register',userController.getRegister);
server.get('/login',userController.getLogin);
server.get('/logout',userController.logout);
server.get('/apply_for_job/:job_id',jobsController.getApplyForJob);

server.post('/createJob',validate_request,jobsController.postJobCreationForm);
server.post('/updateJob',validate_request,jobsController.postJobUpdate);
server.post('/upload', upload.single('pdf'),jobsController.upload_file);
server.post('/register',userController.postRegister);
server.post('/login',userController.postLogin);
server.post('/apply_for_job/:job_id',upload.single('resume_path'),jobsController.postApplyForJob);
server.post('/delete_job/:job_id',jobsController.getDeleteJob);

server.listen(3500,()=>{
    console.log('Server is up and running at 3500');
})