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
  Container,
  Blockquote,
  Title,
} from "@mantine/core";
import {
  IconDashboard,
  IconFlame,
  IconLogout,
  IconNotebook,
  IconUser,
  IconUsers,
} from "@tabler/icons";

export const Home = () => {
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
                  marginBottom: 40,
                })}
              >
                Dashboard
              </Button>
            </Link>
            <Link to="/">
              <Button
                leftIcon={<IconUser />}
                variant="white"
                color="dark"
                sx={(theme) => ({
                  fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                  fontSize: 16,
                  marginBottom: 40,
                })}
              >
                Profile
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
                  marginBottom: 40,
                })}
              >
                Administrators
              </Button>
            </Link>
            <Link to="/panel">
              <Button
                leftIcon={<IconNotebook />}
                variant="white"
                color="dark"
                sx={(theme) => ({
                  fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                  fontSize: 16,
                  marginBottom: 40,
                })}
              >
                Panel
              </Button>
            </Link>
            <Container
              sx={() => ({
                margin: 0,
                padding: 0,
                height: 250,
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
      <Blockquote
        cite="This app is under construction..."
        icon={<IconFlame size={24} />}
      >
        Welcome to Project Flow!
      </Blockquote>

      <Grid>
        <Grid.Col span={4}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://web-static.wrike.com/blog/content/uploads/2016/06/La-importancia-de-la-gestio-n-de-proyectos-preguntas-y-respuestas-con-Robert-Kelly.jpg?av=9cca9b92e52017d677996195ca78c04a"
                height={200}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>¿Que somos?</Text>
              <Badge color="pink" variant="light">
                Muy pronto
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              Project Flow es una herramienta visual que permite a los equipos
              gestionar cualquier tipo de proyecto y flujo de trabajo, así como
              supervisar tareas.
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Proximamente
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://www.manageengine.com/products/service-desk/itil/images/it-project-management-software.png"
                height={200}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Facil manejo</Text>
              <Badge color="pink" variant="light">
                Intuitivo
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              Añade archivos, checklists o incluso automatizaciones:
              personalízalo todo según las necesidades de tu equipo.
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Proximamente
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://cdnb.ganttpro.com/uploads/2022/07/gestion-proyectos.png"
                height={200}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Registro gratis</Text>
              <Badge color="pink" variant="light">
                Gratis
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              Solo tienes que registrarte, crear un tablero y ¡listo! Monitoriza
              como avanza tu exitoso proyecto.
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Proximamente
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </AppShell>
  );
};
