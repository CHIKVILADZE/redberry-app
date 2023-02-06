import React from 'react'
import styled from 'styled-components'
import back from '../assets/back.png'

export default function Experience() {
  return (
    <Main>
      <Exp>
      <Header>
          <Button><img src={back}/></Button>
          <Title>გამოცდილება</Title>
          <Pages>2/3</Pages>
        </Header>
        <Line/>
        <form>
          <Position>
            <label>თანამდებობა</label>
            <input className="position" type="text" placeholder="დეველოპერი, დიზაინერი, ა.შ."/>
            <span>მინიმუმ 2 სიმბოლო</span>
          </Position>
          <Employer>
            <label>დამსაქმებელი</label>
            <input className="employer" type="text" placeholder="დამსაქმებელი"/>
            <span>მინიმუმ 2 სიმბოლო</span>
          </Employer>
          <DateBox>
            <Start>
              <label>დაწყების რიცხვი</label>
              <input type="date" className="date"/>
            </Start>
            <End>
              <label>დამთავრების რიცხვი</label>
              <input type="date" className="date"/>
            </End>
          </DateBox>
          <Description>
            <label>აღწერა</label>
            <textarea className="description-text" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"></textarea>
          </Description>
          <Line2/>
          <button className="add">მეტი გამოცდილების დამატება</button>
          <div className="BtnBox">
            <button className="Btnback">უკან</button>
            <button className="Btn">შემდეგი</button>
          </div>

        </form>
        
      </Exp>
      
    </Main>
  )
}

const Main = styled.div`
    width:1920px;
    height:1080px;

`
const Exp = styled.div`
  width:1098px;
  height:1080px;
  border:1px solid red;
  background-color:#F9F9F9;
`

const Header = styled.header`
width:100%;
height:86px;
display:flex;
flex-direction: row;
`
const Button = styled.button`
  width:40px;
  height:40px;
  border-radius:50%;
  background-color:#FFFFFF;
  margin-left:48px;
  margin-top:45px;
  display:flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-left:61px;
  margin-top:47px;
  color: #1A1A1A;
`
const Pages = styled.div`
  width:29px;
  height:24px;
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
  color: #1A1A1A;
  margin-left:592px;
  margin-top:49px;
  
`
const Line = styled.div`
  width:798px;
  border:1px solid #1A1A1A;
  margin-left:150px;
`
const Position = styled.div`
  width:846px;
  height:125px;
  display:flex;
  flex-direction: column;
  margin-top:77px;
  gap:8px;
  margin-left:126px;
`

const Employer = styled.div`
 width:846px;
  height:125px;
  display:flex;
  flex-direction: column;
  margin-top:30px;
  margin-left:126px;
  gap:8px;
  
`
const DateBox = styled.div`
  display:flex;
  flex-direction: row;
  margin-top:30px;
  gap:8px;
`

const Start = styled.div`
width:413px;
height:93px;

margin-left:126px;
display: flex;
flex-direction: column;
gap:8px;
`
const End = styled.div`
width:413px;
height:93px;

display: flex;
flex-direction: column;
gap:8px;
`
const Description = styled.div`
  width:846px;
  height:168px;
 
  margin-left:126px;
  margin-top:10px;
  display:flex;
  flex-direction: column;
  gap:8px;
`

const Line2 = styled.div`
  width:798px;
  border:1px solid #C1C1C1;
  margin-top:58px;
  margin-left:149px;
`