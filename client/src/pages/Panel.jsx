import React from "react";
import { Link } from "react-router-dom";
import {
  AppShell,
  Navbar,
  Header,
  Button,
  Container,
  Title,
} from "@mantine/core";
import {
  IconDashboard,
  IconLogout,
  IconNotebook,
  IconUser,
  IconUsers,
} from "@tabler/icons";
import PanelKanban from "./PanelKanban";

export const Panel = () => {
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
      <Title
            align="center"
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 700,
              paddingBottom: 20,
              fontSize: 30,
            })}
          >
            Kanban Panel🚀
          </Title>
        <PanelKanban/>
    </AppShell>
  );
};