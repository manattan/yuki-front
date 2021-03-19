import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { Button } from '@material-ui/core';
import * as Types from '../types/main';

const Graph1Container = styled.div`
  display: inline-block;
  min-height: calc(100vh - 100px);
  width: calc((100% - 10px) / 2);
  text-align: center;
`;

interface Props {
  data: Array<Types.Graph1> | undefined;
}

const Graph1: React.FC<Props> = (props: Props) => {
  const history = useHistory();
  return (
    <Graph1Container>
      <h1>
        <span style={{ fontSize: 25 }}>1日ごとのランキング</span>
      </h1>
      <ComposedChart
        layout="vertical"
        data={props.data}
        width={540}
        height={450}
        margin={{
          left: 50,
        }}
        style={{ paddingLeft: 30 }}
      >
        <Tooltip
          wrapperStyle={{
            width: '200px',
            fontSize: '30%',
            textAlign: 'center',
          }}
        />
        <CartesianGrid stroke="#f1eae3" strokeDasharray="3 3" />
        <XAxis type="number" fontSize={10} />
        <YAxis dataKey="displayName" type="category" fontSize={10} />
        <Bar dataKey="points" barSize={18} fill="gray" />
      </ComposedChart>
      <div
        style={{ float: 'right', paddingRight: '100px', paddingTop: '20px' }}
      >
        <Button variant="outlined" onClick={() => history.push('/data/each')}>
          詳しく見る
        </Button>
      </div>
    </Graph1Container>
  );
};

export default Graph1;
