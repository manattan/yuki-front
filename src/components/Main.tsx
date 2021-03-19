import React from 'react'
import styled from 'styled-components'
import Graph1 from './Graph1'
import Graph2 from './Graph2'

const MainContainer = styled.div`
  border: 2px solid red;
  min-height: calc(100vh - 100px);
  margin: 20px;
`

const Main:React.FC = () => {
  return (
    <MainContainer>
      <Graph1 />
      <Graph2 />
    </MainContainer>
  )
}

export default Main