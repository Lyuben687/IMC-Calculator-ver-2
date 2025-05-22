import { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    if (!peso || !altura) {
      setResultado('⚠️ Preencha todos os campos.');
      return;
    }

    const alturaMetros = parseFloat(altura) / 100;
    const imc = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);

    let classificacao = '';
    let emoji = '';

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
      emoji = '🦴';
    } else if (imc < 24.9) {
      classificacao = 'Peso normal';
      emoji = '💪';
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
      emoji = '🍔';
    } else if (imc < 34.9) {
      classificacao = 'Obesidade grau 1';
      emoji = '⚠️';
    } else if (imc < 39.9) {
      classificacao = 'Obesidade grau 2';
      emoji = '🚨';
    } else {
      classificacao = 'Obesidade grau 3';
      emoji = '❗';
    }

    setResultado(`${emoji} Seu IMC é ${imc} - ${classificacao}`);
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>

      <label>Peso (kg):</label>
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Ex: 70"
      />

      <label>Altura (cm):</label>
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder="Ex: 170"
      />

      <button onClick={calcularIMC}>Calcular</button>

      {resultado && <div className="resultado">{resultado}</div>}
    </div>
  );
}

export default App;
