import styled from 'styled-components'
import GetStarted from './components/GetStarted'
import PrivateInfo from './pages/PrivateInfo';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Resume from './pages/Resume';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">



         <Routes>
            <Route path="/redberry-app" element={<GetStarted/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/privateinfo" element={<PrivateInfo/>}/>
            <Route path="/resume" element={<Resume/>}/>
         </Routes>
      
    </div>
  );
}

export default App;
