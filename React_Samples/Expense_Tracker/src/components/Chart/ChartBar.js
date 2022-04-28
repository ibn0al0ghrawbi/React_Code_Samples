import './ChartBar.css';

const ChartBar = (props) => {
    let barFillHeight = '0%';   //as string to pass it as css

    if (props.maxValue > 0) { //can be zero if we filter a month which has no expenses
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'; //total percentage

    }
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill'
                    style={{ height: barFillHeight }}>
                </div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>

        </div>
    );
}

export default ChartBar;


