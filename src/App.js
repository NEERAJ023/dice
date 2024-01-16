import React,{useState} from 'react'
import './style.css'
import Startgame from './components/Startgame'
import GamePlay from './components/GamePlay'


const App = () => {

    const [isitem,handlegame]=useState(false)
 const toggleGame=()=>{
    handlegame((prev)=>!prev)
 }

  return (
    <div>
        {isitem?<GamePlay/>:<Startgame toggle={toggleGame}/>}
       
    </div>
  )
}

export default App