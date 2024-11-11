
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {

  const nome = "Ale"

  return (
    <div className="App">

    <SayMyName nome={nome} />
    <Pessoa 
    nome="Alessandro"
    idade="40"
    profisao="Programador"
    foto="https://via.placeholder.com/150"
    />

  </div>
  );
}

export default App;
