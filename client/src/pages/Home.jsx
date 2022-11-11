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
  Group,
  Button,
  Grid,
  Container,
  Title,
  Avatar,
} from "@mantine/core";
import {
  IconDashboard,
  IconFlame,
  IconLogout,
  IconUser,
  IconUsers,
} from "@tabler/icons";

import { Doughnut } from 'react-chartjs-2';

export const Home = () => {
  const avatar = (
    <Avatar alt="Avatar for badge" size={24} mr={5} src="image-link" />
  );

  const data = {
    labels: ["Pendientes", "Finalizadas", "Completadas"],
    datasets: [{
      data: [20,60,20]
    }]
  }

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={1000} p="xs">
          <Title
            align="center"
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 800,
              paddingBottom: 70,
            })}
          >
            Project Flow🚀
          </Title>
          <Container
            sx={(theme) => ({
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
            })}
          >
            <Link to="/">
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
            <Container
              sx={() => ({
                margin: 0,
                padding: 0,
                height: 370,
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
              })}
            >
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
            </Container>
          </Container>
        </Navbar>
      }
      header={<Header height={60} p="xs" color="black" />}
    >
     

      <Grid>
        <Grid.Col span={6}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Grid>
              <Grid.Col span={3}>
                <Badge
                  variant="gradient"
                  gradient={{ from: "teal", to: "blue", deg: 60 }}
                >
                  Project Flow
                </Badge>
              </Grid.Col>
              <Grid.Col span={3}>
                <Badge
                  sx={{ paddingLeft: 0 }}
                  size="lg"
                  radius="xl"
                  color="teal"
                  leftSection={avatar}
                >
                  %LIDER%
                </Badge>
              </Grid.Col>
            </Grid>

            <Grid>
              <Grid.Col span={6}>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                  <Text size="sm" color="dimmed">
                    Etapa: %ETAPA%
                  </Text>
                  <Text size="sm" color="dimmed">
                    Estado: %ESTADO%
                  </Text>
                  <Text size="sm" color="dimmed">
                    Fecha de inicio: %INICIO%
                  </Text>
                  <Text size="sm" color="dimmed">
                    Fecha Fin: %FIN%
                  </Text>
                </Card>
              </Grid.Col>
              <Grid.Col span={6}>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                  <Text size="sm" color="dimmed">
                    Tareas en desarrollo: %DESARROLLO%
                  </Text>
                  <Text size="sm" color="dimmed">
                    Tareas finalizadas: %FINALIZADO%
                  </Text>
                  <Text size="sm" color="dimmed">
                    Tareas pendientes: %PENDIENTE%
                  </Text>
                  <Text size="sm" color="dimmed">
                    Completado al: %100%
                  </Text>
                </Card>
              </Grid.Col>
            </Grid>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Ver tablero
            </Button>
          </Card>
        </Grid.Col>
      </Grid>

    </AppShell>
  );
};
