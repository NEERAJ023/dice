import styled from 'styled-components'

const Startgame = ({toggle}) => {
  return (
    <Container >
        <div>
        <img src="/images/dices.png" alt="pic"/>
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

const Container=styled.div`
max-width:1180px;
display:flex;
margin:auto;
height:100vh;
align-items:center;
.content h1{
    font-family: Poppins;
font-size: 96px;
font-weight: 700;
line-height: 144px;
letter-spacing: 0em;
text-align: left;

}
`
const Button = styled.button`
color:white;
padding:10px 18px;
background-color:black;
border-radius:5px;
min-width:220px;
border:none;
font-size:16px;
cursor: pointer;

&:hover{
    background-color:white;
    border:1px solid black;
    color:black;
}
`
export default Startgame