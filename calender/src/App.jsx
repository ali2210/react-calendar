import { useDeferredValue, useEffect, useState } from 'react'
import BImage from './image.jsx';
import { Box } from '@mui/material';
import Countdown, { calcTimeDelta } from 'react-countdown';
import './App.css'

function App() {

  const date = new Date('2024-02-15T23:59:59');
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMin] = useState(0);
  const [dates, setDates] = useState(0);
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);
  const [currhour, setCurrhour] = useState(0);
  const [currmin, setCurrMin] = useState(0);

  const renderer = ({days, hours, minutes}) =>{
      
      setDay(days);
      setHour(hours);
      setMin(minutes);
      setDates(date.getUTCDate());
      setMonths(date.getUTCMonth());
      setYears(date.getUTCFullYear());
      setCurrhour(date.getHours());
      setCurrMin(date.getMinutes());
  }



  return (
    
    <Box>
      <BImage></BImage>
      <Box sx={{color : 'white', position : 'relative', top : '-35pc', left : '25pc', border : 1, borderRadius : 2, width : '7pc', height : '7pc', fontSize : '420%'}}>
          {day}
      </Box>
      <Box sx={{color : 'white', position : 'relative', top : '-34pc', left : '-12pc', fontSize : '200%'}}>
        Days
      </Box>
      <Box sx={{color : 'white', position : 'relative', top : '-45pc', left : '35pc', border : 1, borderRadius : 2, width : '7pc', height : '7pc', fontSize : '420%'}}>
        {hour}
      </Box>
      <Box sx={{color : 'white', position : 'relative', top : '-44pc', left : '-2pc', fontSize : '200%'}}>
        Hours
      </Box>
      <Box sx={{color : 'white', position : 'relative', top : '-55pc', left : '45pc', border : 1, borderRadius : 2, width : '7pc', height : '7pc', fontSize : '420%'}}>
        {minute}
      </Box>
      <Box sx={{color : 'white', position : 'relative', top : '-54pc', left : '8.2pc', fontSize : '200%'}}>
        Minutes
      </Box>
      <Box sx={{position : 'relative', top : '-53pc', fontSize : '200%', left : '-5pc', color : 'white'}}>          
          <Countdown  date={date} renderer={renderer}></Countdown> 
          {dates} - {months} - {years} {currhour} : {currmin}     
      </Box>
    </Box>
    
  );
}

export default App
