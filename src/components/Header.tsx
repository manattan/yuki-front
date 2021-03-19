import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const HeadContainer = styled.div`
  height: 60px;
  background-color: #f0c5a9;
`;

const Header: React.FC = () => {
  const history = useHistory();

  const toHome = () => {
    history.push({ pathname: '/' });
  };

  return (
    <HeadContainer>
      <div
        style={{
          padding: '10px 100px',
          color: 'white',
          fontWeight: 'bold',
          display: 'inline-block',
          cursor: 'pointer',
        }}
        onClick={toHome}
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
