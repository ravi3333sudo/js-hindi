const accountId = 123131313
let accountEmail = "ravi@gmail.com"
var accountPassword ="12345"
accountCity ="jaipur"
let accountState;

//accountId = 2//not allowed

accountEmail = 'razz@gmail.com'
accountPassword ='98765'
accountCity ='noida'

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword,accountCity,accountState]);
