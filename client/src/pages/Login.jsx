import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "@mantine/form";

const BASE_URL = "http://localhost:4000/project_flow/authenticate";

export const Login = () => {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
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
          navigate("/");
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          navigate("/login");
          console.log(error);
        });
    });
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
            {...form.getInputProps("username")}
          />
          <PasswordInput
            py={10}
            label="Contrasena:"
            placeholder="Tu Contrasena"
            required
            mt="md"
            {...form.getInputProps("password")}
          />
          <Container sx={() => ({
            margin:0,
            padding:0,
            display: "flex",
            flexDirection: "row",
            justifyContent:"space-between"})}>
          <Link to="/reset"><Text>Olvide mi contraseña</Text></Link>
          <Link to="/"><Text>Volver a la pagina principal</Text></Link>
          </Container>
          <Button fullWidth mt="xl" type="submit">
            Iniciar Sesion
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
