import { type expense } from "../utils/types"


const Table = ({ expenses }: { expenses: expense[] }) => {
    return (
        <div className="expenses-container">
            <h2 className="table-title">Expenses</h2>
            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map(element => (
                            <tr>
                                <td>{element.date}</td>
                                <td>{element.description}</td>
                                <td>{element.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table