import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
 
import Jobs from './Components/Jobs';
import JobDetail from './Components/JobDetail';
import About from './Components/About';
import { useEffect , useState } from 'react';
 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  return (
    <>
      <Navbar  toggleDarkMode = {toggleDarkMode} isDarkMode = {isDarkMode} />
      <Routes>
        <Route exact path="/" element={<Home />} />
       <Route   path="/jobs" element={<Jobs/>}></Route>
        <Route path='/about' element={<About/>} />
        <Route path="/jobdetail" element={<JobDetail/>} />
      </Routes>
    </>
  );
}

export default App;

