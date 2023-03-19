import Header from './Componentes/Header';
import './App.css';
import Pesquisa from 'Componentes/Pesqueisa';
import UltimosLancamentos from 'Componentes/UltimosLancamentos';


function App() {


  return (
    <div className='App'>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </div>
  );
}

export default App;
