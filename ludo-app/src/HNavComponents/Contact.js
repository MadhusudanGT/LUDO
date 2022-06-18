import Header from "./Header";
import { getAnalytics, logEvent } from "firebase/analytics";
import { useEffect } from "react";

const Contact = () =>{
    useEffect(()=>{
        const analytics = getAnalytics();
        logEvent(analytics, 'Cintact file', { name: 'CONTACT'});
      },[])
    return(
        <div>
            <Header/>
            <b>CONTACT Componet</b>
        </div>
    )
    }
    
    export default Contact;