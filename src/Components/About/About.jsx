import React, { useRef, useEffect, useState } from 'react';
import './About.css';
import abt_img from '../../assets/doggos.png';

const About = () => {
  const [animate, setAnimate] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(aboutRef.current);

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`about ${animate ? 'animate' : ''}`} ref={aboutRef}>
      <div className="about-left">
        <img src={abt_img} alt="" className="about-img" />
      </div>
      <div className='about-right'>
        <p>All creatures deserve a life free from fear and pain. 
        It's true that the greatness of a nation can be judged by
         the way its animals are treated.</p>
        <p>
          Prakruti is the social welfare club formed from the merger
          of two other clubs, Animals Welfare club and Incredible NITT. 
          We believe that true beauty is found in nature, and we work 
          to preserve the natural flora and fauna of the campus. Taking
          care of the birds, dogs, flora and every type of livelihood
          that is a part of nature and adds to its beauty is what we do
          round the clock. Our team also helps the animals and birds 
          on campus, who can't speak like us, but can count on us for 
          medical care when they are ill. We also work to keep a count of the 
          animals and birds inside the campus and help in preserving them.
        </p>
      </div>
    </div>
  );
};

export default About;
