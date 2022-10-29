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

import React, { useState } from "react";

import { IconX } from "@tabler/icons";
import { useForm } from "@mantine/form";

export class Auth {
  static validate = async function (usuario, contrasena) {
    let resultValidate = { access: false, data: null };

    return await fetch("http://localhost:4000/project_flow/authenticate", {
      method: "POST",
      body: JSON.stringify({ usuario: usuario, contrasena: contrasena }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.usuario) {
          resultValidate.access = true;
          resultValidate.data = json;
          return resultValidate;
        } else {
          resultValidate.access = false;
          resultValidate.data = "Usuario o contraseña incorrecta";
          return resultValidate;
        }
      })
      .catch((err) => {
        resultValidate.access = false;
        resultValidate.data = "Ocurrio un error al validar el acceso";
        return resultValidate;
      });
  };
}

export const Login = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationLoading, setNotificationLoading] = useState(true);
  const [messageNotificationError, setMessageNotificationError] =
    useState(true);
  const form = useForm({
    initialValues: {
      usuario: "",
      password: "",
    },
  });

  const validateAuth = () => {
    return form.onSubmit((values) => {
      setShowNotification(true);
      setNotificationLoading(true);
      Auth.validate(values.usuario, values.password).then((response) => {
        if (response.access) {
          let data = response.data;
          dispatch(
            login({
              usuario: data.usuario,
              correo: data.correo,
              nombre: data.nombre,
            })
          );
        } else {
          setMessageNotificationError(response.data);
          setNotificationLoading(false);
        }
      });
    });
  };

  const NotificationLogin = () => {
    if (showNotification) {
      return notificationLoading ? (
        <Notification
          loading
          title="Verificando acceso"
          disallowClose
        ></Notification>
      ) : (
        <Notification
          icon={<IconX size={18} />}
          color="red"
          onClose={() => setShowNotification(false)}
        >
          {messageNotificationError}
        </Notification>
      );
    }
  };

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
        <form onSubmit={validateAuth()}>
          <TextInput
            py={10}
            label="Correo:"
            placeholder="correo@gmail.com"
            required
            {...form.getInputProps("usuario")}
          />
          <PasswordInput
            py={10}
            label="Contrasena:"
            placeholder="Tu Contrasena"
            required
            mt="md"
            {...form.getInputProps("password")}
          />
          <Group pt={20} position="apart" mt="md">
            <Link to="/reset">Olvide mi contraseña</Link>
          </Group>
          <Button fullWidth mt="xl" type="submit">
            Iniciar Sesion
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
