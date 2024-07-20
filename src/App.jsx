import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Calendar from './Component/Calendar/Calendra';
import Navbar from './Component/Navbar/Navbar';
import Projects from './Component/List/List';
import Tracker from './Component/Board/tracker';
import Overview from './Component/OverView/OverView';
import Timeline from './Component/Timeline/Timeline';
import Message from "./Component/Message/AppContainer"
import RagisterationComponent from "./Component/Ragistration/RagistrationComponent"
import DashBoard from './Component/DashBoard/DashBoard';


const App = () => {
  return (
   
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/TaskBoard" element={<TaskBoard />} /> */}
        <Route path="/" element={<Overview />} />
        <Route path="/Tracker" element={<Tracker />} />
        <Route path="/List" element={<Projects />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Timeline" element={<Timeline />} />
        <Route path="/AppContainer" element={<Message />} /> 
        <Route path='/Login' element={ <RagisterationComponent/>} />
        {/* <Route path='/DashBoard' element={<Dashboard/>} /> */}
        <Route path='/DashBoard' element={<DashBoard/>} />
      </Routes>
    </Router>
    // <DashBoard/>
  );
};

export default App;
