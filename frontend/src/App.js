import logo from './logo.svg';
import './App.css';
import Register from './Components/Credential/Register';
import SignIn from './Components/Credential/SignIn';
import Main from './Components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import Search from './Components/Home/Search';
import BookTicket from './Components/BookTicket/BookTicket';
import Tickets from './Components/User/Tickets';
import SetTicket from './Components/User/SetTicket';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/booknow/:id' element={ <BookTicket/> } />
        <Route path='/yourticket' element={ <SetTicket/> } />
      </Routes>

    </div>
  );
}

export default App;
