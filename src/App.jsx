// import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Work from './Components/Works/Work';
import Footer from './Components/Footer/Footer';
import Members from './Components/Members/Members';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </Router>
    </div>
  );
};

const Home = () => {
  return (
    <div>
          <Hero />
          <div className='container'>
      
      <Title subTitle="Prakruti - Nature Club of NITT" />
      <Title subTitle="About Us" />
      <About />
      <Title subTitle="Our Works" />
      <Work />
      <Title subTitle="Members" />
      <Members />
      {/* <Title subTitle="Contact Us" title="Get in touch" /> */}
      <Footer />

    </div>
    {/* <Link to="/members">Members</Link> */}

    </div>
    
  );
};

// const MembersPage = () => {
//   return (
//     <div className='container'>
//       <Title subTitle="Members" />
//       <Members />
//     </div>
//   );
// };

export default App;
