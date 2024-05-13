import React from "react";
import { styled } from "styled-components";
import { NavLink, Link } from "react-router-dom";

const NavbarComponet = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 25px;
  flex-grow: 1;
`;

const StyledLink = styled(NavLink)`
  color: #bf4f74;
  font-weight: bold;
  text-decoration: none;
  margin-left: 15px;
  margin-right: 5px;
`;

export default function Navbar() {
  return (
    <NavbarComponet>
      <Title>My To-Do's</Title>
      <StyledLink to={"/"}>Home</StyledLink>
      <StyledLink to={"/about"}> About </StyledLink>
      <StyledLink to={"/copy-right"}> Copy-Right </StyledLink>
    </NavbarComponet>
  );
}
