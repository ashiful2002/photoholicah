import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navItems } from "../Constants/Index.js";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <Navbar sticky="top" expand="md"  className="bg-body-tertiary" collapseOnSelect >
        <Container>
          <Navbar.Brand href="/">
            {/* <img src={logo} width={90}  alt="logo" /> */}
            <h2 className="font-serif tracking-tighter border rounded-md px-2
             text-violet-700 font-extrabold shadow-md shadow-violet-800">
              Photoholic AH
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navItems.map((item) => (
                <Nav.Link
                  className=" capitalize "
                  key={item.id}
                  href={item.url}
                >
                 <span className="text-left  "> {item.title}</span>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
