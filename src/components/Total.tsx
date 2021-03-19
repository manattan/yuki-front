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
import { getTotalData } from '../API/main';
import Table2 from './Table2';

const Container = styled.div`
  margin: 40px 40px 0 40px;
  min-height: calc(100vh - 160px);
  padding: 0 0 0 20px;
`;

const TotalContainer: React.FC = () => {
  const [data, setData] = useState<Array<Types.table> | undefined>();

  useEffect(() => {
    setInterval(async () => {
      const results = await getTotalData();
      const newData: Array<Types.table> = [];
      let i = 1;
      for (const tmp of await results.json()) {
        newData.push(
          Object.assign(tmp, {
            displayName: tmp.device_id + '   ' + tmp.date,
            id: i,
          })
        );
        i++;
      }
      setData(newData);
    }, 1000);
  }, []);

  if (data) {
    return (
      <Container>
        <p>累積得点ランキング</p>
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
          <Tooltip
            wrapperStyle={{
              width: '120px',
              fontSize: '30%',
              textAlign: 'center',
            }}
          />
          <XAxis type="number" fontSize={10} />
          <YAxis dataKey="device_id" type="category" fontSize={10} />
          <Bar dataKey="points" barSize={18} fill="gray" />
        </ComposedChart>
        <Table2 data={data} />
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

export default TotalContainer;
