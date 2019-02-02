let myAccount = {
    name: 'Mahalia',
    expenses: 0,
    income: 0
}

let addExpense = function (account, total) {
    account.expense = account.expenses + total
}

addExpense(myAccount, 2.50)
console.log(myAccount)