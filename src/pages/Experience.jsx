import React from 'react'
import styled from 'styled-components'
import back from '../assets/back.png'
import {useForm} from 'react-hook-form'
import {useEffect} from 'react'
import email from '../assets/email.png'
import phone from '../assets/phone.png'
import invalid from '../assets/invalid.png'
import valid from '../assets/valid.png'
import {Link, useNavigate} from 'react-router-dom'

export default function Experience() {


  const { register, handleSubmit, getValues,  setValue, trigger, formState: { errors } } = useForm()

  const navigate = useNavigate()
  const onSubmit = () =>{
       navigate("/education")
   
   } 
   const handleClick = () =>{
    trigger("name")
  
  }

  // useEffect(() =>{
  //   const storedPosition = localStorage.getItem("position");
  //   const storedEmployer = localStorage.getItem("employer");
  //   const storedStartDate = localStorage.getItem("startdate");
  //   const storedEndDate = localStorage.getItem("enddate");
  //   const storedDescription = localStorage.getItem("description");
  //     setValue("position", storedPosition )
  //     setValue("employer", storedEmployer )
  //     setValue("startdate", storedStartDate )
  //     setValue("enddate", storedEndDate )
  //     setValue("description", storedDescription )

  //  },[])


  const handleChange = (event, input) => {
    setValue(input, event.target.value);
    trigger(event.target.name);
    // localStorage.setItem(event.target.name, event.target.value);
  };
 

  
  
  return (
    <Main>
      <Exp>
      <Header>
          <Button><Link to="/redberry-app" style={{color:"white", textDecoration:"none"}}><img src={back}/></Link></Button>
          <Title>გამოცდილება</Title>
          <Pages>2/3</Pages>
        </Header>
        <Line/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Position>
            <label style={errors.name && {color:"#E52F2F"}}>თანამდებობა</label>
            <input className={(errors.position === undefined && getValues("position") !== undefined && getValues("position") !=="") ? "position valid" : "position" }
            type="text" placeholder="დეველოპერი, დიზაინერი, ა.შ."
            {...register("position", {minLength:{value:2, message:"error"},required:true})}
            style={errors.position && {border:"1px solid   #EF5050"} } onChange={(e) => { handleChange(e, "position");}}/>
             {errors.position && <Img src={invalid}/>}
            {(errors.position === undefined && getValues("position") !== undefined && getValues("position") !=="") && <Img src={valid}/>}
            <span>მინიმუმ 2 სიმბოლო</span>
          </Position>
          <Employer>
            <label style={errors.name && {color:"#E52F2F"}}>დამსაქმებელი</label>
            <input className={(errors.employer === undefined && getValues("employer") !== undefined && getValues("employer") !=="") ? "employer valid" : "employer" }
             type="text" placeholder="დამსაქმებელი"
            {...register("employer", {minLength:{value:2, message:"error"},required:true})}
            style={errors.employer && {border:"1px solid   #EF5050"} } onChange={(e) => { handleChange(e, "employer");}}/>
             {errors.employer && <Img src={invalid}/>}
            {(errors.employer === undefined && getValues("employer") !== undefined && getValues("employer") !=="") && <Img src={valid}/>}
            <span>მინიმუმ 2 სიმბოლო</span>
          </Employer>
          <DateBox>
            <Start>
              <label style={errors.startdate && {color:"#E52F2F"}}>დაწყების რიცხვი</label>
              <input type="date" className={(errors.startdate === undefined && getValues("startdate") !== undefined && getValues("startdate") !=="") ? "date valid" : "date" }
               {...register("startdate",{required:true})}
              onChange={(e) => { handleChange(e, "startdate");}}
              style={errors.startdate && {border:"1px solid   #EF5050"} }/>
            </Start>
            <End>
              <label style={errors.enddate && {color:"#E52F2F"}}>დამთავრების რიცხვი</label>
              <input type="date" className={(errors.enddate === undefined && getValues("enddate") !== undefined && getValues("enddate") !=="") ? "date valid" : "date" } 
              {...register("enddate",{required:true})}
              onChange={(e) => { handleChange(e, "enddate");}}
              style={errors.enddate && {border:"1px solid   #EF5050"} }/>
            </End>
          </DateBox>       
          <Description>
            <label style={errors.description && {color:"#E52F2F"}}>აღწერა</label>
            <textarea className={(errors.description === undefined && getValues("description") !== undefined && getValues("description") !=="") ?  "description-text valid" : "description-text" }
             placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            {...register("description", {required:true})}  style={errors.description && {border:"1px solid   #EF5050"} }
            onChange={(e) => { handleChange(e, "description");}}></textarea>
          </Description>
          <Line2/>
          <button onClick={handleClick} className="add">მეტი გამოცდილების დამატება</button>
          <div className="BtnBox">
          <button className="Btnback"><Link to="/privateinfo"  style={{color:"white", textDecoration:"none"}}>უკან</Link></button>
            <button className="Btn">შემდეგი</button>
          </div>

        </form>
       

        


        
        
      </Exp>
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
    display:flex;
    flex-direction: row;
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
  position:relative;
`

const Employer = styled.div`
 width:846px;
  height:125px;
  display:flex;
  flex-direction: column;
  margin-top:30px;
  margin-left:126px;
  gap:8px;
  position:relative;
  
`
const Img = styled.img`
  width:21px;
  height:18.65px;
  position:absolute;
  top:45px;
  left:760px;
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