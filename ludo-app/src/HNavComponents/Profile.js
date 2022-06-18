import Header from "./Header";
import { getAnalytics, logEvent } from "firebase/analytics";
import { useEffect } from "react";

const Profile = () =>{
    useEffect(()=>{
        const analytics = getAnalytics();
        logEvent(analytics, 'profile file', { name: 'PROFILE'});
      },[])
    return(
        <div>
            <Header/>
            <b>Profile Componets</b>
        </div>
    )
    }
    
    export default Profile;