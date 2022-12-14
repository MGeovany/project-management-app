import { Avatar, Box, Button, Card, CardActions, CardContent, Divider, Typography } from "@mui/material"

export const AccountProfile = ({ user }) => {
  return (
    <Card sx={{ borderRadius: "12px" }}>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column"
          }}>
          <Avatar
            src={user.username}
            sx={{
              height: 64,
              mb: 2,
              width: 64
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h5">
            {user.username}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Soft. Engineer
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="text">
          Upload picture
        </Button>
      </CardActions>
    </Card>
  )
}
