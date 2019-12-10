import './sessonDisplay.css';
import React from 'react';

const seasonConfig ={
    Summer : {
        text : "Lets hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold',
        iconName : 'snowflake'
    }
};



const getSeason = (lat, month) =>{
    if(month > 2 && month < 9){
     return   lat > 0 ? 'Summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'Summer';
    }
}

const SessonDisplay = props => {

 const seson = getSeason(props.lat, new Date().getMonth())
  const {text, iconName} = seasonConfig[seson];
    return (
        <div className={`season-display  ${seson}`}>
       
        <i className = {`icon-left massive ${iconName} icon`}/>  
        <h1> 
            {text}
       </h1>
       <i className={`icon-right massive ${iconName} icon`}/>
       </div>
    );
   
};

export default SessonDisplay;