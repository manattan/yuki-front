import React from 'react'
import styled from 'styled-components'

const Graph1Container = styled.div`
  display: inline-block;
  min-height: calc(100vh - 100px);
  border: 2px solid blue;
  width: calc((100% - 10px) / 2);
`

const Graph1:React.FC = () => {
  return (
    <Graph1Container>
      a
    </Graph1Container>
  )
}

export default Graph1