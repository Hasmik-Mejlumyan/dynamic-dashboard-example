import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// #region Sample data
const data = [
  {
    name: '2011',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2012',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2013',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '2014',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2015',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2016',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '2017',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// #endregion
const EmailSentChartItem = () => {
  return (
    <AreaChart
      style={{ width: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stackId="1" stroke="#E4E4EE" fill="#E4E4EE" />
      <Area type="monotone" dataKey="pv" stackId="1" stroke="#DBD8EE" fill="#DBD8EE" />
      <Area type="monotone" dataKey="amt" stackId="1" stroke="#B9E9F6" fill="#B9E9F6" />
    </AreaChart>
  );
};

export default EmailSentChartItem;
