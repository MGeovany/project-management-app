import { Box, Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { AccountProfile } from "../components/common/AccountProfile";
import { AccountProfileDetails } from "../components/common/AccountProfileDetails";

export const Profile = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <>
      <Box
        sx={{
          paddingTop: 10,
        }}
      >
        <Typography align="left" variant="h5" component="h2">
          Profile
        </Typography>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 5,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} xs={12}>
                <AccountProfile user={user} />
              </Grid>
              <Grid item lg={8} md={6} xs={12}>
                <AccountProfileDetails user={user} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};
