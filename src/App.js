import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Tour from './pages/Tour'
import SearchAppBar from './components/SearchAppBar'
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/tour" element={<Tour/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
