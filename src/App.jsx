import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Course from './pages/Course';
import Resume from './pages/ResumeA.pat.jsx'
import Activity from './pages/Activity';
import ScrollToTop from './componentes/ScrollToTop';
import ResumeAgolf from './pages/ResumeA.golf.jsx';
import ResumeAbas from './pages/ResumeA.bas.jsx';
import ResumeAlek from './pages/ResumeA.lek.jsx';
import ResumeAsarawin from './pages/ResumeA.sarawin.jsx';
import AlumniPage from './pages/Alumni';
import ResumePkanda from './pages/ResumeP.kanda.jsx';
import ResumeAoak from './pages/ResumeA.oak.jsx';
const App = () => {
  return (
    <Router basename="/ETwebtest">
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/course' element={<Course />} />
        <Route path='/อาจารย์วรรณวิภา' element={<Resume />} />
        <Route path='/activity' element={<Activity />} />
        <Route path='/อาจารย์วุฒิกานต์' element={<ResumeAgolf />}/>
        <Route path='/อาจารย์พรศักดิ์' element={<ResumeAbas />} />
        <Route path='/อาจารย์ดนัยเลิศ' element={<ResumeAlek />} />
        <Route path='/อาจารย์ศราวิน' element={<ResumeAsarawin />} />
        <Route path='/alumni' element={<AlumniPage />} />
        <Route path='/พี่กานดา' element={<ResumePkanda/>} />
        <Route path='/อาจารย์ชนกานต์' element={<ResumeAoak/>} />
      </Routes>
    </Router>
  );
}

export default App