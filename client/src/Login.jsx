import React from "react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";

export const Login = () => {
  return (
    <Container size={500} my={200}>
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
        Aun no tienes una cuenta?{" "}
        <a href="#" size="sm" onClick={(event) => event.preventDefault()}>
          Crear cuenta
        </a>
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
          <a onClick={(event) => event.preventDefault()} href="#" size="sm">
            Olvide mi contrasena
          </a>
        </Group>
        <Button fullWidth mt="xl">
          Iniciar Sesion
        </Button>
      </Paper>
    </Container>
  );
};
