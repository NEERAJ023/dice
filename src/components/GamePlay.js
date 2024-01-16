import React,{useState} from 'react'
import Totalscore from './Totalscore'
import Numberselector from './Numberselector'
import styled from 'styled-components'
import RollDice from './RollDice'

const GamePlay = () => {
    const [current,setimg]=useState(1)
    const [item,setfun]=useState()
    const [score,setscore]=useState(0)
    const [error,seterror]=useState("")

    const genraterandomnum=(min,max)=>{
        return Math.floor(Math.random() * (max-min) + min)
  }

  const resetscore=()=>{
    setscore(0)
    setfun(undefined)
  }

  const roledice=()=>{
    if(!item){
        seterror("please select a number...")
        return ;
     }
      let randomnum=genraterandomnum(1,7)
      console.log(randomnum)
         setimg(randomnum)
         
         if(randomnum===item){
            setscore((prv)=>prv+randomnum)
         }else{
            setscore((prv)=>prv-item)
         }
         setfun(undefined)
  }

  return (
    <MainContainer>
        <div className='topsection'>
        <Totalscore
        score={score}
        />
        <Numberselector
        error={error}
        seterror={seterror}
        item={item}
        setfun={setfun}
        />
        </div>
        <RollDice
        resetscore={resetscore}
        roledice={roledice}
        current={current}
        />
    </MainContainer>
  )
}
const MainContainer=styled.div`
padding-top:70px;
.topsection{
    display:flex;
    justify-content:space-around;
    align-items:end;
    
}p{
    font-size:24px;
    font-weight:700px;
}

`

export default GamePlay