const account = {
    name: 'Mahalia Henry-Richards',
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        this.expenses.push({description: description, amount: amount})
     },
    getAccountSummary: function () {
        let expensesTotal = 0
        this.expenses.forEach(function (expense){
        expensesTotal = expensesTotal + expense.amount
        })

        let incomeTotal = 0
        this.income.forEach(function (income){
        incomeTotal = incomeTotal + income.amount
        })

        return `${this.name} has a balance of ${incomeTotal - expensesTotal}. $${incomeTotal} in income. $${expensesTotal} in expenses.`
    },
    addIncome: function(description, amount) {
        this.income.push({description: description, amount: amount})
     },

}

account.addExpense('Rent', 400)
account.addExpense('Sandwich', 3.50)
account.addIncome('Job', 500)
console.log(account.getAccountSummary())