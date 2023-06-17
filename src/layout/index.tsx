import React from "react";
import { TopBar } from "../components/TopBar";
import { Container, Content } from "./styles";

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Content>
        <TopBar />
        {children}
      </Content>
    </Container>
  )
}