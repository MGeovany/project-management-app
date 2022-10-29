import React from "react";
import { Link } from "react-router-dom";
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Center,
  Box,
  Container,
  Button,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons";

export const Registration = () => {
  return (
    <Container size={600} my={100}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Crear Cuenta para Project Flow 🚀
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          py={10}
          label="Correo:"
          placeholder="correo@gmail.com"
          required
        />
        <PasswordInput
          py={10}
          label="Contraseña:"
          placeholder="Contraseña"
          required
          mt="md"
        />
        <PasswordInput
          py={10}
          label="Confirmar Contraseña:"
          placeholder="Contraseña"
          required
          mt="md"
        />
        <Link to="/">
          <Center inline my={3}>
            <IconArrowLeft size={14} stroke={1.5} />
            <Box ml={5}>
              <p>Volver a login</p>
            </Box>
          </Center>
        </Link>
        <Button fullWidth mt="xl">
          Crear Cuenta
        </Button>
      </Paper>
    </Container>
  );
};
