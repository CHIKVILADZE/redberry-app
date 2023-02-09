import React from 'react'
import styled from 'styled-components'
import back from '../assets/back.png'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import InputMask from "react-input-mask";
import email from '../assets/email.png'
import phone from '../assets/phone.png'
import invalid from '../assets/invalid.png'
import valid from '../assets/valid.png'
import { getValue } from '@testing-library/user-event/dist/utils'
import {useNavigate, Link} from 'react-router-dom'


export default function PrivateInfo() {
  const { register, handleSubmit, getValues,  setValue, trigger, formState: { errors } } = useForm()

  const navigate = useNavigate()
  const onSubmit = () =>{
       navigate("/experience")
   
   } 
   

  

  const handleChange = (event, input) => {
    setValue(input, event.target.value);
    trigger(event.target.name);
    
  }
 
  const handleClick = () =>{
    trigger()
  
  }


  return (
    <Main>
      <Info>
        <Header>
          <Link to="/redberry-app" style={{color:"white", textDecoration:"none"}}><Button><img src={back}/></Button></Link>
          <Title>პირადი ინფო</Title>
          <Pages>1/3</Pages>
        </Header>
        <Line/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="namesurname">
            <div className='name'>
              <label style={errors.name && {color:"#E52F2F"}}>სახელი</label>
              <input className={(errors.name === undefined && getValues("name") !== undefined && getValues("name") !=="") ? "nameinput valid" : "nameinput" }
               type="text" placeholder="ანზორ" {...register("name",
              {minLength:{value:2, message:"errors"},pattern:{value:/^[ა-ჰ]+$/, message:"errors"},
              required:{value:true, message:"errors"}})}  onChange={(e) => { handleChange(e, "name");
              }} style={errors.name && {border:"1px solid   #EF5050"} }/>
               {errors.name && <Img src={invalid}/>}
               {(errors.name === undefined && getValues("name") !== undefined && getValues("name") !=="") && <Img src={valid}/>}
              
               
              <span>მინიმუმ 2 ასო, ქართული ასოები</span>
            </div>
            <div className='surname'>
              <label style={errors.surname && {color:"#E52F2F"}}>გვარი</label>
              <input className={(errors.surname === undefined && getValues("surname") !== undefined && getValues("surname") !=="") ? "surnameinput valid" : "surnameinput" }
               type="text" placeholder="მუმლაძე" {...register("surname",
              {minLength:{value:2, message:"errors"},pattern:{value:/^[ა-ჰ]+$/, message:"errors"},
              required:{value:true, message:"errors"}})}  onChange={(e) => { handleChange(e, "surname");}}
              style={errors.surname && {border:"1px solid  #EF5050"}}/>
              {errors.surname && <Img src={invalid}/>}
              {(errors.surname === undefined && getValues("surname") !== undefined && getValues("surname") !=="") && <Img src={valid}/>} 
              <span>მინიმუმ 2 ასო, ქართული ასოები</span>
            </div>
          </div>  
        
          <UploadPhoto>
            <h5>პირადი ფოტოს ატვირთვა</h5>
            <label className="uploadlabel" htmlFor='upload'>ატვირთვა</label>
            <input id='upload' className="upload" type="file" {...register("photo")}
             onChange={(e) => { handleChange(e, "photo");}}/>
          </UploadPhoto>
          <AboutMe>
            <label >ჩემ შესახებ (არასავალდებულო)</label>
            <textarea className={(getValues("descript") !== undefined && getValues("descript") !=="") ? "textarea valid" : "textarea" }  
            placeholder="ზოგადი ინფო შენ შესახებ" {...register("descript")}  onChange={(e) => { handleChange(e, "descript");}}></textarea>
            
          </AboutMe>
          <Email>
            <label style={errors.email && {color:"#E52F2F"}}>ელ.ფოსტა</label>
            <input className={(errors.email === undefined && getValues("email") !== undefined && getValues("email") !=="") ? "email valid" : "email" } 
            type="text" placeholder="anzorr666@redberry.ge" {...register("email",
            {pattern:{value:/^[a-zA-Z0-9.]+@redberry.ge$/, message:"errors"},required:{value:true, message:"errors"}})}
            onChange={(e) => { handleChange(e, "email");
             }}  style={errors.email && {border:"1px solid  #EF5050"}}/>
              {errors.email && <img className="emailinvalid" src={invalid}/>}
              {(errors.email === undefined && getValues("email") !== undefined && getValues("email") !=="") && <img className="emailvalid" src={valid}/>} 
            <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
          </Email>
          <Mobile>
            <label style={errors.phone && {color:"#E52F2F"}}>მობილურის ნომერი</label>
            <InputMask
            className={(errors.phone === undefined && getValues("phone") !== undefined && getValues("phone") !=="") ? "phone valid" : "phone" }
              placeholder="+995 597 63 45 16"
              mask="+999 999 99 99 99"
              maskChar={null}
              {...register("phone", {
                required: { value: true, message: "errors" },
                pattern: {value: /^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/,
                  message: "errors", },})} onChange={(e) => { handleChange(e, "phone");}}
                  style={errors.phone && {border:"1px solid  #EF5050"}} />
             {errors.phone && <img className="emailinvalid" src={invalid}/>}  
             {(errors.phone === undefined && getValues("phone") !== undefined && getValues("phone") !=="") && <img className="emailvalid" src={valid}/>} 

            
             
            <span>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</span>
          </Mobile>
          
            
           
           <Btn type="submit" onClick={handleClick}>ᲨᲔᲛᲓᲔᲒᲘ</Btn>
        </form>
        
      </Info>

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
    border:2px solid black;
    display:flex;
    flex-direction: row;
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
const Img = styled.img`
  width:21px;
  height:18.65px;
  position:absolute;
  top:45px;
  left:360px;
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
  position:relative;
`
const Mobile = styled.div`
  width:846px;
  height:122px;
  margin-left:126px;
  border:1px solid black;
  display:flex;
  flex-direction:column;
  margin-top:8px;
  position:relative;
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
  top:867px;
  border-radius:4px;
  border:none;
`


