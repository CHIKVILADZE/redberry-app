import React from 'react'
import {useEffect, useState} from 'react';
import styled from 'styled-components'
import back from '../assets/back.png'
import {useForm} from 'react-hook-form'
import email from '../assets/email.png'
import phone from '../assets/phone.png'
import invalid from '../assets/invalid.png'
import valid from '../assets/valid.png'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


export default function Education() {

  const [degree1, setDegree1] = useState()
  const [degree2, setDegree2] = useState()
  const [degree3, setDegree3] = useState()
  const [degree4, setDegree4] = useState()
  const [degree5, setDegree5] = useState()
  const [degree6, setDegree6] = useState()
  const [degree7, setDegree7] = useState()
  const [degree8, setDegree8] = useState()
  const [degree9, setDegree9] = useState()




  const { register, handleSubmit, getValues, setValue, trigger, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const onSubmit = () =>{
       navigate("/resume")
   } 

   useEffect (() =>{
     let getData = async () =>{
      let response = await axios.get("https://resume.redberryinternship.ge/api/degrees")
      let Id1 = response.data[0].title
      let Id2 = response.data[1].title
      let Id3 = response.data[2].title
      let Id4 = response.data[3].title
      let Id5 = response.data[4].title
      let Id6 = response.data[5].title
      let Id7 = response.data[6].title
      let Id8 = response.data[7].title
      let Id9 = response.data[8].title
        setDegree1(Id1)
        setDegree2(Id2)
        setDegree3(Id3)
        setDegree4(Id4)
        setDegree5(Id5)
        setDegree6(Id6)
        setDegree7(Id7)
        setDegree8(Id8)
        setDegree9(Id9)

   
     };
     getData()
   }, [])


   const handleClick = () =>{
    trigger()
  
  }
  console.log(degree1)


  const handleChange = (event, input) => {
    setValue(input, event.target.value);
    trigger(event.target.name);
  };

  return (
    <Main>
      <Edu>
      <Header>
          <Button><Link to="/redberry-app" style={{color:"white", textDecoration:"none"}}><img src={back}/></Link></Button>
          <Title>განათლება</Title>
          <Pages>3/3</Pages>
        </Header>
        <Line/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <School>
            <label style={errors.school && {color:"#E52F2F"}}>სასწავლებელი</label>
            <input className={(errors.school === undefined && getValues("school") !== undefined && getValues("school") !=="") ?  "school valid" : "school" }
            type="text" placeholder="სასწავლებელი" {...register("school" , {minLength:{value:2, message:'errors'},required:true})}
            onChange={(e) => { handleChange(e, "school");}}  style={errors.school && {border:"1px solid   #EF5050"} }/>
             {errors.school && <Img src={invalid}/>}
            {(errors.school === undefined && getValues("school") !== undefined && getValues("school") !=="") && <Img src={valid}/>}
            <span>მინიმუმ 2 სიმბოლო</span>
          </School>
          <Quality>
            <SelectBox>
              <label style={errors.select && {color:"#E52F2F"}} >ხარისხი</label>
              <select {...register("select", {required:true})}   onChange={(e) => { handleChange(e, "select");}} 
              className={(errors.select === undefined && getValues("select") !== undefined && getValues("select") !=="") ?  "select  valid" : "select" }
              style={errors.select && {border:"1px solid   #EF5050"} }>
                <option value=""  disabled selected hidden>აირჩიეთ ხარისხი</option>
                <option>{degree1}</option>
                <option>{degree2}</option>
                <option>{degree3}</option>
                <option>{degree4}</option>
                <option>{degree5}</option>
                <option>{degree6}</option>
                <option>{degree7}</option>
                <option>{degree8}</option>
                <option>{degree9}</option>
              </select>
            </SelectBox>
            < DateBox>
            <label style={errors.enddate && {color:"#E52F2F"}}>დამთავრების რიცხვი</label>
              <input type="date" className={(errors.enddate === undefined && getValues("enddate") !== undefined && getValues("enddate") !=="") ? "date valid" : "date" } 
              {...register("enddate",{required:true})}
              onChange={(e) => { handleChange(e, "enddate");}}
              style={errors.enddate && {border:"1px solid   #EF5050"} }/>
            </DateBox>
          </Quality>
          <Description>
          <label style={errors.description && {color:"#E52F2F"}}>აღწერა</label>
            <textarea className={(errors.description === undefined && getValues("description") !== undefined && getValues("description") !=="") ?  "description-text valid" : "description-text" }
             placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            {...register("description", {required:true})}  style={errors.description && {border:"1px solid   #EF5050"} }
            onChange={(e) => { handleChange(e, "description");}}></textarea>
          </Description>
          <Line2/>
          <button className="add">სხვა სასწავლებლის დამატება</button>
          <div className="BtnBox">
            <button className="Btnback"><Link to="/experience"  style={{color:"white", textDecoration:"none"}}>უკან</Link></button>
            <button className="Btn" onClick={handleClick}>დასრულება</button>
          </div>
        </form>
      </Edu>
      <div className="result">
        <div>
          <h1>{getValues("name")} {getValues("surname")}</h1>
          <span><img src={email}/>{getValues("email")}</span>
          <p><img src={phone}/>{getValues("phone")}</p>
          <h3>ჩემს შესახებ</h3>
          <p>ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები გამამხნევებელი
             ვარჯიშების მაგიერ დიზაინს ვაკეთებ.</p>
        </div>

      </div>
    </Main>
  )
}


const Main = styled.div`
    width:1920px;
    height:1080px;
    display: flex;
    flex-direction: row;

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
  margin-top:77px;
  border:1px solid black;
  gap:8px;
  position:relative;
`

const Img = styled.img`
  position:absolute;
  top:45px;
  left:770px;
`

const Quality = styled.div`
  display:flex;
  flex-direction: row;
  border:1px solid black;
  margin-top:40px;
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