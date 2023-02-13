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

export default function Education({ formData, setFormData, setIsResumeVisible }) {
  const [degree1, setDegree1] = useState();
  const [degree2, setDegree2] = useState();
  const [degree3, setDegree3] = useState();
  const [degree4, setDegree4] = useState();
  const [degree5, setDegree5] = useState();
  const [degree6, setDegree6] = useState();
  const [degree7, setDegree7] = useState();
  const [degree8, setDegree8] = useState();
  const [degree9, setDegree9] = useState();

  const [institute, setInstitute] = useState(false);
  const [degree, setDegree] = useState(false);
  const [dueDate, setDueDate] = useState(false);
  const [description, setDescription] = useState(false);

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
    setIsResumeVisible(false);
    localStorage.setItem("isResumeVisible", false)
    navigate("/result");


  };
  const handleChange = (event, input, index) => {
    setValue(input, event.target.value);
    trigger(event.target.name);
    localStorage.setItem(event.target.name, event.target.value);

    let newEducation = formData.educations;
    if (input === "institute") {
      newEducation[index].institute = event.target.value;
      setFormData({ ...formData, educations: newEducation });
      localStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, educations: newEducation })
      );
    } else if (input === "degree_id") {
      newEducation[index].degree_id = event.target.value;
      setFormData({ ...formData, educations: newEducation });
      localStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, educations: newEducation })
      );
    } else if (input === "due_date") {
      newEducation[index].due_date = event.target.value;
      setFormData({ ...formData, educations: newEducation });
      localStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, educations: newEducation })
      );
    } else if (input === "description") {
      newEducation[index].description = event.target.value;
      setFormData({ ...formData, educations: newEducation });
      localStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, educations: newEducation })
      );
    }
  };

  let storedInstitute = localStorage.getItem("institute");
  let storedDegree = localStorage.getItem("degree_id");
  let storedEndDate = localStorage.getItem("enddate");
  let storedDescription = localStorage.getItem("description");
  useEffect(() => {
    storedInstitute = localStorage.getItem("institute");
    storedDegree = localStorage.getItem("degree_id");
    storedEndDate = localStorage.getItem("enddate");
    storedDescription = localStorage.getItem("description");
    setValue("institute", storedInstitute);
    setValue("degree_id", storedDegree);
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

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }



  const handleClick = () => {
    let file = dataURLtoFile(formData.image, "image-name.png");
    trigger();

    // axios.post( 'https://resume.redberryinternship.ge/api', formData)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

  };

  
  const handleAdd = () =>{
    let newEducation = formData.educations
    newEducation.push({
      institute: "",
      degree_id: "",
      due_date: "",
      description: "",
    })
    setFormData({...formData, educations: newEducation})
    localStorage.setItem("formData", JSON.stringify(formData))

    console.log(formData.educations)
  }

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
          {formData.educations.map((education, index) => {
            return (
              <div key={index}>
                <School>
                  <label style={errors.institute && { color: "#E52F2F" }}>
                    სასწავლებელი
                  </label>
                  <input
                    className={
                      errors.institute === undefined &&
                      getValues("institute") !== undefined &&
                      getValues("institute") !== ""
                        ? "school valid"
                        : "school"
                    }
                    type="text"
                    placeholder="სასწავლებელი"
                    {...register(`institute${index}`, {
                      minLength: { value: 2, message: "errors" },
                      required: true,
                    })}
                    value={formData.educations[index].institute}
                    onChange={(e) => {
                      handleChange(e, "institute", index);
                      setInstitute(true);
                    }}
                    style={
                      institute == true
                        ? errors.institute && { border: "1px solid   #EF5050" }
                        : { border: "1px solid  #BCBCBC" }
                    }
                  />
                  {errors.institute && <Img src={invalid} />}
                  {institute == true
                    ? errors.school === undefined &&
                      getValues("institute") !== undefined &&
                      getValues("institute") !== "" && <Img src={valid} />
                    : null}
                  <span>მინიმუმ 2 სიმბოლო</span>
                </School>
                <Quality>
                  <SelectBox>
                    <label style={errors.degree_id && { color: "#E52F2F" }}>
                      ხარისხი
                    </label>
                    <select
                      {...register(`degree_id${index}`, { required: true })}
                      onChange={(e) => {
                        handleChange(e, "degree_id", index);
                        setDegree(true);
                      }}
                      value={formData.educations[index].degree_id || "აირჩიეთ ხარისხი"}
                      className={
                        errors.degree_id === undefined &&
                        getValues("degree_id") !== undefined &&
                        getValues("degree_id") !== ""
                          ? "degree  valid"
                          : "degree"
                      }
                      style={
                        degree == true
                          ? errors.degree_id && {
                              border: "1px solid   #EF5050",
                            }
                          : { border: "1px solid  #BCBCBC" }
                      }
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
                        errors.due_date === undefined &&
                        getValues("due_date") !== undefined &&
                        getValues("due_date") !== ""
                          ? "date valid"
                          : "date"
                      }
                      {...register(`due_date${index}`, { required: true })}
                      value={formData.educations[index].due_date}
                      onChange={(e) => {
                        handleChange(e, "due_date", index);
                        setDueDate(true);
                      }}
                      style={
                        dueDate == true
                          ? errors.due_date && { border: "1px solid   #EF5050" }
                          : { border: "1px solid  #BCBCBC" }
                      }
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
                    {...register(`description${index}`, { required: true })}
                    value={formData.educations[index].description}
                    onChange={(e) => {
                      handleChange(e, "description", index);
                      setDescription(true);
                    }}
                    style={
                      description == true
                        ? errors.description && {
                            border: "1px solid   #EF5050",
                          }
                        : { border: "1px solid  #BCBCBC" }
                    }
                  ></textarea>
                </Description>
                <Line2 />
              </div>
            );
          })}
          <button onClick={handleAdd} className="add">სხვა სასწავლებლის დამატება</button>
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
