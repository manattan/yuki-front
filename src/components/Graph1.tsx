import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Button } from '@material-ui/core';
import * as Types from '../types/main';
import { getEachData } from '../API/main';

const Graph1Container = styled.div`
  display: inline-block;
  min-height: calc(100vh - 100px);
  width: calc((100% - 10px) / 2);
  text-align: center;
`;

interface Props {
  data: Array<Types.Graph2> | undefined;
}

const Graph1: React.FC<Props> = (props: Props) => {
  return (
    <Graph1Container>
      <h1>
        <span style={{ fontSize: 25 }}>1回ごとのランキング</span>
      </h1>
      <ComposedChart
        layout="vertical"
        data={props.data}
        width={540}
        height={400}
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
      <div
        style={{ float: 'right', paddingRight: '100px', paddingTop: '20px' }}
      >
        <Button variant="outlined">詳しく見る</Button>
      </div>
    </Graph1Container>
  );
};

export default Graph1;
