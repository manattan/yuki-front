import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const HeadContainer = styled.div`
  height: 60px;
  background-color: #f0c5a9;
`;

const Header: React.FC = () => {
  return (
    <HeadContainer>
      <div
        style={{
          padding: '10px 100px',
          color: 'white',
          fontWeight: 'bold',
          display: 'inline-block',
        }}
      >
        雪かきpoint計測するくん
      </div>
      <div
        style={{
          display: 'inline-block',
          float: 'right',
          padding: '10px 30px',
        }}
      >
        <Button>ログイン</Button>
      </div>
    </HeadContainer>
  );
};

export default Header;
