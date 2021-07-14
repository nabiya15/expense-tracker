import Expenses from "./components/Expenses";

function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'Food',
            amount: 103.68,
            date: new Date(2021, 4, 25)
        }, {
            id: 'e2',
            title: 'Electricity Bill',
            amount: 98.65,
            date: new Date(2021, 5, 5)
        }, {
            id: 'e3',
            title: 'Water Bill',
            amount: 140.75,
            date: new Date(2021, 5, 5)
        }, {
            id: 'e4',
            title: 'Amusement Park',
            amount: 240.98,
            date: new Date(2021, 7, 21)
        },
    ];
    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses expense={expenses}/>
        </div>
    );
}

export default App;
