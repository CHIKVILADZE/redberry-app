import React, { useEffect } from "react";
import styled from "styled-components";
import back from "../assets/back.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import invalid from "../assets/invalid.png";
import valid from "../assets/valid.png";
import { getValue } from "@testing-library/user-event/dist/utils";
import { useNavigate, Link } from "react-router-dom";
import Resume from "../components/Resume";

export default function PrivateInfo({ formData, setFormData }) {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    trigger,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState(false);
  const [surname, setSurname] = useState(false);
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState(false);

  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/experience");
  };
  let storedName = localStorage.getItem("name");
  let storedSurname = localStorage.getItem("surname");
  let storedEmail = localStorage.getItem("email");
  let storedPhone = localStorage.getItem("phone_number");
  let storedAboutMe = localStorage.getItem("about_me");

  useEffect(() => {
    storedSurname = localStorage.getItem("surname");
    storedEmail = localStorage.getItem("email");
    storedName = localStorage.getItem("name");
    storedPhone = localStorage.getItem("phone_number");
    storedAboutMe = localStorage.getItem("about_me");
    setValue("name", storedName);
    setValue("surname", storedSurname);
    setValue("email", storedEmail);
    if (storedPhone !== null) {
      setValue("phone_number", storedPhone);
    }

    setValue("about_me", storedAboutMe);
    
  }, []);

  const handleChange = (event, input) => {
    setValue(input, event.target.value);
    trigger(event.target.name);
    localStorage.setItem(event.target.name, event.target.value);

    if (input === "name") {
      setFormData({...formData, name: event.target.value})
      localStorage.setItem("formData", JSON.stringify({...formData, name: event.target.value}))
    } else if (input === "surname") {
      setFormData({...formData, surname: event.target.value})
      localStorage.setItem("formData", JSON.stringify({...formData, surname: event.target.value}))
    } else if (input === "about_me") {
      setFormData({...formData, about_me: event.target.value})
      localStorage.setItem("formData", JSON.stringify({...formData, about_me: event.target.value}))
    } else if (input === "email") {
      setFormData({...formData, email: event.target.value})
      localStorage.setItem("formData", JSON.stringify({...formData, email: event.target.value}))
    } else if (input === "phone_number") {
      setFormData({...formData, phone_number: event.target.value})
      localStorage.setItem("formData", JSON.stringify({...formData, phone_number: event.target.value}))
    }

  };

  const handleChangeImage = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const dataUrl = reader.result;
      setFormData({...formData, image: dataUrl})
      localStorage.setItem("formData", JSON.stringify({...formData, image: dataUrl}))
    }
      
  };
  

  const handleClick = () => {
    trigger();
  };


  return (
    <Main>
      <Info>
        <Header>
          <Link
            to="/redberry-app"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button>
              <img src={back} />
            </Button>
          </Link>
          <Title>პირადი ინფო</Title>
          <Pages>1/3</Pages>
        </Header>
        <Line />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="namesurname">
            <div className="name">
              <label style={errors.name && { color: "#E52F2F" }}>სახელი</label>
              <input
                className={
                  name == true
                    ? errors.name === undefined &&
                      getValues("name") !== undefined &&
                      getValues("name") !== ""
                      ? "nameinput valid"
                      : "nameinput"
                    : "nameinput"
                }
                type="text"
                placeholder="ანზორ"
                {...register("name", {
                  minLength: { value: 2, message: "errors" },
                  pattern: { value: /^[ა-ჰ]+$/, message: "errors" },
                  required: { value: true, message: "errors" },
                })}
                onChange={(e) => {
                  handleChange(e, "name");
                  setName(true);
                }}
                style={
                  name == true
                    ? errors.name && { border: "1px solid   #EF5050" }
                    : { color: "#BCBCBC" }
                }
              />
              {name == true ? errors.name && <Img src={invalid} /> : null}
              {name == true
                ? errors.name === undefined &&
                  getValues("name") !== undefined &&
                  getValues("name") !== "" && <Img src={valid} />
                : null}

              <span>მინიმუმ 2 ასო, ქართული ასოები</span>
            </div>
            <div className="surname">
              <label
                style={
                  surname == true
                    ? errors.surname && { color: "#E52F2F" }
                    : { color: "#000000" }
                }
              >
                გვარი
              </label>
              <input
                className={
                  surname == true
                    ? errors.surname === undefined &&
                      getValues("surname") !== undefined &&
                      getValues("surname") !== ""
                      ? "surnameinput valid"
                      : "surnameinput"
                    : "surnameinput"
                }
                type="text"
                placeholder="მუმლაძე"
                {...register("surname", {
                  minLength: { value: 2, message: "errors" },
                  pattern: { value: /^[ა-ჰ]+$/, message: "errors" },
                  required: { value: true, message: "errors" },
                })}
                onChange={(e) => {
                  handleChange(e, "surname");
                  setSurname(true);
                }}
                style={
                  surname == true
                    ? errors.surname && { border: "1px solid  #EF5050" }
                    : { color: "#BCBCBC" }
                }
              />
              {surname == true ? errors.surname && <Img src={invalid} /> : null}
              {surname == true
                ? errors.surname === undefined &&
                  getValues("surname") !== undefined &&
                  getValues("surname") !== "" && <Img src={valid} />
                : null}
              <span>მინიმუმ 2 ასო, ქართული ასოები</span>
            </div>
          </div>

          <UploadPhoto>
            <h5>პირადი ფოტოს ატვირთვა</h5>
            <label className="uploadlabel" htmlFor="upload">
              ატვირთვა
            </label>
            <input
              id="upload"
              className="upload"
              type="file"
              {...register("photo")}
              onChange={(e) => {
                handleChangeImage(e, "photo");
              }}
            />
          </UploadPhoto>
          <AboutMe>
            <label>ჩემ შესახებ (არასავალდებულო)</label>
            <textarea
              className={
                getValues("about_me") !== undefined &&
                getValues("about_me") !== ""
                  ? "textarea valid"
                  : "textarea"
              }
              placeholder="ზოგადი ინფო შენ შესახებ"
              {...register("about_me")}
              onChange={(e) => {
                handleChange(e, "about_me");
              }}
            ></textarea>
          </AboutMe>
          <Email>
            <label style={errors.email && { color: "#E52F2F" }}>ელ.ფოსტა</label>
            <input
              className={
                errors.email === undefined &&
                getValues("email") !== undefined &&
                getValues("email") !== ""
                  ? "email valid"
                  : "email"
              }
              type="text"
              placeholder="anzorr666@redberry.ge"
              {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9.]+@redberry.ge$/,
                  message: "errors",
                },
                required: { value: true, message: "errors" },
              })}
              onChange={(e) => {
                handleChange(e, "email");
                setEmail(true);
              }}
              style={errors.email && { border: "1px solid  #EF5050" }}
            />
            {errors.email && <img className="emailinvalid" src={invalid} />}
            {email == true
              ? errors.email === undefined &&
                getValues("email") !== undefined &&
                getValues("email") !== "" && (
                  <img className="emailvalid" src={valid} />
                )
              : null}

            <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
          </Email>
          <Mobile>
            <label style={errors.phone_number && { color: "#E52F2F" }}>
              მობილურის ნომერი
            </label>
            <InputMask
              value={storedPhone}
              className={
                errors.phone === undefined &&
                getValues("phone_number") !== undefined &&
                getValues("phone_number") !== ""
                  ? "phone valid"
                  : "phone"
              }
              placeholder="+995 597 63 45 16"
              mask="+999 999 99 99 99"
              maskChar={null}
              {...register("phone_number", {
                required: { value: true, message: "errors" },
                pattern: {
                  value: /^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/,
                  message: "errors",
                },
              })}
              onChange={(e) => {
                handleChange(e, "phone_number");
                setPhone(true);
              }}
              style={errors.phone_number && { border: "1px solid  #EF5050" }}
            />
            {errors.phone_number && <img className="emailinvalid" src={invalid} />}
            {phone == true
              ? errors.phone_number === undefined &&
                getValues("phone_number") !== undefined &&
                getValues("phone_number") !== "" && (
                  <img className="emailvalid" src={valid} alt="valid" />
                )
              : null}

            <span>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</span>
          </Mobile>

          <Btn
            type="submit"
            onClick={() => {
              setSurname(true);
            }}
          >
            ᲨᲔᲛᲓᲔᲒᲘ
          </Btn>
        </form>
      </Info>

    
    </Main>
  );
}

const Main = styled.div`
  width: 1920px;
  height: 1080px;

  display: flex;
  flex-direction: row;
`;
const Info = styled.div`
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
const Img = styled.img`
  width: 21px;
  height: 18.65px;
  position: absolute;
  top: 45px;
  left: 360px;
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
const UploadPhoto = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 150px;
  margin-top: 54px;
`;
const AboutMe = styled.div`
  width: 846px;
  height: 148px;

  margin-left: 126px;
  margin-top: 54px;
`;

const Email = styled.div`
  width: 846px;
  height: 122px;
  margin-top: 25px;
  margin-left: 126px;

  display: flex;
  flex-direction: column;
  position: relative;
`;

const Mobile = styled.div`
  width: 846px;
  height: 122px;
  margin-left: 126px;

  display: flex;
  flex-direction: column;
  margin-top: 8px;
  position: relative;
`;
const Btn = styled.button`
  background-color: #6b40e3;
  width: 151px;
  height: 48px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.08em;
  color: #ffffff;
  position: absolute;
  left: 797px;
  top: 867px;
  border-radius: 4px;
  border: none;
`
