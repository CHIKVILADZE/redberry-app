import React from 'react'
import background from '../assets/background.png'
import redberry from '../assets/redberry.png'
import ring from '../assets/ring.png'
import styled from 'styled-components'


export default function GetStarted() {
  return (
    <Main>
      <Header>
        <Img src={redberry}/>
      </Header>
      <Line/>
      <Img2 src={ring}/>
      <Btn>რეზიუმეს დამატება</Btn>
    </Main>
  )
}

const Main = styled.div`
  width:1920px;
  height:1080px;
  background-image:url(${background});
  background-repeat:no-repeat;
  background-position: right 10px bottom 30px;

`
const Header = styled.div`
  width:100%;
  height:87px;
`

const Img = styled.img`
margin-top:25px;
margin-left:70px;
`
const Line = styled.div`
width:1780px;

border:1px solid #1A1A1A;
margin-left:70px;
margin-right:70px;
`
const Img2 = styled.img`
  margin-top:384px;
  margin-left:1076px;
`
const Btn = styled.button`
  width:464px;
  height:60px;
  border-radius:8px;
  background-color:#1A1A1A;
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  position:absolute;
  top:513px;
  left:728px;
  color: #FFFFFF;
  cursor:pointer;
`