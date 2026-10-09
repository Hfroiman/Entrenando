import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InicioSesion from './Components/InicioSesion/InicioSesion'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <InicioSesion/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
