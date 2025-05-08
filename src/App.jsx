import { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!pesoNum || !alturaNum) {
      setResultado('Preencha os campos corretamente');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Magreza';
    else if (imc < 25) classificacao = 'Normal';
    else if (imc < 30) classificacao = 'Sobrepeso';
    else if (imc < 40) classificacao = 'Obesidade';
    else classificacao = 'Obesidade grave';

    setResultado(`IMC: ${imc.toFixed(2)} (${classificacao})`);
  };

  return (
    <div className="app">
      <h1>Calculadora de IMC</h1>
      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <input
        type="number"
        placeholder="Altura (m)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <button onClick={calcularIMC}>Calcular</button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
}

export default App;
