import React from 'react';

const DayName = (props) => {
    return(
        <div className={props.dayNameClass}>
            {props.dayName}
        </div>
    );
}

export default DayName;