import React from 'react';

const DayNumNotActive = (props) => {

    const buttonClick = (e) =>{
        props.changeMonth();
        e.preventDefault();
    };

    return(
        <div className={props.dayNumNotActive} onClick={buttonClick}>
            {props.dayNum}
        </div>
    );
}

export default DayNumNotActive;