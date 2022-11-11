import React from "react";
import { Link } from "react-router-dom";
import {
  AppShell,
  Navbar,
  Header,
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Grid,
  Blockquote,
  Avatar,
  TextInput,
  Textarea,
  Notification,
  Center,
} from "@mantine/core";
import {
  IconDashboard,
  IconFlame,
  IconLogout,
  IconUser,
  IconUsers,
} from "@tabler/icons";

export const Profile = () => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={1000} p="xs">
          <Link to="/home">
            <Button
              leftIcon={<IconDashboard />}
              variant="white"
              color="dark"
              sx={(theme) => ({
                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                fontSize: 16,
                marginBottom: 60,
              })}
            >
              Dashboard
            </Button>
          </Link>
          <Link to="/profile">
            <Button
              leftIcon={<IconUser />}
              variant="white"
              color="dark"
              sx={(theme) => ({
                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                fontSize: 16,
                marginBottom: 60,
              })}
            >
              Perfil
            </Button>
          </Link>
          <Link to="/">
            <Button
              leftIcon={<IconUsers />}
              variant="white"
              color="dark"
              sx={(theme) => ({
                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                fontSize: 16,
                marginBottom: 60,
              })}
            >
              Administradores
            </Button>
          </Link>
          <Link to="/login">
            <Button
              leftIcon={<IconLogout />}
              variant="white"
              sx={(theme) => ({
                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                fontSize: 16,
              })}
            >
              Sign Out
            </Button>
          </Link>
        </Navbar>
      }
      header={
        <Header height={60} p="xs" color="black">
          {}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Grid>
        <Grid.Col span={8}>
          <Notification title="Gestione su información personal" size={100}>
            Esta es una cuenta de Project Flow. Edite su información personal y
            los ajustes de visibilidad en su Perfil de Project Flow. Para
            obtener más información, consulte nuestras Condiciones del Servicio
            o nuestra Política de Privacidad.
          </Notification>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col span={8}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Grid>
              <Grid.Col span={4}>
                <TextInput
                  placeholder="Nombre de usuario"
                  label="Usuario"
                  withAsterisk
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <TextInput
                  placeholder="Correo electrónico"
                  label="Correo"
                  withAsterisk
                />
              </Grid.Col>
            </Grid>

            <Grid>
              <Grid.Col span={6}>
                <TextInput
                  placeholder="Nombres completos"
                  label="Nombres"
                  withAsterisk
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  placeholder="Apellidos completos"
                  label="Apellidos"
                  withAsterisk
                />
              </Grid.Col>
            </Grid>

            <Grid>
              <Grid.Col span={4}>
                <TextInput placeholder="Ciudad" label="Ciudad" withAsterisk />
              </Grid.Col>
              <Grid.Col span={4}>
                <TextInput placeholder="Pais" label="Pais" withAsterisk />
              </Grid.Col>
              <Grid.Col span={4}>
                <TextInput
                  placeholder="Codigo Postal"
                  label="Codigo Postal"
                  withAsterisk
                />
              </Grid.Col>
            </Grid>

            <Grid>
              <Grid.Col span={12}>
                <Textarea
                  placeholder="Biografía"
                  label="Ingresa tu biografía"
                  withAsterisk
                />
              </Grid.Col>
            </Grid>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Editar perfil
            </Button>
          </Card>
        </Grid.Col>

        <Grid.Col span={4}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Center style={{ width: 450 }}>
              <Avatar
                size={270}
                component="a"
                target="_blank"
                src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=615"
                alt="it's me"
              />
            </Center>
            <br></br>
            <Center>
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                {" "}
                Seleccionar imagen
              </Button>
            </Center>
          </Card>
        </Grid.Col>
      </Grid>
    </AppShell>
  );
};

