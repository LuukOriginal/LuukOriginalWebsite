import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import MainNav from './components/MainNav/MainNav';
import About from './pages/About/About.jsx';
import Home from './pages/Home/Home.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';


function App() {
  return (
    <div id='App'>
      <MainNav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
