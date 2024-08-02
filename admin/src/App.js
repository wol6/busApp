
import './App.css';
import Add from './Components/AddBus/Add';
import EditBus from './Components/Edit/EditBus';
import ViewBus from './Components/View/ViewBus';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Add/>} />
        <Route path='/viewBus' element={<ViewBus/>} />
        <Route path='/editBus/:id' element={ <EditBus/>} />
      </Routes>
    </div>
  );
}

export default App;
