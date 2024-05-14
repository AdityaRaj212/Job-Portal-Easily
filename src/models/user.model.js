export default class UserModel{
    constructor(id,name,email,password,user_type){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.user_type = user_type;
    }

    static add_user(name,email,password,user_type){
        const new_user = new UserModel(users.length+1,name,email,password,user_type);
        users.push(new_user);
    }

    static is_valid_user(email,password){
        const user = users.find((u)=> u.email==email && u.password==password);
        return user;
    }
}

const users = [
    {
        "id" : 1,
        "name" : "Aditya",
        "email" : "aditya@email.com",
        "password" : "abcd",
        "user_type" : "hirer",
    }
]