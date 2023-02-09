import React from 'react'
import styled from 'styled-components'
import back from '../assets/back.png'
import {useForm} from 'react-hook-form'
import email from '../assets/email.png'
import phone from '../assets/phone.png'
import invalid from '../assets/invalid.png'
import valid from '../assets/valid.png'
import {Link, useNavigate} from 'react-router-dom'


export default function Education() {

  const { register, handleSubmit, getValues, setValue, trigger, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const onSubmit = () =>{
       navigate("/resume")
   
   } 
   const handleClick = () =>{
    trigger()
  
  }


  const handleChange = (event, input) => {
    setValue(input, event.target.value);
    trigger(event.target.name);
  };

  return (
    <Main>
      <Edu>
      <Header>
          <Button><Link to="/" style={{color:"white", textDecoration:"none"}}><img src={back}/></Link></Button>
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