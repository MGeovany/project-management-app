import { Box } from "@mui/material"
import { useState, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import authUtils from "../../utils/authUtils"
import Loading from "../common/Loading"
import Sidebar from "../common/Sidebar"
import { setUser } from "../../redux/features/userSlice"
import { useLocation } from "react-router-dom"
import ResponsiveAppBar from "../common/ResponsiveAppBar"

const AppLayout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const user = await authUtils.isAuthenticated()
      if (!user) {
        navigate("/login")
      } else {
        dispatch(setUser(user))
        setLoading(false)
      }
    }
    checkAuth()
  }, [navigate])

  return loading ? (
    <Loading fullHeight />
  ) : (
    <Box sx={{ display: "flex" }}>
      <ResponsiveAppBar />
      {location.pathname.includes("boards") && <Sidebar />}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default AppLayout
