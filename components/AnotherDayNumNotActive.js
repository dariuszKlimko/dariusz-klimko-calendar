import React from 'react';

const AnotherDayNumNotActive = (props) => {

    return(
        <div className={props.dayNumNotActive}>
            {props.dayNum}
        </div>
    );
}

export default AnotherDayNumNotActive;