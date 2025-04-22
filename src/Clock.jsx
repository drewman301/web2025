import React from 'react';
import { useState } from 'react';
import './clock.css';

function Clock(props){

    //Functions to get current date and time
    const getTime = () => new Date().toLocaleTimeString();
    const getDate = () => new Date().toLocaleDateString();

    
    // Hooks for the state of the clock
    const [currentTime, setCurrentTime] = useState(getTime(props.locale));
    const [currentDate, setCurrentDate] = useState(getDate(props.locale));

    setInterval(() => {
        setCurrentTime(getTime());
        setCurrentDate(getDate());
    }, 1000);

    return(
        <div className='clock'>
            <h2>
                {currentTime}
            </h2>
            <p>
                {currentDate}
            </p>
        </div>
    );
}

Clock.defaultProps = {
    locale: "en-US"
}

export default Clock;