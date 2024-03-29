import React from "react";
import Chartbar from "./ChartBar";
import './Chart.css'

const Chart = (props) =>{
    const dataPointsValues = props.dataPoints.map(datapoint => datapoint.value);
    const totalMaximum = Math.max(...dataPointsValues);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint)=>
            <Chartbar 
                key = {dataPoint.label}
                value = {dataPoint.value} 
                maxValue = {totalMaximum}
                label = {dataPoint.label}
            />)}
        </div>
    )
}
export default Chart;