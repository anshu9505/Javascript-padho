const accountId=144553
let accountEmail="anshu@gmail.com"
var accountPassword="123456"
accountCity="Jharkhand"
let accountState;
//accountId=2 //not allowed

accountEmail="anshusdg.com"
accountPassword="212121"
accountCity="koderma"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
