import { Login } from "./pages/Login";
import { ResetPassword } from "./pages/ResetPassword";
import { Registration } from "./pages/Registration";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
