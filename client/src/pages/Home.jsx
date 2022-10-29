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
} from "@mantine/core";
import { IconFlame, IconLogout } from "@tabler/icons";

export const Home = () => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={1000} p="xs">
          
            <Link to="/">
          <Button leftIcon={<IconLogout />} variant="white">
            Log Out
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
