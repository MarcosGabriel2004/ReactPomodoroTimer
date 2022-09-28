import '../App.css';
import Title from '../components/Title.js';
import React from 'react';

function Config() {
    const [workMin, setWorkMin] = React.useState(25);
    const [restMin, setRestMin] = React.useState(5);
    const [longRestMin, setLongRestMin] = React.useState(15);

    return (
        <div className="App">
        <header className="App-header">
            <Title></Title>

            <div>
                Minutos de trabalho: <input type="numeric" value={workMin} onChange={(x) => setWorkMin(x.target.value)} />
                <br></br>
                Minutos de descanso: <input type="numeric" value={restMin} onChange={(x) => setRestMin(x.target.value)} />
                <br></br>
                Minutos de descanso longo: <input type="numeric" value={longRestMin} onChange={(x) => setLongRestMin(x.target.value)} />
                <br></br>
                <button>Alterar</button>
            </div>
        </header>
        </div>
    );
}

export default Config;