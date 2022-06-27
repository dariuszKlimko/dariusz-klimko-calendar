import React, {useState, useEffect} from 'react';
import Month from './components/Month';
import AnotherMonth from './components/AnotherMonth';
import './Calendar.css';

function Calendar() {

  const dayName = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clockInterval = setInterval(() => setTime(new Date()), 1000);
    return () => {clearInterval(clockInterval);}
    },[]);
  
  const actual = new Date();
  const actualDay = actual.getDate();
  const actualMonth = actual.getMonth();
  const actualYear = actual.getFullYear();

  const today = new Date();
  const [date, setDate] = useState(today);
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(new Date(date.getFullYear(), date.getMonth(), 1).getDay());
  const [lastDay, setLastDay] = useState(new Date(date.getFullYear(), date.getMonth()+1, 0).getDay());
  const [amountDay, setAmountDay]  = useState(new Date(date.getFullYear(), date.getMonth()+1, 0).getDate());
  const [amountDayPrevMonth, setAmountDayPrevMonth] = useState(new Date(date.getFullYear(), date.getMonth(), 0).getDate());
  
  const [todayPrev, setTodayPrev] = useState(new Date(date.getFullYear(), date.getMonth()-1, 1));
  const [datePrev, setDatePrev] = useState(todayPrev);
  const [monthPrev, setMonthPrev] = useState(datePrev.getMonth());
  const [yearPrev, setYearPrev] = useState(datePrev.getFullYear());
  const [startDayPrev, setStartDayPrev] = useState(new Date(datePrev.getFullYear(), datePrev.getMonth(), 1).getDay());
  const [lastDayPrev, setLastDayPrev] = useState(new Date(datePrev.getFullYear(), datePrev.getMonth()+1, 0).getDay());
  const [amountDayPrev, setAmountDayPrev] = useState(new Date(datePrev.getFullYear(), datePrev.getMonth()+1, 0).getDate());
  const [amountDayPrevMonthPrev, setAmountDayPrevMonthPrev] = useState(new Date(datePrev.getFullYear(), datePrev.getMonth(), 0).getDate());

  const [todayNext, setTodayNext] = useState(new Date(date.getFullYear(), date.getMonth()+1, 1));
  const [dateNext, setDateNext] = useState(todayNext);
  const [monthNext, setMonthNext] = useState(dateNext.getMonth());
  const [yearNext, setYearNext] = useState(dateNext.getFullYear());
  const [startDayNext, setStartDayNext] = useState(new Date(dateNext.getFullYear(), dateNext.getMonth(), 1).getDay());
  const [lastDayNext, setLastDayNext]  = useState(new Date(dateNext.getFullYear(), dateNext.getMonth()+1, 0).getDay());
  const [amountDayNext, setAmountDayNext] = useState(new Date(dateNext.getFullYear(), dateNext.getMonth()+1, 0).getDate());
  const [amountDayPrevMonthNext, setAmountDayPrevMonthNext] = useState(new Date(dateNext.getFullYear(), dateNext.getMonth(), 0).getDate());

  const [todayUnvisiblePrev, setTodayUnvisiblePrev] = useState(new Date(date.getFullYear(), date.getMonth()-2, 1));
  const [dateUnvisiblePrev, setDateUnvisiblePrev] = useState(todayUnvisiblePrev);
  const [monthUnvisiblePrev, setMonthUnvisiblePrev] = useState(dateUnvisiblePrev.getMonth());
  const [yearUnvisiblePrev, setYearUnvisiblePrev] = useState(dateUnvisiblePrev.getFullYear());
  const [startDayUnvisiblePrev, setStartDayUnvisiblePrev] = useState(new Date(dateUnvisiblePrev.getFullYear(), dateUnvisiblePrev.getMonth(), 1).getDay());
  const [lastDayUnvisiblePrev, setLastDayUnvisiblePrev] = useState(new Date(dateUnvisiblePrev.getFullYear(), dateUnvisiblePrev.getMonth()+1, 0).getDay());
  const [amountDayUnvisiblePrev, setAmountDayUnvisiblePrev] = useState(new Date(dateUnvisiblePrev.getFullYear(), dateUnvisiblePrev.getMonth()+1, 0).getDate());
  const [amountDayUnvisiblePrevMonthPrev, setAmountDayUnvisiblePrevMonthPrev] = useState(new Date(dateUnvisiblePrev.getFullYear(), dateUnvisiblePrev.getMonth(), 0).getDate());

  const [todayUnvisibleNext, setTodayUnvisibleNext] = useState(new Date(date.getFullYear(), date.getMonth()+2, 1));
  const [dateUnvisibleNext, setDateUnvisibleNext] = useState(todayUnvisibleNext);
  const [monthUnvisibleNext, setMonthUnvisibleNext] = useState(dateUnvisibleNext.getMonth());
  const [yearUnvisibleNext, setYearUnvisibleNext] = useState(dateUnvisibleNext.getFullYear());
  const [startDayUnvisibleNext, setStartDayUnvisibleNext] = useState(new Date(dateUnvisibleNext.getFullYear(), dateUnvisibleNext.getMonth(), 1).getDay());
  const [lastDayUnvisibleNext, setLastDayUnvisibleNext]  = useState(new Date(dateUnvisibleNext.getFullYear(), dateUnvisibleNext.getMonth()+1, 0).getDay());
  const [amountDayUnvisibleNext, setAmountDayUnvisibleNext] = useState(new Date(dateUnvisibleNext.getFullYear(), dateUnvisibleNext.getMonth()+1, 0).getDate());
  const [amountDayUnvisiblePrevMonthNext, setAmountDayUnvisiblePrevMonthNext] = useState(new Date(dateUnvisibleNext.getFullYear(), dateUnvisibleNext.getMonth(), 0).getDate());

  const [inProp, setInProp] = useState(false);
  const [monthUnvisiblePrevRot, setMonthUnvisiblePrevRot] = useState(null);
  const [monthPrevRot, setMonthPrevRot] = useState(null);
  const [monthRot, setMonthRot] = useState(null);
  const [monthNextRot, setMonthNextRot] = useState(null);
  const [monthUnvisibleNextRot, setMonthUnvisibleNextRot] = useState(null);
  //-----------------------------------------------TODO APP-----------------------------------------------------------------------
    
    const [flag, setFlag] = useState(false);
    const [dayItem, setDayItem] = useState('');
    const [monthItem, setMonthItem] = useState('');
    const [yearItem, setYearItem] = useState('');
    const [arr, setArr] = useState([]);
    const [testArr, setTestArr] = useState([]);
    const [items, setItems] = useState([]);
    const [result, setResult] = useState(false);

  //------------------------------------------------------------------------------------------------------------------------------
  const handleDec = () =>{
    if(flag===true){
      closeTodo();
    const timerDec =setTimeout(()=>{
      setMonthUnvisiblePrevRot('monthUnvisiblePrevDec');
      setMonthPrevRot('monthPrevDec');
      setMonthRot('monthDec');
      setMonthNextRot('monthNextDec'); 
      setMonthUnvisibleNextRot('monthUnvisibleNextDec');
      setInProp(true);
    },300);
    const timerDec1 =setTimeout(()=>{
      setInProp(false);
      setDate(new Date(year, month - 1, 1));
      setDatePrev(new Date(yearPrev, monthPrev - 1, 1));
      setDateNext(new Date(yearNext, monthNext - 1, 1));
      setDateUnvisiblePrev(new Date(yearUnvisiblePrev, monthUnvisiblePrev - 1, 1));
      setDateUnvisibleNext(new Date(yearUnvisibleNext, monthUnvisibleNext - 1, 1));
    },600);
    return ()=>clearTimeout(timerDec, timerDec1);
    } else{
      setMonthUnvisiblePrevRot('monthUnvisiblePrevDec');
      setMonthPrevRot('monthPrevDec');
      setMonthRot('monthDec');
      setMonthNextRot('monthNextDec'); 
      setMonthUnvisibleNextRot('monthUnvisibleNextDec');
      setInProp(true);
    
    const timerDec1 =setTimeout(()=>{
      setInProp(false);
      setDate(new Date(year, month - 1, 1));
      setDatePrev(new Date(yearPrev, monthPrev - 1, 1));
      setDateNext(new Date(yearNext, monthNext - 1, 1));
      setDateUnvisiblePrev(new Date(yearUnvisiblePrev, monthUnvisiblePrev - 1, 1));
      setDateUnvisibleNext(new Date(yearUnvisibleNext, monthUnvisibleNext - 1, 1));
    },300);
    return ()=>clearTimeout(timerDec1);
    }
  } 

  const handleInc = () =>{
    if(flag===true){
      closeTodo();
    const timerInc = setTimeout(()=>{
      setMonthUnvisiblePrevRot('monthUnvisiblePrevInc');
      setMonthPrevRot('monthPrevInc');
      setMonthRot('monthInc');
      setMonthNextRot('monthNextInc');
      setMonthUnvisibleNextRot('monthUnvisibleNextInc');
      setInProp(true);
    },300);
    const timerInc1 = setTimeout(()=>{
      setInProp(false);
      setDate(new Date(year, month + 1, 1));
      setDatePrev(new Date(yearPrev, monthPrev + 1, 1));
      setDateNext(new Date(yearNext, monthNext + 1, 1));
      setDateUnvisiblePrev(new Date(yearUnvisiblePrev, monthUnvisiblePrev + 1, 1));
      setDateUnvisibleNext(new Date(yearUnvisibleNext, monthUnvisibleNext + 1, 1));
    },600);
    return ()=>clearTimeout(timerInc,timerInc1);
    } else{
      setMonthUnvisiblePrevRot('monthUnvisiblePrevInc');
      setMonthPrevRot('monthPrevInc');
      setMonthRot('monthInc');
      setMonthNextRot('monthNextInc');
      setMonthUnvisibleNextRot('monthUnvisibleNextInc');
      setInProp(true);
    
    const timerInc1 = setTimeout(()=>{
      setInProp(false);
      setDate(new Date(year, month + 1, 1));
      setDatePrev(new Date(yearPrev, monthPrev + 1, 1));
      setDateNext(new Date(yearNext, monthNext + 1, 1));
      setDateUnvisiblePrev(new Date(yearUnvisiblePrev, monthUnvisiblePrev + 1, 1));
      setDateUnvisibleNext(new Date(yearUnvisibleNext, monthUnvisibleNext + 1, 1));
    },300);
    return ()=>clearTimeout(timerInc1);
    }
  }

  useEffect(() => {
      setMonth(date.getMonth());
      setYear(date.getFullYear());
      setStartDay(new Date(date.getFullYear(), date.getMonth(), 1).getDay());
      setLastDay(new Date(date.getFullYear(), date.getMonth()+1, 0).getDay());
      setAmountDay(new Date(date.getFullYear(), date.getMonth()+1, 0).getDate());
      setAmountDayPrevMonth(new Date(date.getFullYear(), date.getMonth(), 0).getDate());
    
      setTodayPrev(new Date(date.getFullYear(), date.getMonth()-1, date.getDate()));
      setMonthPrev(datePrev.getMonth());
      setYearPrev(datePrev.getFullYear());
      setStartDayPrev(new Date(datePrev.getFullYear(), datePrev.getMonth(), 1).getDay());
      setLastDayPrev(new Date(datePrev.getFullYear(), datePrev.getMonth()+1, 0).getDay());
      setAmountDayPrev(new Date(datePrev.getFullYear(), datePrev.getMonth()+1, 0).getDate());
      setAmountDayPrevMonthPrev(new Date(datePrev.getFullYear(), datePrev.getMonth(), 0).getDate());

      setTodayNext(new Date(date.getFullYear(), date.getMonth()+1, 10));
      setMonthNext(dateNext.getMonth());
      setYearNext(dateNext.getFullYear());
      setStartDayNext(new Date(dateNext.getFullYear(), dateNext.getMonth(), 1).getDay());
      setLastDayNext(new Date(dateNext.getFullYear(), dateNext.getMonth()+1, 0).getDay());
      setAmountDayNext(new Date(dateNext.getFullYear(), dateNext.getMonth()+1, 0).getDate());
      setAmountDayPrevMonthNext(new Date(dateNext.getFullYear(), dateNext.getMonth(), 0).getDate());

      setTodayUnvisiblePrev(new Date(date.getFullYear(), date.getMonth()-2, date.getDate()));
      setMonthUnvisiblePrev(dateUnvisiblePrev.getMonth());
      setYearUnvisiblePrev(dateUnvisiblePrev.getFullYear());
      setStartDayUnvisiblePrev(new Date(dateUnvisiblePrev.getFullYear(), dateUnvisiblePrev.getMonth(), 1).getDay());
      setLastDayUnvisiblePrev(new Date(dateUnvisiblePrev.getFullYear(), dateUnvisiblePrev.getMonth()+1, 0).getDay());
      setAmountDayUnvisiblePrev(new Date(dateUnvisiblePrev.getFullYear(), dateUnvisiblePrev.getMonth()+1, 0).getDate());
      setAmountDayUnvisiblePrevMonthPrev(new Date(dateUnvisiblePrev.getFullYear(), dateUnvisiblePrev.getMonth(), 0).getDate());

      setTodayUnvisibleNext(new Date(date.getFullYear(), date.getMonth()+2, 10));
      setMonthUnvisibleNext(dateUnvisibleNext.getMonth());
      setYearUnvisibleNext(dateUnvisibleNext.getFullYear());
      setStartDayUnvisibleNext(new Date(dateUnvisibleNext.getFullYear(), dateUnvisibleNext.getMonth(), 1).getDay());
      setLastDayUnvisibleNext(new Date(dateUnvisibleNext.getFullYear(), dateUnvisibleNext.getMonth()+1, 0).getDay());
      setAmountDayUnvisibleNext(new Date(dateUnvisibleNext.getFullYear(), dateUnvisibleNext.getMonth()+1, 0).getDate());
      setAmountDayUnvisiblePrevMonthNext(new Date(dateUnvisibleNext.getFullYear(), dateUnvisibleNext.getMonth(), 0).getDate());
  }, [date, dateNext, datePrev, dateUnvisiblePrev, dateUnvisibleNext]);

  useEffect(() => {
    return startDay===0 ? setStartDay(7) : startDay;
  },[startDay]);

  useEffect(() => {
   return startDayPrev===0 ? setStartDayPrev(7) : startDayPrev;
  },[startDayPrev]);

  useEffect(() => {
  return startDayNext===0 ? setStartDayNext(7) : startDayNext;
  },[startDayNext]);

  useEffect(() => {
    return startDayUnvisiblePrev===0 ? setStartDayUnvisiblePrev(7) : startDayUnvisiblePrev;
   },[startDayUnvisiblePrev]);
 
   useEffect(() => {
   return startDayUnvisibleNext===0 ? setStartDayUnvisibleNext(7) : startDayUnvisibleNext;
   },[startDayUnvisibleNext]);

//-----------------------------------------------TODO APP----------------------------------------------------------------------- 
const addItems = (title) =>{
  const newItems = [...items,{yearItem: yearItem, monthItem: monthItem, dayItem: dayItem, title, complete: false}];
  setItems(newItems);
};

const completeItem = index =>{
  const newItems = [...items];
  newItems[index].complete = true;
  // setResult(!result);
  setItems(newItems);
};

const removeItem = index =>{
const newItems = [...items];
newItems.splice(index, 1);
setItems(newItems);
};

const openTodoApp = (dayIndex) => { 
  setFlag(true);
  setDayItem(dayIndex);
  setMonthItem(month);
  setYearItem(year);
  setTestArr(arr.filter(e => e.yearItem === year && e.monthItem === month && e.dayItem === dayIndex));
  setArr(arr.filter(e => e.yearItem !== year|| e.monthItem !== month || e.dayItem !== dayIndex));
  setItems(testArr);
};

const closeTodo = () =>{
   const newArr = [...arr,items].flat();
   setItems([]);
  newArr.sort((a, b) => a.dayItem - b.dayItem);
  newArr.sort((a, b) => a.monthItem - b.monthItem);
  newArr.sort((a, b) => a.yearItem - b.yearItem);
  setArr(newArr);
  setFlag(false);
};

useEffect(()=>{
  setItems(testArr);
},[testArr]);

//-------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className='app'>
      <div className='clock'>
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        <br/>
      </div>
      <div  className='grid-container'>
      <div className='monthUnvisiblePrev'>
        <AnotherMonth
                animationClass={monthUnvisiblePrevRot}
                animationInProp={inProp}
                monthContainerClass={'monthUnvisiblePrevContainer'}
                monthHeadClass={'monthHeadUnvisible'}
                monthClass={'monthUnvisible'}
                dayNumClass={'dayNumUnvisible'}
                dayNumNotActive={'dayNumNotActiveUnvisible'}
                dayNameClass={'dayNameUnvisible'}
                monthName={monthName}
                month={monthUnvisiblePrev}
                year={yearUnvisiblePrev}
                dayName={dayName}
                amountDay={amountDayUnvisiblePrev}
                startDay={startDayUnvisiblePrev}
                lastDay={lastDayUnvisiblePrev}
                amountDayPrevMonth={amountDayUnvisiblePrevMonthPrev}
        />
      </div>
        <div className='monthPrev'>
        <AnotherMonth  
                animationClass={monthPrevRot}
                animationInProp={inProp}
                monthContainerClass={'monthPrevContainer'}
                monthHeadClass={'monthHeadMedium'}
                monthClass={'monthMedium'}
                dayNumClass={'dayNumMedium'}
                dayNumNotActive={'dayNumNotActiveMedium'}
                dayNameClass={'dayNameMedium'}
                monthName={monthName}
                month={monthPrev}
                year={yearPrev}
                dayName={dayName}
                amountDay={amountDayPrev}
                startDay={startDayPrev}
                lastDay={lastDayPrev}
                amountDayPrevMonth={amountDayPrevMonthPrev}
                changeMonth={handleDec}
              />
        </div>
        <div>
          <button className='button1' onClick={handleDec}>{'<<'}</button>
        </div>
            <div className='monthCenter'>
              <Month
                actualDay={actualDay}
                actualMonth={actualMonth}
                actualYear={actualYear}
                dayNumActualClass={'dayNumActual'}
                animationClass={monthRot}
                animationInProp={inProp}
                monthContainerClass={'monthContainer'}
                monthHeadClass={'monthHead'}
                monthClass={'month'}
                dayNumClass={'dayNum'}
                dayNumNotActive={'dayNumNotActive'}
                dayNameClass={'dayName'}
                monthName={monthName}
                month={month}
                year={year}
                dayName={dayName}
                amountDay={amountDay}
                startDay={startDay}
                lastDay={lastDay}
                amountDayPrevMonth={amountDayPrevMonth}
                handleDec={handleDec}
                handleInc={handleInc}
                closeTodo={closeTodo}
                addItems={addItems}
                removeItem={removeItem}
                completeItem={completeItem}
                openTodoApp={openTodoApp}
                items={items}
                flag={flag}
                dayItem={dayItem} 
              />
            </div>
            <div>
                <button className='button1' onClick={handleInc}>{'>>'}</button>
            </div>
        <div className='monthNext'>
          <AnotherMonth
                animationClass={monthNextRot}
                animationInProp={inProp}
                monthContainerClass={'monthNextContainer'}
                monthHeadClass={'monthHeadMedium'}
                monthClass={'monthMedium'}
                dayNumClass={'dayNumMedium'}
                dayNumNotActive={'dayNumNotActiveMedium'}
                dayNameClass={'dayNameMedium'}
                monthName={monthName}
                month={monthNext}
                year={yearNext}
                dayName={dayName}
                amountDay={amountDayNext}
                startDay={startDayNext}
                lastDay={lastDayNext}
                amountDayPrevMonth={amountDayPrevMonthNext}
                // handleInc={changeMonth}
                changeMonth={handleInc}
              />
        </div>
      <div className='monthUnvisibleNext'>
        <AnotherMonth
                animationClass={monthUnvisibleNextRot}
                animationInProp={inProp}
                monthContainerClass={'monthUnvisibleNextContainer'}
                monthHeadClass={'monthHeadUnvisible'}
                monthClass={'monthUnvisible'}
                dayNumClass={'dayNumUnvisible'}
                dayNumNotActive={'dayNumNotActiveUnvisible'}
                dayNameClass={'dayNameUnvisible'}
                monthName={monthName}
                month={monthUnvisibleNext}
                year={yearUnvisibleNext}
                dayName={dayName}
                amountDay={amountDayUnvisibleNext}
                startDay={startDayUnvisibleNext}
                lastDay={lastDayUnvisibleNext}
                amountDayPrevMonth={amountDayUnvisiblePrevMonthNext}
        />
      </div>
      </div>
    </div>
  );
}

export default Calendar;
