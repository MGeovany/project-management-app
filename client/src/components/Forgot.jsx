import React from "react";
import {
    createStyles,
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Group,
    Anchor,
    Center,
    Box,
  } from '@mantine/core';
  import { Link } from "react-router-dom"
  import { IconArrowLeft } from '@tabler/icons';
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: 26,
      fontWeight: 900,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  
    controls: {
      [theme.fn.smallerThan('xs')]: {
        flexDirection: 'column-reverse',
      },
    },
  
    control: {
      [theme.fn.smallerThan('xs')]: {
        width: '100%',
        textAlign: 'center',
      },
    },
  }));
  
export const Forgot = () =>{
    const { classes } = useStyles();
    return (
        <Container size={460} my={30}>
            <Title className={classes.title} align="center">
            ¿Has olvidado tu contraseña?🚀
            </Title>
            <Text color="dimmed" size="sm" align="center">
            Ingresa tu correo para recibir un link para resetear tu contraseña
            </Text>
    
            <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
            <TextInput label="Tu email" placeholder="correo@correo.com" required />
            <Group position="apart" mt="lg" className={classes.controls}>
                <Anchor color="dimmed" size="sm" className={classes.control}>
                <Link to="/">
                <Center inline>
                        <IconArrowLeft size={12} stroke={1.5} />
                        <Box ml={5}>Volver a login</Box>
                </Center>
                </Link>
                </Anchor>
                <Button className={classes.control}>Resetear Contraseña</Button>
            </Group>
            </Paper>
        </Container>
        );
    }