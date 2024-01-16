import styled from 'styled-components'

const Startgame = ({toggle}) => {
  return (
    <Container >
        <div className='box'>
        <img src={"https://th.bing.com/th/id/OIP.WwQwR3ZOUeNsDGLy0ZAKQwHaF1?pid=ImgDet&w=191&h=150.31544715447154&c=7&dpr=1.3"} alt="pic"/>
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
width:60%;
gap:40px;
align-items:center;
.content h1{
    font-family: Poppins;
font-size: 96px;
font-weight: 700;
line-height: 144px;
letter-spacing: 0em;
text-align: left;
.box{
  width:300px;
  height:300px;
  overflow:hidden;
}
.box img{
  width:100px;
  height:100px;
}
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