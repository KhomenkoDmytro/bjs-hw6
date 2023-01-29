let firstName=prompt('What`s your name?', '');
let lastName=prompt('What`s your surname?', '');
let birthday=new Date(prompt('What`s your birthday?', ''));
let newUser=createNewUser(firstName, lastName, birthday);

console.log(newUser.getLogin());
console.log(newUser.getAge());
console.log(newUser.getPassword());

function createNewUser(firstName, lastName, birthday){
    let newUser={
        firstName,
        lastName,
        birthday,
        getAge: function(){
            let today=new Date();

            if(today.getMonth()>birthday.getMonth() || (today.getMonth()==birthday.getMonth()&&today.getDate()>=birthday.getDate())){
                return today.getFullYear()-birthday.getFullYear();
            }
            return today.getFullYear()-birthday.getFullYear()-1;
        },
        getPassword: function(){
            return ((firstName.charAt(0)).toUpperCase()+lastName.toLowerCase()+birthday.getFullYear());
        },
        getLogin: function(){
            return (this.firstName.charAt(0)+this.lastName).toLowerCase();
        },
        set setFirstName(value){
            this.firstName=value;
        },
        set setLastName(value){
            this.lastName=value;
        }
    };
    return newUser;
}