import React from 'react';

const AnotherDayNum = (props) => {

    const buttonClick = (e) =>{
        props.changeMonth();
        e.preventDefault();
    };

    return(
            <div className={props.dayNumClass} onClick={buttonClick}>
                {props.dayNum}
            </div>
    );
}

export default AnotherDayNum;