import React from 'react'
import styled from 'styled-components'
import back from '../assets/back.png'


export default function Education() {
  return (
    <Main>
      <Edu>
      <Header>
          <Button><img src={back}/></Button>
          <Title>განათლება</Title>
          <Pages>3/3</Pages>
        </Header>
        <Line/>
        <form>
          <School>
            <label>სასწავლებელი</label>
            <input className="school" type="text" placeholder="სასწავლებელი"/>
            <span>მინიმუმ 2 სიმბოლო</span>
          </School>
          <Quality>
            <SelectBox>
              <label>ხარისხი</label>
              <select placeholder="აირჩიეთ ხარისხი">
                <option>საშუალო სკოლის დიპლომი</option>
                <option>ზოგადსაგანმანათლებლო დიპლომი</option>
                <option>ბაკალავრი</option>
                <option>მაგისტრი</option>
                <option>დოქტორი</option>
                <option>ასოცირებული ხარისხი</option>
                <option>სტუდენტი</option>
                <option>კოლეჯი (ხარისხის გარეშე)</option>
                <option>სხვა</option>
              </select>
            </SelectBox>
            < DateBox>
              <label>დამთავრების რიცხვი</label>
              <input type="date"/>
            </DateBox>
          </Quality>
          <Description>
            <label>აღწერა</label>
            <textarea className="description-text" placeholder="განათლების აღწერა"></textarea>
          </Description>
          <Line2/>
          <button className="add">სხვა სასწავლებლის დამატება</button>
          <div className="BtnBox">
            <button className="Btnback">უკან</button>
            <button className="Btn">დასრულება</button>
          </div>
        </form>
      </Edu>
      
    </Main>
  )
}


const Main = styled.div`
    width:1920px;
    height:1080px;

`
const Edu = styled.div`
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
const School = styled.div`
  width:846px;
  height:125px;
  display:flex;
  flex-direction: column;
  margin-left:126px;
  margin-top:157px;
  border:1px solid black;
  gap:8px;
`

const Quality = styled.div`
  display:flex;
  flex-direction: row;
  border:1px solid black;
  margin-top:25px;
  width:80%;
  margin-left:126px;
`
const SelectBox = styled.div`
width:419px;
height:125px;
  border:1px solid black;
`
const DateBox = styled.div`
width:419px;
height:125px;
  border:1px solid black;
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