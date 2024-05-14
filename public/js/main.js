function delete_job(id,profile,hirer){
    const result = confirm(`Do you want to delete ${profile} job posting offered by ${hirer}? `);
    if(result){
        fetch('/delete_job/'+id,{
            method: 'POST'
        }).then(res=>{
            if(res.ok){
                location.reload();
            }
        });
    }
}