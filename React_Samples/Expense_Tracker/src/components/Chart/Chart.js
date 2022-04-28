import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const getDataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const calculateMaximum = Math.max(...getDataPointValues); 
    //max() req. a number array so we have to create a new array with only values since props returns an object array

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label} //necessary since we are mapping a list - using the labels
                    value={dataPoint.value}
                    maxValue={calculateMaximum}
                    label={dataPoint.label} //for showing the different months
                />
                ))}
        </div>
    )
}

export default Chart;