import styled from 'styled-components'
import GetStarted from './components/GetStarted'
import PrivateInfo from './pages/PrivateInfo';
import Experience from './pages/Experience';
import Education from './pages/Education';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">



         <Routes>
            <Route path="/" element={<GetStarted/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/privateinfo" element={<PrivateInfo/>}/>
         </Routes>
      
    </div>
  );
}

export default App;
