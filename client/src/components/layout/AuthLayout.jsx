import { Container, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import authUtils from "../../utils/authUtils";
import Loading from "../common/Loading";

const AuthLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await authUtils.isAuthenticated();
      if (!isAuth) {
        setLoading(false);
      } else {
        navigate("/");
      }
    };
    checkAuth();
  }, [navigate]);

  return loading ? (
    <Loading fullHeight />
  ) : (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src="https://image-service.onefootball.com/transform?w=280&h=186&dpr=2&image=https%3A%2F%2Fmdfutbol.com%2Fwp-content%2Fuploads%2F2021%2F12%2F93651DDE-1558-4192-B058-12E5EB63963E.jpeg"
          style={{ width: "100px" }}
          alt="app logo"
        />
        <Outlet />
      </Box>
    </Container>
  );
};

export default AuthLayout;
