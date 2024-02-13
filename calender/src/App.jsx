import { useDeferredValue, useEffect, useState } from 'react'
import BImage from './image.jsx';
import { Box } from '@mui/material';
import Countdown from 'react-countdown';
import './App.css'

function App() {

  const date = new Date('2024-02-15T23:59:59');
  const [futuredate, setFuturedate] = useState(date.getUTCDate());
  const [futuremonth, setFuturemonth] = useState(2);
  const [futureyear, setFutureyear] = useState(date.getUTCFullYear());
  const [futurehr, setFuturehr] = useState(date.getUTCHours());
  const [futuremin, setFuturemin] = useState(date.getUTCMinutes());


  
  const days = date.getDate() - new Date().getDate();
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);


  useEffect(() =>{

    setInterval(() =>{

      setMin(date.getMinutes()- new Date().getMinutes());
      // console.log("minutes", date.getMinutes()- new Date().getMinutes());
      setHour(date.getHours() - new Date().getHours());
    });

  },[]);



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
        {hour}
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
      
          {futuredate} - {futuremonth} - {futureyear} {futurehr} : {futuremin}
          <Box visibility={'hidden'}>
            <Countdown  date={date}></Countdown>
          </Box>        
      </Box>
    </Box>
    
  );
}

export default App
