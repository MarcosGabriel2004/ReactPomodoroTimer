import React from "react";

function Timer(props) {

  const [min, setMin] = React.useState(5);
  const [seg, setSeg] = React.useState(0);

  const [pauseBtn, setPause] = React.useState(true);
  const pauseBtnArray = ['Iniciar', 'Pausar'];

  React.useEffect(() => {
    let timerInterval = setInterval(() => {
      if(seg > 0 && pauseBtn === false){
          setSeg(seg - 1);
      }else if(min > 0 && pauseBtn === false){
          setSeg(59);
          setMin(min - 1);
      }else if(min === 0 && seg === 0){
          clearInterval(timerInterval);
          //audio.play();
      }
    }, 1000);
    return () => clearInterval(timerInterval);
  });

  React.useEffect(() => {
    
  });

  return (
    <div style={{width:'50%'}}>
      <h1>{min}:{seg}</h1>

      <button></button>
    </div>
  );
}

export default Timer;