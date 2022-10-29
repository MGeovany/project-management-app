import { Login } from "./components/Login";
import { Forgot } from "./components/Forgot"
import {FormAccount} from "./components/FormAccount"
import { Routes,Route } from 'react-router-dom'
import { Login } from "./Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Forgot" element={<Forgot/>}/>
        <Route path="/FormAccount" element={<FormAccount/>}/>
      </Routes>
    <div>
      <Login />
    </div>
    </div>
  );
}

export default App;
