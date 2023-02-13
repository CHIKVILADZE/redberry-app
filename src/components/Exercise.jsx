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
import Result from './Resume'

export default function Exercise() {
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
  const [endDate, setEndDate] = useState(false);
  const [description, setDescription] = useState(false);


  const [forms, setForms] = useState([1])

  const experiences = [
    {
      position: "",
      employer: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]

 

 
  useEffect(() => {
    const storedPosition = localStorage.getItem("position");
    const storedEmployer = localStorage.getItem("employer");
    const storedStartDate = localStorage.getItem("startdate");
    const storedEndDate = localStorage.getItem("enddate");
    const storedDescription = localStorage.getItem("description");
    setValue("position", storedPosition);
    setValue("employer", storedEmployer);
    setValue("startdate", storedStartDate);
    setValue("enddate", storedEndDate);
    setValue("description", storedDescription);
  }, []);

  const handleChange = (event, input) => {
    setValue(input, event.target.value);
    trigger(event.target.name);
    localStorage.setItem(event.target.name, event.target.value);
  };
  const handleAdd = () =>{
    setForms(prev => [...prev, 1])
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
          <Title>გამოცდილება</Title>
          <Pages>2/3</Pages>
        </Header>
        <Line />
        <form onSubmit={handleSubmit(onSubmit)}>
         {forms.map((form, index) => {
          return (
            <div key={index}>
          <Position>
            <label style={errors.name && { color: "#E52F2F" }}>
              თანამდებობა
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
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
              {...register("position", {
                minLength: { value: 2, message: "error" },
                required: true,
              })}
              style={position == true ? errors.position && { border: "1px solid   #EF5050" } : { border: "1px solid  #BCBCBC" }}
              onChange={(e) => {
                handleChange(e, "position");
                setPosition(true);
              }}
            />
            {errors.position && <Img src={invalid} />}
            {position == true ? errors.position === undefined &&
              getValues("position") !== undefined &&
              getValues("position") !== "" && <Img src={valid}/> : null}
            <span>მინიმუმ 2 სიმბოლო</span>
          </Position>
          <Employer>
            <label style={errors.name && { color: "#E52F2F" }}>
              დამსაქმებელი
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
              placeholder="დამსაქმებელი"
              {...register("employer", {
                minLength: { value: 2, message: "error" },
                required: true,
              })}
              style={employer == true ?  errors.employer && { border: "1px solid   #EF5050" } : { border: "1px solid    #BCBCBC" } }
              onChange={(e) => {
                handleChange(e, "employer");
                setEmployer(true)
              }}
            />
            {errors.employer && <Img src={invalid} />}
            {employer == true ? errors.employer === undefined &&
              getValues("employer") !== undefined &&
              getValues("employer") !== "" && <Img src={valid} /> : null}
            <span>მინიმუმ 2 სიმბოლო</span>
          </Employer>
          <DateBox>
            <Start>
              <label style={errors.startdate && { color: "#E52F2F" }}>
                დაწყების რიცხვი
              </label>
              <input
                type="date"
                className={
                  errors.startdate === undefined &&
                  getValues("startdate") !== undefined &&
                  getValues("startdate") !== ""
                    ? "date valid"
                    : "date"
                }
                {...register("startdate", { required: true })}
                onChange={(e) => {
                  handleChange(e, "startdate");
                  setStartDate(true)
                }}
                style={startDate == true ? errors.startdate && { border: "1px solid   #EF5050" } : { border: "1px solid    #BCBCBC" } }
              />
            </Start>
            <End>
              <label style={errors.enddate && { color: "#E52F2F" }}>
                დამთავრების რიცხვი
              </label>
              <input
                type="date"
                className={
                  errors.enddate === undefined &&
                  getValues("enddate") !== undefined &&
                  getValues("enddate") !== ""
                    ? "date valid"
                    : "date"
                }
                {...register("enddate", { required: true })}
                onChange={(e) => {
                  handleChange(e, "enddate");
                  setEndDate(true)
                }}
                style={endDate == true ? errors.enddate && { border: "1px solid   #EF5050" } : { border: "1px solid    #BCBCBC" }}
              />
            </End>
          </DateBox>
          <Description>
            <label style={errors.description && { color: "#E52F2F" }}>
              აღწერა
            </label>
            <textarea
              className={
                errors.description === undefined &&
                getValues("description") !== undefined &&
                getValues("description") !== ""
                  ? "description-text valid"
                  : "description-text"
              }
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              {...register("description", { required: true })}
              style={description == true ? errors.description && { border: "1px solid   #EF5050" } : { border: "1px solid    #BCBCBC" }}
              onChange={(e) => {
                handleChange(e, "description");
                setDescription(true)
              }}
            ></textarea>
          </Description>
          <Line2 />
          </div>
          )
         })  }
          <button  className="add" onClick={handleAdd}>
            მეტი გამოცდილების დამატება
          </button>
          <div className="BtnBox">
            <button className="Btnback">
              <Link
                to="/privateinfo"
                style={{ color: "white", textDecoration: "none" }}
              >
                უკან
              </Link>
            </button>
            <button className="Btn">შემდეგი</button>
          </div>
        </form>
      </Exp>
      
      <Result/>
    </Main>
  );
}

const Main = styled.div`
  width: 1920px;
  min-height: 1080px;
  display: flex;
  flex-direction: row;

`;
const Exp = styled.div`
  width: 1098px;
  min-height: 1080px;
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
