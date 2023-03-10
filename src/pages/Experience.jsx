import React from "react";
import styled from "styled-components";
import back from "../assets/back.png";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import invalid from "../assets/invalid.png";
import valid from "../assets/valid.png";
import { Link, useNavigate } from "react-router-dom";
import Resume from '../components/Resume'

export default function Experience({formData, setFormData}) {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    trigger,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/education");
  };

  const [position, setPosition] = useState(false);
  const [employer, setEmployer] = useState(false);
  const [startDate, setStartDate] = useState(false);
  const [dueDate, setDueDate] = useState(false);
  const [description, setDescription] = useState(false); 

 
  useEffect(() => {
    const storedPosition = localStorage.getItem("position");
    const storedEmployer = localStorage.getItem("employer");
    const storedStartDate = localStorage.getItem("start_date");
    const storedEndDate = localStorage.getItem("due_date");
    const storedDescription = localStorage.getItem("description");
    setValue("position", storedPosition);
    setValue("employer", storedEmployer);
    setValue("start_date", storedStartDate);
    setValue("due_date", storedEndDate);
    setValue("description", storedDescription);
  }, []);

  const handleChange = (event, input, index) => {
    setValue(input, event.target.value);
    trigger(event.target.name);
    localStorage.setItem(event.target.name, event.target.value);

    let newExperience = formData.experiences
    if (input === "position") {
      newExperience[index].position = event.target.value
      setFormData({...formData, experiences: newExperience})
      localStorage.setItem("formData", JSON.stringify({...formData, experiences: newExperience}))
    } else if (input === "employer") {
      newExperience[index].employer = event.target.value
      setFormData({...formData, experiences: newExperience})
      localStorage.setItem("formData", JSON.stringify({...formData, experiences: newExperience}))
    } else if (input === "start_date") {
      newExperience[index].start_date = event.target.value
      setFormData({...formData, experiences: newExperience})
      localStorage.setItem("formData", JSON.stringify({...formData, experiences: newExperience}))
    } else if (input === "due_date") {
      newExperience[index].due_date = event.target.value
      setFormData({...formData, experiences: newExperience})
      localStorage.setItem("formData", JSON.stringify({...formData, experiences: newExperience}))
    } else if (input === "description") {
      newExperience[index].description = event.target.value
      setFormData({...formData, experiences: newExperience})
      localStorage.setItem("formData", JSON.stringify({...formData, experiences: newExperience}))
    }
   
    
  };
  const handleAdd = () =>{
    let newExperience = formData.experiences
    newExperience.push({
      position: "",
      employer: "",
      start_date: "",
      due_date: "",
      description: "",
    })
    setFormData({...formData, experiences: newExperience})
    localStorage.setItem("formData", JSON.stringify(formData))

    console.log(formData.experiences)
  }

  return (
    <Main>
      <Exp>
        <Header>
          <Button>
            <Link
              to="/redberry-app"
              style={{ color: "white", textDecoration: "none" }}
            >
              <img src={back} />
            </Link>
          </Button>
          <Title>?????????????????????????????????</Title>
          <Pages>2/3</Pages>
        </Header>
        <Line />
        <form onSubmit={handleSubmit(onSubmit)}>
         {formData.experiences.map((experience, index) => {
          return (
            <div key={index}>
          <Position>
            <label style={errors[`position`] && { color: "#E52F2F" }}>
              ?????????????????????????????????
            </label>
            <input
              className={
                errors.position === undefined &&
                getValues("position") !== undefined &&
                getValues("position") !== ""
                  ? "position valid"
                  : "position"
              }
              type="text"
              placeholder="??????????????????????????????, ???????????????????????????, ???.???."
              {...register(`position${index}`, {
                minLength: { value: 2, message: "error" },
                required: true,
              })}
              value={formData.experiences[index].position}
              style={position == true ? errors[`position`] && { border: "1px solid   #EF5050" } : { border: "1px solid  #BCBCBC" }}
              onChange={(e) => {
                handleChange(e, "position", index);
                setPosition(true);
              }}
            />
            {errors.position && <Img src={invalid} />}
            {position == true ? errors.position === undefined &&
              getValues("position") !== undefined &&
              getValues("position") !== "" && <Img src={valid}/> : null}
            <span>????????????????????? 2 ?????????????????????</span>
          </Position>
          <Employer>
            <label style={errors.name && { color: "#E52F2F" }}>
              ????????????????????????????????????
            </label>
            <input
              className={
                errors.employer === undefined &&
                getValues("employer") !== undefined &&
                getValues("employer") !== ""
                  ? "employer valid"
                  : "employer"
              }
              type="text"
              placeholder="????????????????????????????????????"
              {...register(`employer${index}`, {
                minLength: { value: 2, message: "error" },
                required: true,
              })}
              value={formData.experiences[index].employer}
              style={employer == true ?  errors.employer && { border: "1px solid   #EF5050" } : { border: "1px solid    #BCBCBC" } }
              onChange={(e) => {
                handleChange(e, "employer", index);
                setEmployer(true)
              }}
            />
            {errors.employer && <Img src={invalid} />}
            {employer == true ? errors.employer === undefined &&
              getValues("employer") !== undefined &&
              getValues("employer") !== "" && <Img src={valid} /> : null}
            <span>????????????????????? 2 ?????????????????????</span>
          </Employer>
          <DateBox>
            <Start>
              <label style={errors.start_date && { color: "#E52F2F" }}>
                ???????????????????????? ??????????????????
              </label>
              <input
                type="date"
                className={
                  errors.start_date === undefined &&
                  getValues("start_date") !== undefined &&
                  getValues("start_date") !== ""
                    ? "date valid"
                    : "date"
                }
                {...register(`start_date${index}`, { required: true })}
                value={formData.experiences[index].start_date}
                onChange={(e) => {
                  handleChange(e, "start_date", index);
                  setStartDate(true)
                }}
                style={startDate == true ? errors.start_date && { border: "1px solid   #EF5050" } : { border: "1px solid    #BCBCBC" } }
              />
            </Start>
            <End>
              <label style={errors.due_date && { color: "#E52F2F" }}>
                ????????????????????????????????? ??????????????????
              </label>
              <input
                type="date"
                className={
                  errors.due_date === undefined &&
                  getValues("due_date") !== undefined &&
                  getValues("due_date") !== ""
                    ? "date valid"
                    : "date"
                }
                {...register(`due_date${index}`, { required: true })}
                value={formData.experiences[index].due_date}
                onChange={(e) => {
                  handleChange(e, "due_date", index);
                  setDueDate(true)
                }}
                style={dueDate == true ? errors.due_date && { border: "1px solid   #EF5050" } : { border: "1px solid    #BCBCBC" }}
              />
            </End>
          </DateBox>
          <Description>
            <label style={errors.description && { color: "#E52F2F" }}>
              ??????????????????
            </label>
            <textarea
              className={
                errors.description === undefined &&
                getValues("description") !== undefined &&
                getValues("description") !== ""
                  ? "description-text valid"
                  : "description-text"
              }
              placeholder="???????????? ??????????????????????????????????????? ?????? ?????????????????? ??????????????????"
              {...register(`description${index}`, { required: true })}
              value={formData.experiences[index].description}
              style={description == true ? errors.description && { border: "1px solid   #EF5050" } : { border: "1px solid    #BCBCBC" }}
              onChange={(e) => {
                handleChange(e, "description", index);
                setDescription(true)
              }}
            ></textarea>
          </Description>
          <Line2 />
          </div>
          )
         })  }
          <button  className="add" onClick={handleAdd}>
            ???????????? ???????????????????????????????????? ????????????????????????
          </button>
          <div className="BtnBox">
          <Link to="/privateinfo"
                style={{ color: "white", textDecoration: "none" }}>
            <button className="Btnback">
                ????????????
              
            </button>
            </Link>
            <button className="Btn" type="submit">?????????????????????</button>
          </div>
        </form>
      </Exp>

    
    </Main>
  );
}

const Main = styled.div`
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: row;
`;
const Exp = styled.div`
  width: 1098px;
  height: 1080px;
  border: 1px solid red;
  background-color: #f9f9f9;
`;

const Header = styled.header`
  width: 100%;
  height: 86px;
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  margin-left: 48px;
  margin-top: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-left: 61px;
  margin-top: 47px;
  color: #1a1a1a;
`;
const Pages = styled.div`
  width: 29px;
  height: 24px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
  color: #1a1a1a;
  margin-left: 592px;
  margin-top: 49px;
`;
const Line = styled.div`
  width: 798px;
  border: 1px solid #1a1a1a;
  margin-left: 150px;
`;
const Position = styled.div`
  width: 846px;
  height: 125px;
  display: flex;
  flex-direction: column;
  margin-top: 77px;
  gap: 8px;
  margin-left: 126px;
  position: relative;
`;

const Employer = styled.div`
  width: 846px;
  height: 125px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 126px;
  gap: 8px;
  position: relative;
`;
const Img = styled.img`
  width: 21px;
  height: 18.65px;
  position: absolute;
  top: 45px;
  left: 760px;
`;
const DateBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  gap: 8px;
`;

const Start = styled.div`
  width: 413px;
  height: 93px;

  margin-left: 126px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const End = styled.div`
  width: 413px;
  height: 93px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Description = styled.div`
  width: 846px;
  height: 168px;

  margin-left: 126px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Line2 = styled.div`
  width: 798px;
  border: 1px solid #c1c1c1;
  margin-top: 58px;
  margin-left: 149px;
`;
