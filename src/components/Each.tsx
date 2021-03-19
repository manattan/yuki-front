import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { CircularProgress } from '@material-ui/core';
import * as Types from '../types/main';
import { getAllData } from '../API/main';

const Container = styled.div`
  margin: 40px;
  min-height: calc(100vh - 160px);
  padding: 0 0 0 20px;
`;

const EachContainer: React.FC = () => {
  const [data, setData] = useState<Array<Types.Graph2> | undefined>();

  useEffect(() => {
    setInterval(async () => {
      const results = await getAllData();
      const res: Array<Types.Graph2> = await results.json();
      const newData: Array<Types.Graph1> = [];
      for (const tmp of res) {
        newData.push(
          Object.assign(tmp, { displayName: tmp.device_id + '   ' + tmp.date })
        );
      }
      setData(newData);
    }, 1000);
  }, []);

  if (data) {
    return (
      <Container>
        <p>個別の結果ランキング</p>
        <ComposedChart
          layout="vertical"
          data={data}
          width={1200}
          height={600}
          margin={{
            left: 50,
          }}
          style={{ paddingLeft: 30 }}
        >
          <CartesianGrid stroke="#f1eae3" strokeDasharray="3 3" />
          <Tooltip
            wrapperStyle={{
              width: '200px',
              fontSize: '30%',
              textAlign: 'center',
            }}
          />
          <XAxis type="number" fontSize={10} />
          <YAxis dataKey="displayName" type="category" fontSize={10} />
          <Bar dataKey="points" barSize={18} fill="gray" />
        </ComposedChart>
      </Container>
    );
  }

  return (
    <Container style={{ textAlign: 'center' }}>
      <CircularProgress
        color="inherit"
        size={80}
        style={{ marginTop: '100px' }}
      />
    </Container>
  );
};

export default EachContainer;
