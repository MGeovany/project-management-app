import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "./css/custom-scrollbar.css"
import CssBaseLine from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./components/layout/AppLayout"
import AuthLayout from "./components/layout/AuthLayout"
import Home from "./pages/Home"
import Board from "./pages/Board"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { Dashboard } from "./pages/Dashboard"
import { Projects } from "./pages/Projects"
import { Profile } from "./pages/Profile"
import { Blog } from "./pages/Blog"
import { Logout } from "./pages/Logout"
import NotFound from "./pages/NotFound"

function App() {
  const theme = createTheme({
    palette: { mode: "dark" }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="boards" element={<Home />} />
            <Route path="boards/:boardId" element={<Board />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="profile" element={<Profile />} />
            <Route path="blog" element={<Blog />} />
            <Route path="logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
