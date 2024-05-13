export default class UserModel{
    constructor(id,name,email,password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static add_user(name,email,password){
        const new_user = new UserModel(users.length+1,name,email,password);
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
        "password" : "abcd"
    }
]