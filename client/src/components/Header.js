import React, { useState } from "react";
import styled from "styled-components";

function Header () {

    return (
        <div>
            <H1>data piper</H1>
            <H2>Employee Portal</H2>
        </div>
    )
}

export default Header;

const H1 = styled.h1 `
margin-top: 40px;
margin-bottom: 1px;
font-size: 50px;
color: dodgerblue;
font-family: 'Goldman', cursive;
`

const H2 = styled.h1 `
font-size: 17px;
font-family: arial;
padding-bottom: 20px;
`