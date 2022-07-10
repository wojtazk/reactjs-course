import './Chart.css';

import ChartBar from './ChartBar';

const Chart = (props) => {
  const sum = props.dataPoints.reduce(
    (total, curValue) => total + curValue.value,
    0
  );

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint, indx) => (
        <ChartBar
          //   key={dataPoint.id}
          key={'ChartBar-' + indx}
          value={dataPoint.value}
          sumValue={sum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
