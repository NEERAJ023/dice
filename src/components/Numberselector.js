import React  from 'react'
import styled from 'styled-components'

const Numberselector = ({seterror,error,item,setfun}) => {
    const arrayitem=[1,2,3,4,5,6]
    
const setnumber=(value)=>{
  setfun(value)
  seterror("")
}
    
  return (
    <NumberSel>
      <p className='error'>{error}</p>
        <div className='flex'>
       {  arrayitem.map((value,i) =>(
        <Box 
        isSelected={item===value}
        key={i} 
        onClick={()=>setnumber(value)}>{value}</Box>
       ))}
</div>
<p>Select Number</p>
    </NumberSel>
  )
}

const NumberSel=styled.div`
display:flex;
flex-direction:column;
align-items:end;
gap:10px;
.flex{
    display:flex;
gap:30px; 
}
.error{
  color:red;
}

`

const Box=styled.div`
height:72px;
width:72px;
border:1px solid black;
display:flex;
align-items:center;
justify-content:center;
font-weight:700;
font-size:40px;
background-color:${(props)=>props.isSelected?"black":"white"};
color:${(props)=>props.isSelected?"white":"black"}
`

export default Numberselector