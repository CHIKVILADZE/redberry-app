import styled from "styled-components";
import GetStarted from "./pages/GetStarted";
import PrivateInfo from "./pages/PrivateInfo";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Resume from "./components/Resume";
import Result from "./pages/Result";
import { Routes, Route, useNavigate } from "react-router-dom";
import Exercise from "./components/Exercise";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("formData")) || {
      name: "",
      surname: "",
      email: "",
      phone_number: "",
      experiences: [
        {
          position: "",
          employer: "",
          start_date: "",
          due_date: "",
          description: "",
        },
      ],
      educations: [
        {
          institute: "",
          degree_id: "",
          due_date: "",
          description: "",
        },
      ],
      image: "",
      about_me: "",
    }
  );

  const [isResumeVisible, setIsResumeVisible] = useState(
    localStorage.getItem("isResumeVisible") || false
  );

  return (
    <Main>
      <BrowserRouter>
        <Routes>
          <Route
            path="/redberry-app"
            element={
              <GetStarted
                setIsResumeVisible={setIsResumeVisible}
              />
            }
          />
          <Route
            path="/experience"
            element={
              <Experience formData={formData} setFormData={setFormData} />
            }
          />
          <Route
            path="/education"
            element={
              <Education
                formData={formData}
                setFormData={setFormData}
                isResumeVisible={isResumeVisible}
                setIsResumeVisible={setIsResumeVisible}
              />
            }
          />
          <Route
            path="/privateinfo"
            element={
              <PrivateInfo formData={formData} setFormData={setFormData} />
            }
          />
          <Route
            path="/result"
            element={<Result formData={formData} setFormData={setFormData} />}
          />
        </Routes>
      </BrowserRouter>

      {isResumeVisible ? <Resume formData={formData} /> : null}
    </Main>
  );
}

export default App;

const Main = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  width: 1920px;
`;
