import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ThemeContext, { ThemeProvider } from "../utils/theme.jsx";

const Inner = ({ children }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <Container fluid className={`px-0 theme-${theme.dark ? "dark" : "light"} app-container`}>
      <Header />
      <Container fluid className="pt-5 mt-5 text-center min-vh-100">
        {children}
      </Container>
      <Footer />
    </Container>
  );
};

export default ({ children }) => (
  <ThemeProvider>
    <Inner>{children}</Inner>
  </ThemeProvider>
);
