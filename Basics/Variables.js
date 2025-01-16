const accountId = 12345
let accountEmail = "sandhya@gmail.com"
var accountPassword = "1221"
accountCity = "Delhi"

// accountId = 2

accountEmail = "chiya@gmail.com"
accountPassword = "2132020"
accountCity = "Noida"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional Scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity])
