import './App.css';
import LoginForm from './javascript/homepage';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Signup from './javascript/Signup';
import Dashboard from './javascript/Dashboard';
import Update from './javascript/Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/SignUp' element={<Signup/>}/>
          <Route path='/dashboard/:id' element={<Dashboard/>}/>
          <Route path='/updateUser/:id' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
