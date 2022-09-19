import './App.css';
import Timer from './components/Timer.js';
import Title from './components/Title.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title></Title>

        <Timer></Timer>

        {
          /*
            Indicador de trabalho/descanso
            Relógio
            Botão de início/pausa | Botão de reset
            Botão de pular período de trabalho/descanso

            Lista de ciclos
          */
        }
      </header>
    </div>
  );
}

export default App;