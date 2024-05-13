export default class jobsModel{
    static list_jobs(){
        const reversed_jobs = [...jobs].reverse();
        return reversed_jobs;
    }

    static get_job_by_index(id){
        const job = jobs.find((j)=>j.id==id);
        return job;
    }

    static get_days_passed(job){
        const post_date = new Date(job.posting_date);
        const curr_date = new Date();
        let diff = curr_date.getTime()-post_date.getTime();
        let diff_in_days = Math.round(diff/(1000*3600*24));
        return diff_in_days;
    }

    static add_job(job){
        job.id = jobs.length+1;
        jobs.push(job);
    }

    static update_job(job){
        const index = jobs.findIndex((j)=>j.id==job.id);
        jobs[index] = job;
    }

    static get_applicants(job_id){
        const job = jobs.find((job)=>job.id==job_id);
        return job.applicants;
    }
}

const jobs = [
    {
        "id": 1,
        "profile": "SDE-1",
        "hirer": "Google",
        "location": "Bangalore",
        "start": '2024-04-20',
        "salary": "20 LPA",
        "experience": "Fresher",
        "posting_date": "2024-05-09",
        "info_tag": ["Job"],
        "description": "We are looking for a dynamic individual to join our team for Health Insurance in Mumbai.",
        "responsibilities": [
            "Assist in production planning",
            "Determine the best use of resources",
            "Train and evaluate workers",
            "Monitor production",
            "Do documentation and maintain data in ERP",
            "Identify problems and improve processes",
            "Make vendor visit for outsourced production"
        ],
        "skills": ["DSA", "Front-end tools", "Back-end tools"],
        "salary": 125000,
        "openings": 2,
        "about_hirer": "Google is a global technology company founded in 1998 with a mission to organize the world's information and make it universally accessible and useful. From our inception by Larry Page and Sergey Brin, Google has evolved into a pioneering force in search, advertising, cloud computing, software, and hardware. With a commitment to diversity and inclusion, our diverse team spans the globe, driving innovation and solving complex challenges. Join us to shape the future of technology and make a positive impact on the world.",
        "applicants": [
            {
                "applicant_id": 1,
                "name": "Aditya Raj",
                "email": "aditya@gmail.com",
                "contact": "9876543210",
                "resume_path": "public/uploads/aditya_resume.pdf"
            },
            {
                "applicant_id": 2,
                "name": "John Doe",
                "email": "john@gmail.com",
                "contact": "1234567890",
                "resume_path": "/public/uploads/john_resume.pdf"
            },
            {
                "applicant_id": 3,
                "name": "Jane Smith",
                "email": "jane@gmail.com",
                "contact": "9876543210",
                "resume_path": "/public/uploads/jane_resume.pdf"
            },
            {
                "applicant_id": 4,
                "name": "Michael Johnson",
                "email": "michael@gmail.com",
                "contact": "1234567890",
                "resume_path": "/public/uploads/michael_resume.pdf"
            },
            {
                "applicant_id": 5,
                "name": "Emily Brown",
                "email": "emily@gmail.com",
                "contact": "9876543210",
                "resume_path": "/public/uploads/emily_resume.pdf"
            }
        ]
    },
    {
        "id": 2,
        "profile": "Data Analyst",
        "hirer": "Microsoft",
        "location": "Seattle",
        "start": '2024-05-20',
        "salary": "90,000 USD",
        "experience": "2 years",
        "posting_date": "2024-04-20",
        "info_tag": ["Job"],
        "description": "We are looking for a skilled Data Analyst to join our team and help us turn data into insights.",
        "responsibilities": [
            "Collect and analyze data",
            "Identify trends and patterns",
            "Prepare reports and presentations",
            "Collaborate with teams to improve data quality",
            "Develop and maintain data models"
        ],
        "skills": ["Data analysis", "Data visualization", "SQL"],
        "salary": 90000,
        "openings": 3,
        "about_hirer": "Microsoft is a leading technology company that empowers individuals and organizations around the world to achieve more. With a diverse range of products and services, including software, hardware, and cloud computing, Microsoft is committed to innovation and excellence. Join us and be part of a team that's shaping the future of technology.",
        "applicants": [
            {
                "applicant_id": 6,
                "name": "Alice Williams",
                "email": "alice@gmail.com",
                "contact": "9876543210",
                "resume_path": "/public/uploads/alice_resume.pdf"
            },
            {
                "applicant_id": 7,
                "name": "Bob Anderson",
                "email": "bob@gmail.com",
                "contact": "1234567890",
                "resume_path": "/public/uploads/bob_resume.pdf"
            },
            {
                "applicant_id": 8,
                "name": "Ella Davis",
                "email": "ella@gmail.com",
                "contact": "9876543210",
                "resume_path": "/public/uploads/ella_resume.pdf"
            }
        ]
    },
    {
        "id": 3,
        "profile": "Marketing Manager",
        "hirer": "Facebook",
        "location": "Menlo Park",
        "start": '2024-06-14',
        "salary": "120,000 USD",
        "experience": "5 years",
        "posting_date": "2024-04-20",
        "info_tag": ["Job"],
        "description": "We are seeking a talented Marketing Manager to lead our marketing efforts and drive business growth.",
        "responsibilities": [
            "Develop and execute marketing strategies",
            "Manage advertising campaigns",
            "Analyze market trends and competitors",
            "Collaborate with cross-functional teams",
            "Measure and report on marketing performance"
        ],
        "skills": ["Marketing strategy", "Digital marketing", "Analytics"],
        "salary": 120000,
        "openings": 1,
        "about_hirer": "Facebook is a social media and technology company that connects billions of people worldwide. Our mission is to give people the power to build community and bring the world closer together. With a diverse and inclusive workplace culture, we're committed to creating opportunities for everyone to thrive. Join us and be part of a team that's making a positive impact on the world.",
        "applicants": [
            {
                "applicant_id": 9,
                "name": "Chris Moore",
                "email": "chris@gmail.com",
                "contact": "1234567890",
                "resume_path": "/public/uploads/chris_resume.pdf"
            }
        ]
    },
    {
        "id": 4,
        "profile": "UX Designer",
        "hirer": "Apple",
        "location": "Work from home",
        "start": '2024-06-23',
        "salary": "130,000 USD",
        "experience": "3 years",
        "posting_date": "2024-04-20",
        "info_tag": ["Job"],
        "description": "We are looking for a talented UX Designer to join our team and create compelling user experiences.",
        "responsibilities": [
            "Conduct user research and analysis",
            "Create wireframes and prototypes",
            "Collaborate with cross-functional teams",
            "Iterate and refine designs based on feedback",
            "Ensure consistency across products and platforms"
        ],
        "skills": ["User research", "Wireframing", "Prototyping"],
        "salary": 130000,
        "openings": 2,
        "about_hirer": "Apple is a technology company known for its innovation and design excellence. With a range of iconic products and services, including iPhone, iPad, Mac, and more, Apple is dedicated to creating products that enrich people's lives. Join us and be part of a team that's redefining what's possible.",
        "applicants": [
            {
                "applicant_id": 10,
                "name": "Sophia Lee",
                "email": "sophia@gmail.com",
                "contact": "9876543210",
                "resume_path": "/public/uploads/sophia_resume.pdf"
            }
        ]
    },
    {
        "id": 5,
        "profile": "Software Engineer",
        "hirer": "Amazon",
        "location": "Work from home",
        "start": '2024-07-29',
        "salary": "110,000 USD",
        "experience": "4 years",
        "posting_date": "2024-04-20",
        "info_tag": ["Job"],
        "description": "We are seeking experienced Software Engineers to join our team and help us build scalable and reliable software solutions.",
        "responsibilities": [
            "Design, develop, and maintain software applications",
            "Write clean, efficient code",
            "Collaborate with cross-functional teams",
            "Test and debug software",
            "Deploy and maintain applications in production environments"
        ],
        "skills": ["Java", "Python", "Cloud computing"],
        "salary": 110000,
        "openings": 5,
        "about_hirer": "Amazon is a multinational technology company that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. With a customer-centric approach and a commitment to innovation, Amazon strives to be Earth's most customer-centric company where people can find and discover anything they want to buy online. Join us and be part of a team that's shaping the future of commerce and technology.",
        "applicants": [
            {
                "applicant_id": 11,
                "name": "Liam Smith",
                "email": "liam@gmail.com",
                "contact": "1234567890",
                "resume_path": "/public/uploads/liam_resume.pdf"
            },
            {
                "applicant_id": 12,
                "name": "Olivia Johnson",
                "email": "olivia@gmail.com",
                "contact": "9876543210",
                "resume_path": "/public/uploads/olivia_resume.pdf"
            },
            {
                "applicant_id": 13,
                "name": "Noah Williams",
                "email": "noah@gmail.com",
                "contact": "1234567890",
                "resume_path": "/public/uploads/noah_resume.pdf"
            },
            {
                "applicant_id": 14,
                "name": "Emma Davis",
                "email": "emma@gmail.com",
                "contact": "9876543210",
                "resume_path": "/public/uploads/emma_resume.pdf"
            },
            {
                "applicant_id": 15,
                "name": "William Wilson",
                "email": "william@gmail.com",
                "contact": "1234567890",
                "resume_path": "/public/uploads/william_resume.pdf"
            }
        ]
    }
];





