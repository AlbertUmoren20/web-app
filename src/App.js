import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainPage from './Component/MainPage/MainPage';

function App() {
return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<MainPage/>}/>
    </Routes>
    </BrowserRouter>
)
}

export default App;
