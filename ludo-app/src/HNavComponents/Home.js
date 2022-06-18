import Header from "./Header";
import { getAnalytics, logEvent } from "firebase/analytics";
import { useEffect } from "react";

const Home = () =>{
    useEffect(()=>{
        const analytics = getAnalytics();
        logEvent(analytics, 'HOME file', { name: 'home'});
      },[])
return(
    <div>
        <Header/>
        <b>Home Component</b>
    </div>
)
}

export default Home;