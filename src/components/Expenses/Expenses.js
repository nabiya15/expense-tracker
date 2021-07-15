import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';
import Card from '../Card/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';


const Expenses = (props) => {
    const getSelectedYearHandler = (selectedYear) => {
        console.log("Inside Expenses.js")
        console.log(selectedYear);
    }
    return (
        <div>

            <ExpenseFilter setSelectedYear={getSelectedYearHandler}/>
            <Card className="expenses">
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
            </Card>
        </div>
    )
}

export
default
Expenses;
