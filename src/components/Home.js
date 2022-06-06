import React from 'react';
import styled from "styled-components";
import animation from "../animation.css";

function Home() {
  return (
    <Contain>
        <HeadingContain><h2>Hello, DHRUv Here!!</h2></HeadingContain>
        <TexTContain>Just Bcz I'm Coder that doesn't mean I am Gamer </TexTContain>
        
    </Contain>
  )
}

const Contain=styled.div`
    text-align: center;
    margin-top: 250px;
    margin-left: 35px;
    color:#f9f9f9;
`

const HeadingContain=styled.h2`

    animation: moveInLeft .5s ease-out .5s;
    animation-fill-mode: backwards;
    font-size:2.4rem;
    font-weight: 800;
  background: #DEDEDE;
background: -webkit-linear-gradient(to right, white 53%, gray 73%);
background: -moz-linear-gradient(to right, white 53%, gray 73%);
background: linear-gradient(to right, white 53%, gray 73%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

const TexTContain=styled.div`
    animation: moveInRight .5s ease-out .5s;
    animation-fill-mode: backwards;
    font-size:1.6rem;
    font-weight:800;
    background: #DEDEDE;
background: -webkit-linear-gradient(to right, white 53%, gray 73%);
background: -moz-linear-gradient(to right, white 53%, gray 73%);
background: linear-gradient(to right, white 53%, gray 73%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

`

export default Home