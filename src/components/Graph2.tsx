import React from 'react'
import styled from 'styled-components'

const Graph2Container = styled.div`
  display: inline-block;
  min-height: calc(100vh - 100px);
  border: 2px solid blue;
  width: calc((100% - 10px) / 2);
`

const Graph2:React.FC = () => {
  return (
    <Graph2Container>
      a
    </Graph2Container>
  )
}

export default Graph2