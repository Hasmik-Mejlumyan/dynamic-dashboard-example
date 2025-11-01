import { PieChart, Pie, Label } from 'recharts';

// #region Sample data
const data = [
  { name: 'Group A', value: 250, fill: '#796EBD' },
  { name: 'Group C', value: 150, fill: '#EEEFF2' },
  { name: 'Group B', value: 200, fill: '#28BAE1' },
];

// #endregion
const MyPie = () => (
  <Pie
    data={data}
    dataKey="value"
    nameKey="name"
    outerRadius="80%"
    innerRadius="60%"
  />
);

const MonthlyEarningsPieChartItem = () => {
  return (
    <div className="flex flex-wrap w-full min-h-[300px] p-2 mt-auto">
      <PieChart
        responsive
        className="w-full h-full aspect-[1] flex-1 scale-125 max-xl:scale-100"
      >
        <MyPie />
        <Label className="fill-text-color" position="center">
          In Store Sales 30
        </Label>
        {/*<Legend />*/}
      </PieChart>
    </div>
  );
};

export default MonthlyEarningsPieChartItem;
