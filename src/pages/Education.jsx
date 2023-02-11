import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import back from "../assets/back.png";
import { useForm } from "react-hook-form";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import invalid from "../assets/invalid.png";
import valid from "../assets/valid.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Education() {
  const [degree1, setDegree1] = useState();
  const [degree2, setDegree2] = useState();
  const [degree3, setDegree3] = useState();
  const [degree4, setDegree4] = useState();
  const [degree5, setDegree5] = useState();
  const [degree6, setDegree6] = useState();
  const [degree7, setDegree7] = useState();
  const [degree8, setDegree8] = useState();
  const [degree9, setDegree9] = useState();

  const[school, setSchool] = useState(false)
  const[degree, setDegree] = useState(false)
  const[endDate, setEndDate] = useState(false)
  const[description, setDescription] = useState(false)

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
    navigate("/resume");
  };
  const handleChange = (event, input) => {
    setValue(input, event.target.value);
    trigger(event.target.name);
    localStorage.setItem(event.target.name, event.target.value);
  };

 let storedSchool = localStorage.getItem("school");
 let storedDegree = localStorage.getItem("degree");
 let storedEndDate = localStorage.getItem("enddate");
 let storedDescription = localStorage.getItem("description");
  useEffect(() => {
    storedSchool = localStorage.getItem("school");
    storedDegree = localStorage.getItem("degree");
    storedEndDate = localStorage.getItem("enddate");
    storedDescription = localStorage.getItem("description");
    setValue("school", storedSchool);
    setValue("degree", storedDegree);
    setValue("enddate", storedEndDate);
    setValue("description", storedDescription);
  }, []);

  useEffect(() => {
    let getData = async () => {
      let response = await axios.get(
        "https://resume.redberryinternship.ge/api/degrees"
      );
      let Id1 = response.data[0].title;
      let Id2 = response.data[1].title;
      let Id3 = response.data[2].title;
      let Id4 = response.data[3].title;
      let Id5 = response.data[4].title;
      let Id6 = response.data[5].title;
      let Id7 = response.data[6].title;
      let Id8 = response.data[7].title;
      let Id9 = response.data[8].title;
      setDegree1(Id1);
      setDegree2(Id2);
      setDegree3(Id3);
      setDegree4(Id4);
      setDegree5(Id5);
      setDegree6(Id6);
      setDegree7(Id7);
      setDegree8(Id8);
      setDegree9(Id9);
    };

    getData();
    
  }, []);

  const handleClick = () => {
    trigger();
  };
  console.log(degree1);

  
  return (
    <Main>
      <Edu>
        <Header>
          <Button>
            <Link
              to="/redberry-app"
              style={{ color: "white", textDecoration: "none" }}
            >
              <img src={back} />
            </Link>
          </Button>
          <Title>განათლება</Title>
          <Pages>3/3</Pages>
        </Header>
        <Line />
        <form onSubmit={handleSubmit(onSubmit)}>
          <School>
            <label style={errors.school && { color: "#E52F2F" }}>
              სასწავლებელი
            </label>
            <input
              className={
                errors.school === undefined &&
                getValues("school") !== undefined &&
                getValues("school") !== ""
                  ? "school valid"
                  : "school"
              }
              type="text"
              placeholder="სასწავლებელი"
              {...register("school", {
                minLength: { value: 2, message: "errors" },
                required: true,
              })}
              onChange={(e) => {
                handleChange(e, "school");
                setSchool(true)
              }}
              style={school == true ? errors.school && { border: "1px solid   #EF5050" } : { border: "1px solid  #BCBCBC" }}
            />
            {errors.school && <Img src={invalid} />}
            {school == true ? errors.school === undefined &&
              getValues("school") !== undefined &&
              getValues("school") !== "" && <Img src={valid} /> : null}
            <span>მინიმუმ 2 სიმბოლო</span>
          </School>
          <Quality>
            <SelectBox>
              <label style={errors.degree && { color: "#E52F2F" }}>
                ხარისხი
              </label>
              <select
              value={storedDegree || "აირჩიეთ ხარისხი"}
                {...register("degree", { required: true })}
                onChange={(e) => {
                  handleChange(e, "degree");
                  setDegree(true)
                }}
                className={
                  errors.degree === undefined &&
                  getValues("degree") !== undefined &&
                  getValues("degree") !== ""
                    ? "degree  valid"
                    : "degree"
                }
                style={degree == true ? errors.degree && { border: "1px solid   #EF5050" } : { border: "1px solid  #BCBCBC" }}
              >
                <option disabled hidden>
                აირჩიეთ ხარისხი
              </option>
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
            <DateBox>
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
                style={endDate == true ? errors.enddate && { border: "1px solid   #EF5050" } : { border: "1px solid  #BCBCBC" }}
              />
            </DateBox>
          </Quality>
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
               onChange={(e) => {
                handleChange(e, "description");
                setDescription(true)
              }}
              style={ description == true ? errors.description && { border: "1px solid   #EF5050" }: { border: "1px solid  #BCBCBC" }}
            ></textarea>
          </Description>
          <Line2 />
          <button className="add">სხვა სასწავლებლის დამატება</button>
          <div className="BtnBox1">
            <button className="Btnback">
              <Link
                to="/experience"
                style={{ color: "white", textDecoration: "none" }}
              >
                უკან
              </Link>
            </button>
            <button className="Btn" onClick={handleClick}>
              დასრულება
            </button>
          </div>
        </form>
      </Edu>
      <div className="result">
        <div>
          <h1>
            {getValues("name")} {getValues("surname")}
          </h1>
          <span>
            <img src={email} />
            {getValues("email")}
          </span>
          <p>
            <img src={phone} />
            {getValues("phone")}
          </p>
          <h3>ჩემს შესახებ</h3>
          <p>
            ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები
            გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.
          </p>
        </div>
      </div>
    </Main>
  );
}

const Main = styled.div`
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: row;
`;
const Edu = styled.div`
  width: 1098px;
  height: 1080px;
 
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
const School = styled.div`
  width: 846px;
  height: 125px;
  display: flex;
  flex-direction: column;
  margin-left: 126px;
  margin-top: 77px;
 
  gap: 8px;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  top: 45px;
  left: 770px;
`;

const Quality = styled.div`
  display: flex;
  flex-direction: row;
  
  margin-top: 40px;
  width: 80%;
  margin-left: 126px;
`;
const SelectBox = styled.div`
  width: 419px;
  height: 125px;
 
`;
const DateBox = styled.div`
  width: 419px;
  height: 125px;
 
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
  margin-left: 126px;
`;
