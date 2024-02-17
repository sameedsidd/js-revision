const accountId = 1223344
let accountEmail = "sameedsiddiqui9@gmail.com"
var accountPassword = "12345"
accountCity = "Karachi"
let accountState;

// accountId = 2 // not allowed
accountEmail = "b@gmail.com"
accountPassword = "444"
accountCity = "Lahore"

/*
prefer not to use var
because of issue in block or functional scope
*/
 
// console.log(accountId); 
console.table([accountEmail, accountPassword, accountPassword, accountCity, accountState]);

