<<<<<<< Updated upstream
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
=======
import { Login } from "./components/Login";
import { Forgot } from "./components/Forgot"
import {FormAccount} from "./components/FormAccount"
import { Routes,Route } from 'react-router-dom'
>>>>>>> Stashed changes

function App() {
  const [count, setCount] = useState(0)

  return (
<<<<<<< Updated upstream
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
=======
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Forgot" element={<Forgot/>}/>
        <Route path="/FormAccount" element={<FormAccount/>}/>
      </Routes>
>>>>>>> Stashed changes
    </div>
  )
}

export default App
