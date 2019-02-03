let myAccount = {
    name: 'Mahalia',
    expenses: 0,
    income: 0
}

let addExpense = function (account, total) {
    account.expenses = account.expenses + total
}

let addIncome = function (account, total) {
    account.income = account.income + total
}

let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function (account) {
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 5000)
addExpense(myAccount, 300)
addExpense(myAccount, 20)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))



