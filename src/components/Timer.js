import React from "react";

function Timer() {
  const audio = new Audio('audio.mp3');

  const [cycle, setCycle] = React.useState(0);

  const [wMin, setWMin] = React.useState(2);
  const [rMin, setRMin] = React.useState(1);
  const [lMin, setLMin] = React.useState(15);

  const [min, setMin] = React.useState(wMin);
  const [seg, setSeg] = React.useState(0);

  const [pauseBtn, setPauseBtn] = React.useState(true);
  const pauseBtnArray = ['Iniciar', 'Pausar'];
  const [pauseUI, setPauseUI] = React.useState(pauseBtnArray[0]);

  const [intervalBtn, setIntervalBtn] = React.useState(false);
  const intervalBtnArray = ['Ir para Descanso', 'Ir para Trabalho'];
  const [intervalBtnUI, setIntervalBtnUI] = React.useState(intervalBtnArray[0]);
  const intervalArray = ['Hora de Trabalhar', 'Hora de Descansar'];
  const [intervalUI, setIntervalUI] = React.useState(intervalArray[0]);

  React.useEffect(() => {
    let timerInterval = setInterval(() => {
      if(seg > 0 && pauseBtn === false){
          setSeg(seg - 1);
      }else if(min > 0 && pauseBtn === false){
          setSeg(59);
          setMin(min - 1);
      }else if(min === 0 && seg === 0){
          
          audio.play();

          if (intervalBtn === true){
            setIntervalBtn(false);
            setIntervalBtnUI(intervalBtnArray[1]);
            setIntervalUI(intervalArray[1]);
            setMin(wMin);
            setSeg(0);
          }else if(intervalBtn === false && cycle < 3){
            setIntervalBtn(true);
            setIntervalBtnUI(intervalBtnArray[0]);
            setIntervalUI(intervalArray[0]);
            setCycle(cycle + 1);
            setMin(rMin);
            setSeg(0);
          }else{
            setIntervalBtn(true);
            setIntervalBtnUI(intervalBtnArray[0]);
            setIntervalUI(intervalArray[0]);
            setCycle(0);
            setMin(lMin);
            setSeg(0);
          }
      }
    }, 1000);
    return () => clearInterval(timerInterval);
  });

  return (
    <div style={{width:'50%'}}>
      <h2>{intervalUI}</h2>
      <h1>{min}:{seg}</h1>

      <button onClick={() => {
        if (pauseBtn === true){
          setPauseBtn(false);
          setPauseUI(pauseBtnArray[1]);
        } else{
          setPauseBtn(true);
          setPauseUI(pauseBtnArray[0]);
        }
      }}>{pauseUI}</button>

      <br />

      <button onClick={() => {
        if(intervalBtn === true){
          setMin(wMin);
          setSeg(0);
        }else if(intervalBtn === false && cycle < 3){
          setMin(rMin);
          setSeg(0);
        }else{
          setMin(lMin);
          setSeg(0);
        }
      }}>Reset</button>

      <br />

      <button onClick={() => {
        if(intervalBtn === true){
          setIntervalBtn(false);
          setMin(wMin);
          setSeg(0);
          setIntervalBtnUI(intervalBtnArray[0]);
          setIntervalUI(intervalArray[0]);
        }else if(intervalBtn === false && cycle < 3){
          setIntervalBtn(true);
          setMin(rMin);
          setSeg(0);
          setIntervalBtnUI(intervalBtnArray[1]);
          setIntervalUI(intervalArray[1]);
        }else{
          setIntervalBtn(true);
          setMin(lMin);
          setSeg(0);
          setIntervalBtnUI(intervalBtnArray[1]);
          setIntervalUI(intervalArray[1]);
        }
      }}>{intervalBtnUI}</button>
    </div>
  );
}

export default Timer;