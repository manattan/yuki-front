import React from 'react'
import styled from 'styled-components'

const HeadContainer = styled.div`
  height: 60px;
  background-color: #f0c5a9;
`

const Header:React.FC = () => {
  return (
    <HeadContainer>
      <div style={{padding: '10px 0', color: 'white', fontWeight: 'bold'}}>雪かきpoint計測するくん</div>
    </HeadContainer>
  )
}

export default Header