import { useDeferredValue, useEffect, useState } from 'react'
import BImage from './image.jsx';
import { Box } from '@mui/material';



import './App.css'

function App() {


  const [days, setDays] = useState(0);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);
  const [date , setDate] = useState(0);
  const [mon, setMon] = useState(0);
  const [yr, setYr] = useState(0);

  const time_elapsed = new Date();
  
  useEffect(() => {

     setInterval(() =>{

      setMin(time_elapsed.getUTCMinutes());
      setHr(time_elapsed.getUTCHours());

      if ((hr > -1 && hr < 23) && (time_elapsed.getMinutes() < 60) && (time_elapsed.getSeconds() < 60)){

        setDays(0);
      }else {

        setDays(1);
      }


      setDate(time_elapsed.getDate());
      setMon(time_elapsed.getMonth());
      setYr(time_elapsed.getFullYear());
    }, 1000);
    
  });
  

  return (
    
    <Box>
      <BImage></BImage>
      <Box sx={{color : 'white', position : 'relative', top : '-35pc', left : '25pc', border : 1, borderRadius : 2, width : '7pc', height : '7pc', fontSize : '420%'}}>
          {days}
      </Box>
      <Box sx={{color : 'white', position : 'relative', top : '-34pc', left : '-12pc', fontSize : '200%'}}>
        Days
      </Box>
      <Box sx={{color : 'white', position : 'relative', top : '-45pc', left : '35pc', border : 1, borderRadius : 2, width : '7pc', height : '7pc', fontSize : '420%'}}>
        {hr}
      </Box>
      <Box sx={{color : 'white', position : 'relative', top : '-44pc', left : '-2pc', fontSize : '200%'}}>
        Hours
      </Box>
      <Box sx={{color : 'white', position : 'relative', top : '-55pc', left : '45pc', border : 1, borderRadius : 2, width : '7pc', height : '7pc', fontSize : '420%'}}>
        {min}
      </Box>
      <Box sx={{color : 'white', position : 'relative', top : '-54pc', left : '8.2pc', fontSize : '200%'}}>
        Minutes
      </Box>
      <Box sx={{position : 'relative', top : '-53pc', fontSize : '200%', left : '-5pc', color : 'white'}}>
          {date} - {mon} - {yr} {hr} : {min}
      </Box>
    </Box>
    
  );
}

export default App
