import React from "react";
import { Link } from "react-router-dom";
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";

export const Login = () => {
  return (
    <Container size={500} my={120}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Bienvenido a Project Flow 🚀
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Aun no tienes una cuenta? <Link to="/register">Crear cuenta</Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          py={10}
          label="Correo:"
          placeholder="correo@gmail.com"
          required
        />
        <PasswordInput
          py={10}
          label="Contrasena:"
          placeholder="Tu Contrasena"
          required
          mt="md"
        />
        <Group pt={20} position="apart" mt="md">
          <Link to="/reset">Olvide mi contraseña</Link>
        </Group>
        <Button fullWidth mt="xl">
          Iniciar Sesion
        </Button>
      </Paper>
    </Container>
  );
};
