import { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [imagem, setImagem] = useState('');

  const calcularIMC = () => {
    if (!peso || !altura) {
      setResultado('⚠️ Preencha todos os campos.');
      setImagem('');
      return;
    }

    const alturaMetros = parseFloat(altura) / 100;
    const imc = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);

    let classificacao = '';
    let emoji = '';
    let imagemPath = '';

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
      emoji = '🦴';
      imagemPath = '/img/baixo-peso.png';
    } else if (imc < 24.9) {
      classificacao = 'Peso normal';
      emoji = '💪';
      imagemPath = '/img/peso-normal.png';
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
      emoji = '🍔';
      imagemPath = '/img/sobrepeso.png';
    } else if (imc < 34.9) {
      classificacao = 'Obesidade grau 1';
      emoji = '⚠️';
      imagemPath = '/img/obesidade1.png';
    } else if (imc < 39.9) {
      classificacao = 'Obesidade grau 2';
      emoji = '🚨';
      imagemPath = '/img/obesidade2.png';
    } else {
      classificacao = 'Obesidade grau 3';
      emoji = '❗';
      imagemPath = '/img/obesidade3.png';
    }

    setResultado(`${emoji} Seu IMC é ${imc} - ${classificacao}`);
    setImagem(imagemPath);
  };

  return (
    <div className="main-container">
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

      {imagem && (
        <div className="imagem-container">
          <img src={imagem} alt="Classificação IMC" className="imagem-ilustrativa" />
        </div>
      )}
    </div>
  );
}

export default App;
