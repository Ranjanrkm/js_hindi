const accountId = 144553
let accountEmail = "ranjan@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

// accountId = 2 // not allowed

accountEmail = "rkm@rkm.com"
accountPassword ="12072003"
accountCity = "Hydrabad"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])