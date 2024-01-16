import React from 'react'
import styled from 'styled-components'

const Totalscore = ({score}) => {
  return (
    <Scoreboard>
        <h1>{score}</h1>
        <p>Total score</p>
    </Scoreboard>
  )
}
const Scoreboard=styled.div`
max-width:200px;
text-align:center;
   h1{
    font-size:100px;
    line-height:100px;
   }
   p{
    font-size:24px;
    font-weight:500px;
   }
`

export default Totalscore