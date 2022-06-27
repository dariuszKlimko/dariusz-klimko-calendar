import React from 'react';
import DayName from './DayName';
import AnotherDayNum from './AnotherDayNum';
import AnotherDayNumNotActive from './AnotherDayNumNotActive';
import {CSSTransition} from 'react-transition-group';

const AnotherMonth = (props) => {

    const dayArrAfter = [7, 1, 2, 3, 4, 5, 6];
    const dayArrBefore = ([...Array(props.amountDayPrevMonth+1).keys()].reverse());

    const days = ([...Array(props.amountDay).keys()].map(x=>x+1));
    const dayBefore = ([...Array(props.startDay).keys()].map(x=>x-1).slice(1).reverse());
    const dayAfter = ([...Array(7-dayArrAfter[props.lastDay]).keys()].map(x=>x+1));

    const changeMonth = () =>{
        props.changeMonth();
    };

    return(
        <div>
        <CSSTransition in={props.animationInProp} timeout={300} classNames={props.animationClass} >
            <div className={props.monthContainerClass}>
                <div className={props.monthHeadClass}>
                    {props.monthName[props.month]}&nbsp;{props.year}
                </div>
                
                <div>
                    <div className={props.monthClass}>
                        {props.dayName.map((e)=>(
                            <DayName 
                                key={e.toString()}
                                dayName={e}
                                dayNameClass={props.dayNameClass}
                            />
                        ))}
                        {dayBefore.map((e)=>(
                            <AnotherDayNumNotActive
                                key={e.toString()}
                                dayNum={dayArrBefore[e]}
                                dayNumNotActive={props.dayNumNotActive}
                            />
                        ))}
                        {days.map((e)=>(
                            <AnotherDayNum 
                                key={e.toString()}
                                dayNum={e}
                                dayNumClass={props.dayNumClass}
                                changeMonth={changeMonth}
                            />
                        ))}
                        {dayAfter.map((e)=>(
                            <AnotherDayNumNotActive
                                key={e.toString()}
                                dayNum={e}
                                dayNumNotActive={props.dayNumNotActive}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </CSSTransition>
        </div>
    );
}

export default AnotherMonth;