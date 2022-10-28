import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="body">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form>
          <img className="login_img" src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" />
          <label>Usuario</label>
          <input type="text" placeholder="Usuario" id="username" />

          <label>Contraseña</label>
          <input type="password" placeholder="Contraseña" id="password" />

          <button>Iniciar sesión</button>

        </form>
      </div>
    </div>
  )
}

export default App
