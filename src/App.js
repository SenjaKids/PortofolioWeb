import './style.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portofolio from './components/Portofolio';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';

function App() {

  const [isPopup, setIsPopup] = React.useState(false);

  const [currentPopUpData, setCurrentPopUpData] = React.useState({});



  const popUpHandler = (currentData) => {
    setIsPopup(p => {
      if(!p){
        document.body.classList.add('no-scroll');
        setCurrentPopUpData(currentData);
      }else{
        document.body.classList.remove('no-scroll');
      }
      return !p
    });
  }


  return (
    <>
      {isPopup && <ProjectDetails currentData={currentPopUpData} popUpHandler={popUpHandler} />}
      <Navbar />
      <Home />
      <About />
      <Portofolio popUpHandler={popUpHandler} />
      <Contact />
      <Footer /> 
    </>
  );
}


export default App;
