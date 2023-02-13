import React from 'react'
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import photo from "../assets/photo.png";

import back from '../assets/back.png'



 
export default function Resume({storedName, storedSurname, storedEmail, storedPhone, storedDescript, formData}) {

  console.log(formData.image)
   return (
    <ResumeBox>
     
        <InfoBox>
          <H1>{formData.name} {formData.surname}</H1>
          <Emailtxt>
            {formData.email === "" ? null : <img src={email}/>}
            {formData.email}
          </Emailtxt>
          <Phonetxt>
          {formData.phone_number === "" ? null : <img src={phone}/>}
            {formData.phone_number}</Phonetxt>
          {formData.about_me === "" ? null :<H3>ჩემს შესახებ</H3>}
          <AboutMe>{formData.about_me}</AboutMe>

          {formData.name !== "" && <Line/>}
      
      
      <Pic><img src={formData.image}/></Pic>

      {formData.experiences.map((experience, index) => {
        return (
          <div key={index}>
            {(experience.position !== "" || experience.employer !=="" || experience.start_date !== "" || experience.due_date !== ""
            || experience.description !== "" ) && <Experience>გამოცდილება</Experience>}

            <Position>{experience.position} {experience.employer}</Position>
            
            <Span>{experience.start_date} - {experience.due_date}</Span>
            <Description>{experience.description}</Description>

            {(experience.position !== "" || experience.employer !=="" || experience.start_date !== "" || experience.due_date !== ""
            || experience.description !== "" ) && <Line/>}
          </div>
        )
      })}


      <br />

      {formData.educations.map((education, index) => {
        return (
          <div key={index}>
            {(education.institute !== "" || education.degree_id !=="" || education.due_date !== ""
            || education.description !== "" ) && <Experience>განათლება</Experience>}
            
            <Position>{education.institute}, {education.degree_id}</Position>
           
            <Span>{education.due_date}</Span>
            <Description>{education.description}</Description>

            {(education.institute !== "" || education.degree_id !=="" || education.due_date !== ""
            || education.description !== "" ) && <Line/>}
          </div>
        )
      })}


      </InfoBox>
    </ResumeBox>
  )
}

const ResumeBox = styled.div`
  width:822px;
  height:1080px;
 position:relative;
  display:flex;
  flex-direction: column;
  margin-right: 200px;
`
const InfoBox = styled.div`
  margin-left:80px;
  margin-right:80px;
  margin-top:68px;

`
const H1 = styled.h1`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 700;
  
  
  font-size: 34px;
  line-height: 42px;
  color: #F93B1D;
`
const Emailtxt = styled.p`
  font-family: 'Helvetica Neue';
  font-style: normal;
  margin-top:20px;
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


`

const Experience = styled.h3`
  
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
margin-top:24px;
color: #F93B1D;
`
const Button = styled.button`
  position:absolute;
  top:45px;
  left:48px;
`

const AboutMe = styled.p`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  width:432px;
  
  font-size: 16px;
  line-height: 22px;
  text-transform: lowercase;
  color: #000000;
  margin-top:15px;
  
`

const Line = styled.div`
  width:662px;
  border:1px solid #C8C8C8;
  
  margin-top:19px;
`


const Pic = styled.div`
 
  position:absolute;
  top:48px;
  left:501px;
`
const Position = styled.p`
  font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #1A1A1A;
margin-top:15px;
`
const Span = styled.span`
  font-family: 'Helvetica Neue';
font-style: italic;
font-weight: 400;
font-size: 16px;
line-height: 19px;
margin-top:7px;
color: #919191;
`
const Description = styled.p`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-top:16px;
  text-transform: capitalize;
  color: #000000;
`