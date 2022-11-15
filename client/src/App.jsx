import { Login } from "./pages/Login";
import { ResetPassword } from "./pages/ResetPassword";
import { Registration } from "./pages/Registration";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Panel } from "./pages/Panel";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/panel" element={<Panel/>}/>
      </Routes>
    </div>
  );
}

export default App;
