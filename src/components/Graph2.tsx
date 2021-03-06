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

const Graph2Container = styled.div`
  display: inline-block;
  min-height: calc(100vh - 100px);
  width: calc((100% - 10px) / 2);
  text-align: center;
`;

interface Props {
  data: Array<Types.Graph2> | undefined;
}

const Graph2: React.FC<Props> = (props: Props) => {
  const history = useHistory();
  return (
    <Graph2Container>
      <h1>
        <span style={{ fontSize: 25 }}>累計ランキング</span>
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
        <CartesianGrid stroke="#f1eae3" strokeDasharray="3 3" />
        <Tooltip
          wrapperStyle={{
            width: '120px',
            fontSize: '30%',
            textAlign: 'center',
          }}
        />
        <XAxis type="number" fontSize={12} />
        <YAxis dataKey="device_id" type="category" fontSize={10} />
        <Bar dataKey="points" barSize={18} fill="gray" />
      </ComposedChart>
      <div
        style={{ float: 'right', paddingRight: '100px', paddingTop: '20px' }}
      >
        <Button variant="outlined" onClick={() => history.push('/data/total')}>
          詳しく見る
        </Button>
      </div>
    </Graph2Container>
  );
};

export default Graph2;
