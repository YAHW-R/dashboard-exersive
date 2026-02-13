import { type expense } from "./types"

export const getTotalMenusualExpense = (expenses: expense[]) => {

    let total = 0
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount
    }

    return parseFloat(total.toFixed(2));

}