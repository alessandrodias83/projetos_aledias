
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = "Alessandro"

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <p>Olá, {name} </p>
    <img src={url} />

    <HelloWorld />


  </div>
  );
}

export default App;
