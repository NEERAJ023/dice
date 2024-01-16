
import styled from 'styled-components'

const RollDice = ({resetscore,roledice,current}) => {
       
    
  return (
    <DiceContainer>
        <div className='dice'>
        <div className='random'
        onClick={roledice}
        alt="pic">{current}
        </div>
        </div>
        <p>Click on Dice to roll</p>
        <button onClick={resetscore}>Reset</button>
    </DiceContainer>
  )
}

const DiceContainer=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:48px;
gap:10px;
p{
   font-size:24px; 
}
.dice{
    cursor: pointer;
    border: 1px solid black;
    width:140px;
    text-align:center
}
button{
    width:140px;
     height:50px;
     border-radius:10px;
}
.random{
    font-size:100px;
    
    
}
`

export default RollDice