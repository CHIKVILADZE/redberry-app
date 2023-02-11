import React from 'react'
import styled from 'styled-components'
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import photo from "../assets/photo.png";
import Resume from '../components/Resume'


export default function Result() {
  return (
    <ResumeBox>
      <InfoBox >
          <H1>ანზორ მუმლაძე</H1>
          <Emailtxt><img src={email}/>anzorr666@redberry.ge</Emailtxt>
          <Phonetxt><img src={phone}/>+995 597 63 45 16</Phonetxt>
          <H3>ჩემს შესახებ</H3>
          <AboutMe>ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.</AboutMe>
          <Line/>
      
      </InfoBox >
      <Pic><img src={photo}/></Pic>

     
    </ResumeBox>
  )
}

const ResumeBox = styled.div`
  width:822px;
  height:1080px;
  border:1px solid red;
  display:flex;
  flex-direction: row;
  
`
const H1 = styled.h1`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 700;
  margin-top:68px;
  margin-left:80px;
  font-size: 34px;
  line-height: 42px;
  color: #F93B1D;
`
const Emailtxt = styled.p`
  font-family: 'Helvetica Neue';
  font-style: normal;
  margin-top:20px;
  margin-left:80px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #1A1A1A;
`
const Phonetxt = styled.p`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  margin-top:10px;
  margin-left:80px;
  font-size: 18px;
  line-height: 21px;
  color: #1A1A1A;
`
const H3 = styled.h3`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #F93B1D;
  margin-top:34px;
  margin-left:80px;

`
const AboutMe = styled.p`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-transform: lowercase;
  color: #000000;
  margin-top:15px;
  margin-left:80px;
`

const Line = styled.div`
  width:662px;
  border:1px solid #C8C8C8;
  margin-left:80px;
  margin-top:19px;
`

const InfoBox = styled.div`
  width:512px;
 
`
const Pic = styled.div`
  margin-top:48px;
`