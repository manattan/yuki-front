import React from 'react';
import styled from 'styled-components';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const Graph2Container = styled.div`
  display: inline-block;
  min-height: calc(100vh - 100px);
  width: calc((100% - 10px) / 2);
`;

const data = [
  {
    device_id: 'XX0921', // string
    points: 283082, // num
    date: '2000-01-01T01:00:00+09:00',
  },
  {
    device_id: 'XX0832',
    points: 5839,
    date: '2000-01-01T01:00:00+09:00',
  },
  {
    device_id: 'XX0813',
    points: 11123,
    date: '2000-01-01T01:00:00+09:00',
  },
];

const Graph2: React.FC = () => {
  return (
    <Graph2Container>
      <p>
        <span style={{ fontSize: 15 }}>累計ランキング</span>
      </p>
      <ComposedChart
        layout="vertical"
        data={data}
        width={540}
        height={400}
        margin={{
          top: 20,
          left: 50,
        }}
        style={{ paddingLeft: 30 }}
      >
        <CartesianGrid stroke="#f1eae3" />

        <XAxis type="number" fontSize={12} />
        <YAxis dataKey="device_id" type="category" fontSize={10} />
        <Bar dataKey="points" barSize={18} fill="gray" />
      </ComposedChart>
    </Graph2Container>
  );
};

export default Graph2;
