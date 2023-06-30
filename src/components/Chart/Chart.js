import ChartBar from "./ChartBar";
import "./Chart.css";


const Chart = (props) =>{
    const dataPointVal = props.dataPoints.map((dataPoint) => dataPoint.value)
    const totalMax = Math.max(...dataPointVal);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => 
                 <ChartBar key = {dataPoint.label} value = {dataPoint.value} label = {dataPoint.label} maxValue = {totalMax}></ChartBar>
            )}
        </div>
       
    )
}

export default Chart;