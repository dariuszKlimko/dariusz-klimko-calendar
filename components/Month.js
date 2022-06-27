import React from 'react';
import DayName from './DayName';
import DayNum from './DayNum';
import DayNumNotActive from './DayNumNotActive';
import TodoApp from './TodoApp';
import {CSSTransition} from 'react-transition-group';

const Month = (props) => {

    const dayArrAfter = [7, 1, 2, 3, 4, 5, 6];
    const dayArrBefore = ([...Array(props.amountDayPrevMonth+1).keys()].reverse());

    const days = ([...Array(props.amountDay).keys()].map(x=>x+1));
    const dayBefore = ([...Array(props.startDay).keys()].map(x=>x-1).slice(1).reverse());
    const dayAfter = ([...Array(7-dayArrAfter[props.lastDay]).keys()].map(x=>x+1));
 
    const openTodoApp = (dayIndex) => { 
        props.openTodoApp(dayIndex);
    };

    const closeTodo=()=>{
        props.closeTodo();
    }; 

     const addItems = (title) =>{
        props.addItems(title);
    };
    
    const completeItem = (index) =>{
        props.completeItem(index);
    };
    
    const removeItem = (index) =>{
        props.removeItem(index);
    };

    const handleInc = () =>{
        props.handleInc();
    };

    const handleDec = () =>{
        props.handleDec();
    };

    return(
        <div>
        <CSSTransition in={props.animationInProp} timeout={300} classNames={props.animationClass} >
            <div  className={props.monthContainerClass}>
                <div className={props.monthHeadClass}>
                    {props.monthName[props.month]}&nbsp;{props.year}
                </div>
                <CSSTransition in={!props.flag} timeout={300} classNames='opacityMonth' >
                <div >
                    {!props.flag&&(<div className={props.monthClass}>
                        {props.dayName.map((e)=>(
                            <DayName 
                                key={e.toString()}
                                dayName={e}
                                dayNameClass={props.dayNameClass}
                            />
                        ))}
                        {dayBefore.map((e)=>(
                            <DayNumNotActive
                                key={e.toString()}
                                dayNum={dayArrBefore[e]}
                                dayNumNotActive={props.dayNumNotActive}
                                changeMonth={handleDec}
                            />
                        ))}
                        {days.map((e)=>(
                            <DayNum 
                                key={e.toString()}
                                dayNum={e}
                                dayNumClass={props.dayNumClass}
                                actualDay={props.actualDay}
                                dayNumActualClass={props.month===props.actualMonth&&props.year===props.actualYear ? props.dayNumActualClass : props.dayNumClass}
                                openTodoApp={openTodoApp}
                            />
                        ))}
                        {dayAfter.map((e)=>(
                            <DayNumNotActive
                                key={e.toString()}
                                dayNum={e}
                                dayNumNotActive={props.dayNumNotActive}
                                changeMonth={handleInc}
                            />
                        ))}
                    </div>)}
                </div>
                </CSSTransition>
                <CSSTransition in={props.flag} timeout={300} classNames='todoAppClassAnimation'>
                <div >
                    {props.flag ? <TodoApp 
                        dayItem={props.dayItem} 
                        closeTodo={closeTodo}
                        addItems={addItems}
                        removeItem={removeItem}
                        completeItem={completeItem}
                        items={props.items}
                        /> : ''}
                 </div>
                 </CSSTransition>
            </div>
        </CSSTransition>
        </div>
    );
}

export default Month;