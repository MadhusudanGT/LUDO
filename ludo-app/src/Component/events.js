import Header from "../HNavComponents/Header";
import React, { useEffect } from 'react';
import { getAnalytics, logEvent } from "firebase/analytics";

const Events = () => {
	useEffect(()=>{
        const analytics = getAnalytics();
        logEvent(analytics, 'events file', { name: 'events'});
      },[])
return (
	<div>
		<Header/>
	<h1> Events Componet</h1>
	</div>
);
};

export default Events;
