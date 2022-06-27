import React, { useState } from 'react';

const DayNum = (props) => {

    const [dayIndex, setDayIndex] = useState(props.dayNum);

    const divClick = (e) => {
        setDayIndex(props.dayNum);
        props.openTodoApp(dayIndex);
        e.preventDefault();
    };

    return(
            <div className={props.dayNum===props.actualDay ? props.dayNumActualClass : props.dayNumClass} onClick={divClick}>
                {props.dayNum}
            </div>
    );
}

export default DayNum;