import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {

    return (
        <div className="expenses">
            <ExpenseItem date={
                    props.expense[0].date
                }
                title={
                    props.expense[0].title
                }
                amount={
                    props.expense[0].amount
                }/>
            <ExpenseItem date={
                    props.expense[1].date
                }
                title={
                    props.expense[1].title
                }
                amount={
                    props.expense[1].amount
                }/>
            <ExpenseItem date={
                    props.expense[2].date
                }
                title={
                    props.expense[2].title
                }
                amount={
                    props.expense[2].amount
                }/>
            <ExpenseItem date={
                    props.expense[3].date
                }
                title={
                    props.expense[3].title
                }
                amount={
                    props.expense[3].amount
                }/>
        </div>
    )
}

export
default
Expenses;
