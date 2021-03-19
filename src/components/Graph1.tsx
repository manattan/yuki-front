import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const Graph1Container = styled.div`
  display: inline-block;
  min-height: calc(100vh - 100px);
  width: calc((100% - 10px) / 2);
`;

const data = [
  {
    device_id: 'XX0921', // string
    points: 28308, // num
    date: '2000-01-01T01:00:00+09:00',
  },
  {
    device_id: 'XX0832',
    points: 5839,
    date: '2000-01-01T01:00:00+09:00',
  },
  {
    device_id: 'XX0832',
    points: 11123,
    date: '2000-01-01T01:00:00+09:00',
  },
];

const Graph1: React.FC = () => {
  const newData: {
    device_id: string;
    points: number;
    date: string;
    name: string;
  }[] = [];

  for (const tmp of data) {
    newData.push({
      device_id: tmp.device_id,
      points: tmp.points,
      date: new Date(tmp.date).toDateString(),
      name: tmp.device_id + '   ' + new Date(tmp.date).toDateString(),
    });
  }

  if (newData) {
    return (
      <Graph1Container>
        <p>
          <span style={{ fontSize: 15 }}>各測定ごとのランキング</span>
        </p>
        <ComposedChart
          layout="vertical"
          data={newData}
          width={540}
          height={400}
          margin={{
            top: 20,
            left: 50,
          }}
          style={{ paddingLeft: 30 }}
        >
          <CartesianGrid stroke="#f1eae3" />
          <XAxis type="number" fontSize={10} />
          <YAxis dataKey="name" type="category" fontSize={10} />
          <Bar dataKey="points" barSize={18} fill="gray" />
        </ComposedChart>
      </Graph1Container>
    );
  }
  return <div />;
};

export default Graph1;
