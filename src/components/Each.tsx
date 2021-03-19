import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import * as Types from '../types/main';
import { getEachData } from '../API/main';

const Container = styled.div`
  margin: 40px;
  min-height: calc(100vh - 160px);
  border: 2px solid red;
  padding: 0 0 0 20px;
`;

const EachContainer: React.FC = () => {
  const [data, setData] = useState<Array<Types.Graph2> | undefined>();

  useEffect(() => {
    setInterval(async () => {
      const results = await getEachData();
      setData(await results.json());
    }, 1000);
  }, []);

  return (
    <Container>
      <p>個別の結果ランキング</p>
      <ComposedChart
        layout="vertical"
        data={data}
        width={1200}
        height={500}
        margin={{
          left: 50,
        }}
        style={{ paddingLeft: 30 }}
      >
        <CartesianGrid stroke="#f1eae3" strokeDasharray="3 3" />
        <XAxis type="number" fontSize={10} />
        <YAxis dataKey="device_id" type="category" fontSize={10} />
        <Bar dataKey="points" barSize={18} fill="gray" />
      </ComposedChart>
    </Container>
  );
};

export default EachContainer;
