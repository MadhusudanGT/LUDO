import { useEffect } from "react";
import Header from "./Header";
import { getAnalytics, logEvent } from "firebase/analytics";
const Blog = () =>{
    useEffect(()=>{
        const analytics = getAnalytics();
        logEvent(analytics, 'Blog file', { name: 'BLOG'});
      })
    return(
        <div>
            <Header/>
           <b> BLOG Component</b>
        </div>
    )
    }
    
    export default Blog;