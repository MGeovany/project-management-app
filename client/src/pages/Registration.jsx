import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { useForm } from "@mantine/form";
import axios from "axios";

const BASE_URL = "http://localhost:4000/project_flow/register";

export const Registration = () => {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  const validateAuth = () => {
    return form.onSubmit((values) => {
      var config = {
        method: "post",
        url: BASE_URL,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: values,
      };
      axios(config)
        .then(function (response) {
          navigate("/login");
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          navigate("/register");
          console.log(error);
        });
    });
  };

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
        <form onSubmit={validateAuth()}>
          <TextInput
            py={10}
            label="Correo:"
            placeholder="correo@gmail.com"
            required
            {...form.getInputProps("username")}
          />
          <PasswordInput
            py={10}
            label="Contraseña:"
            placeholder="Contraseña"
            required
            mt="md"
            {...form.getInputProps("password")}
          />
          <PasswordInput
            py={10}
            label="Confirmar Contraseña:"
            placeholder="Contraseña"
            required
            {...form.getInputProps("confirmPassword")}
            mt="md"
          />
          <Link to="/login">
            <Center inline my={3}>
              <IconArrowLeft size={14} stroke={1.5} />
              <Box ml={5}>
                <p>Volver a login</p>
              </Box>
            </Center>
          </Link>
          <Button fullWidth mt="xl" type="submit">
            Crear Cuenta
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
