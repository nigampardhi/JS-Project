const accountId = 1234
let email = "nigam@dev.com"
var password = "123456789"
let accountCity;

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId)
console.table([accountId, email, password, accountCity])
