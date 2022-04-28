import Chart from "../Chart/Chart";



const ExpensesChart = (props) => {
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Okt', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); //starting at 0 => january
        chartDataPoints[expenseMonth].value += expense.amount; 
        //increase the value of a given month (by the index) by the given amount and make bar charts of it
    }

    return <Chart dataPoints={chartDataPoints}/> //pass chartDataPoint array as props to Chart.js
}

export default ExpensesChart;