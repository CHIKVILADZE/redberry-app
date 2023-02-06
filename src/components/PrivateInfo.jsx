import React from 'react'
import styled from 'styled-components'
import back from '../assets/back.png'

export default function PrivateInfo() {
  return (
    <Main>
      <Info>
        <Header>
          <Button><img src={back}/></Button>
          <Title>პირადი ინფო</Title>
          <Pages>1/3</Pages>
        </Header>
        <Line/>
        <form>
          <div className="namesurname">
            <div className='name'>
              <label>სახელი</label>
              <input className="nameinput" type="text" placeholder="ანზორ"/>
              <span>მინიმუმ 2 ასო, ქართული ასოები</span>
            </div>
            <div className='surname'><label>გვარი</label>
              <input className='surnameinput' type="text" placeholder="მუმლაძე"/>
              <span>მინიმუმ 2 ასო, ქართული ასოები</span>
            </div>
          </div>  
          <UploadPhoto>
            <h5>პირადი ფოტოს ატვირთვა</h5>
            <label className="uploadlabel" htmlFor='upload'>ატვირთვა</label>
            <input id='upload' className="upload" type="file"/>
          </UploadPhoto>
          <AboutMe>
            <label>ჩემ შესახებ (არასავალდებულო)</label>
            <textarea placeholder="ზოგადი ინფო შენ შესახებ"></textarea>
          </AboutMe>
          <Email>
            <label>ელ.ფოსტა</label>
            <input className="email" type="email" placeholder="anzorr666@redberry.ge"/>
            <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
          </Email>
          <Mobile>
            <label>მობილურის ნომერი</label>
            <input className="mobile" type="tel" placeholder="+995 551 12 34 56"/>
            <span>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</span>
          </Mobile>
        </form>
        <Btn>ᲨᲔᲛᲓᲔᲒᲘ</Btn>
      </Info>
      
    </Main>
  )
}

const Main = styled.div`
    width:1920px;
    height:1080px;
    border:2px solid black;
`
const Info = styled.div`
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
const UploadPhoto =styled.div`
  display:flex;
  flex-direction: row;
  margin-left:150px;
  margin-top:54px;
  border:1px solid black;
`
const AboutMe = styled.div`
  width: 846px;
  height: 148px;
  border:1px solid black;
  margin-left:126px;
  margin-top:54px;
`

const Email = styled.div`
  width:846px;
  height:122px;
  margin-top:25px;
  margin-left:126px;
  border:1px solid black;
  display:flex;
  flex-direction:column;
`
const Mobile = styled.div`
  width:846px;
  height:122px;
  margin-left:126px;
  border:1px solid black;
  display:flex;
  flex-direction:column;
  margin-top:8px;
`
const Btn = styled.button`
  background-color:#6B40E3;
  width:151px;
  height:48px;
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.08em;
  color: #FFFFFF;
  position:absolute;
  left:797px;
  top:967px;
  border-radius:4px;
  border:none;
`


