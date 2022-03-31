const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    /*
    add: function(num1, num2){
        return num1 + num2;
    }
    */
   isNull: () => null,
   checkValue: (x) => x,
   createUser: () => {
    const user = {
        firstName: "Avish"
    }
    user['lastName'] = "Parmar";
    return user;
   },

   fetchUser: () => 
    axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => "Error"),

   fetchToDo: () =>
    axios  
        .get('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.data)
        .catch(err => "Error")

}

module.exports = functions;