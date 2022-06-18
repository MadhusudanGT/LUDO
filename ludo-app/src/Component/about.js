import Header from "../HNavComponents/Header";
import { getAnalytics, logEvent } from "firebase/analytics";
import { useEffect } from "react";

const About = () => {
  useEffect(()=>{
    const analytics = getAnalytics();
    logEvent(analytics, 'ABOUT file', { name: 'ABOUT'});
  },[])
    return (
      <div>
        <Header/>
        <h1>ABOUT US Components.</h1>
      </div>
    );
  };
    
  export default About;