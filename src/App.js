import './App.css';

import ItemListContainer from './ItemListContainer';
import { NavBar } from './components/NavBAr/NavBar';

const productos= ['termo', 'mate']
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo='Estoy en el item List'
                         productos= {productos} />
    </div>
  );
}

export default App;
