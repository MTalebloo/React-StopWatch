import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Card, CardActions, Typography,CardContent } from '@mui/material';
import "./css/app.css"
const Timer= () => {
  const [Hour, setHour] = useState(0)
  const [Minute, setMinute] = useState(0)
  const [Second, setSecond] = useState(0)
  const [time, setime] = useState(null)
  const [SaveTime, setSaveTime] = useState([])
  const HandleSetTime = () => {
      let _interval = setInterval(() => {
       setSecond((Second) => Second+ 1);
            }, 1000);
            if (Second == 60) {
              setSecond(0);
              setMinute(Minute + 1);
            }else if(Minute == 60) {
              setMinute(0);
              setHour(Hour + 1)
            }     
     setime(_interval)
  }
  const HandleStopTime = () =>{
    clearInterval(time)
  }
  const HandleRestTime = () => {
    clearInterval(time);
    setHour(0);
    setMinute(0);
    setSecond(0);
  }
  const HandleSaveTime = () => {
    let newTime = `${Hour < 10 ?"0" +Hour :Hour} : ${Minute < 10 ?"0" +Minute :Minute} : ${Second < 10 ?"0" +Second :Second}`
    setSaveTime([...SaveTime, newTime])
  }
  return (
    <div className="App">
      <div className='container' style={{ 
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      height: '100vh'}}>
    <Card sx={{ maxWidth: 869, display:"flex", textAlign: 'center', backgroundColor:"#006b5d"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color='#eafff8'>
          Timer
        </Typography>
        <Typography variant="body2" sx={{ color: '#cbffee' }}>
        {`${Hour < 10 ?"0" +Hour :Hour} : ${Minute < 10 ?"0" +Minute :Minute} : ${Second < 10 ?"0" +Second :Second}`}
        </Typography>
      </CardContent>
      <CardActions>
      <p>{SaveTime.map((c) => (<Typography key={Math.random()} variant='h5' sx={{color:"#eafff8"}}>{c}</Typography>)) }</p>
      <ButtonGroup variant="contained" aria-label="Basic button group" sx={{height: 55}}>
      <Button onClick={HandleSetTime} className='btn'>Start Time</Button>
      <Button onClick={HandleStopTime} className='btn'>Stop Time</Button>
      <Button onClick={HandleRestTime} className='btn'>Rest Time</Button>
    </ButtonGroup>
      </CardActions>
      <ButtonGroup variant="contained" aria-label="Basic button group" className='btn-container'>
      <Button onClick={HandleSaveTime} className='btn' sx={{borderRadius:0}}>Save Time</Button>       
      </ButtonGroup>
    </Card>
      </div>
    </div>
  );
}

export default Timer;
