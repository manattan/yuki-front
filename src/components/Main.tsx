import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import Graph1 from './Graph1';
import Graph2 from './Graph2';
import { getEachData, getTotalData } from '../API/main';

const MainContainer = styled.div`
  min-height: calc(100vh - 100px);
  margin: 20px;
  text-align: center;
`;

const Main: React.FC = () => {
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();

  const getData = () => {
    setInterval(async () => {
      const results1 = await getEachData();
      setData1(await results1.json());
      const results2 = await getTotalData();
      setData2(await results2.json());
    }, 1000);
  };

  useEffect(() => {
    getData();
  }, []);

  if (data1 && data2) {
    return (
      <MainContainer>
        <Graph1 data={data1} />
        <Graph2 data={data2} />
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <CircularProgress
        color="inherit"
        size={80}
        style={{ marginTop: '100px' }}
      />
    </MainContainer>
  );
};

export default Main;
