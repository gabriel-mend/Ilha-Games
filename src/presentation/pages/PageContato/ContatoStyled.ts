'use client'

import styled from "styled-components"

export const ContainerCinza = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 464px;
background: #363736;
border-radius: 40px;
border: solid 1px #ffff;
color: #ffff;
margin-bottom: 50px;



h2{

   font-size: 40px;
    @media (max-width: 390px) {
     font-size: 30px;
      
     }
}

  
  


`

export const ContainerInforma = styled.div`
 display: flex ;
 align-items: center;
 justify-content: center;
 align-items: flex-start;
 gap: 5rem;

  @media(max-width: 1366px) {
    flex-direction: row;
    gap:  2rem;
  }
  
  @media (max-width: 390px) {
    flex-direction: column;
  }

`

export const Buttonwhith = styled.a`
 background: linear-gradient(0.25turn, #FFFFFF, #FFFFFF);
  border-radius: 22px;
  width: 190px;
  height: 47px;
  border: none;
  color: #000000;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  font-weight: 700;
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`