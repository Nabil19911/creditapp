import { Header } from "semantic-ui-react";
import "./Head.css";

export default function Head({ children }) {
  return (
    <>
      <Header
        as="h1"
        block
        inverted
        textAlign="center"
        size="huge"
        className="header"
      >
        {children}
      </Header>
    </>
  );
}
