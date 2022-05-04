import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

function NavBar () {

    return (
        <div>
            <Nav as={Link} to="/">JOB LISTINGS</Nav>
            <Nav as={Link} to="/create">CREATE LISTING</Nav>
            <Nav as={Link} to="/applicants">ALL CANDIDATES</Nav>
        </div>
    )
}

export default NavBar;

const Nav = styled.button`
  display: inline-block;
  padding: 10px;
  font-size: 14px;
  font-family: arial;
  text-decoration: none;
  color: black;
`;