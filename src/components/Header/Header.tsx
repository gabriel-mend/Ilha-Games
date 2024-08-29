"use client";

import React from "react";
import Image from "next/image";
import Logo from "../../assets/WhatsApp Image 2024-08-24 at 11.46.30 2.svg";
import {
  StyledHeader,
  StyledUl,
  StyledLi,
  StyledLink,
  StyledButton,
  StyledContainer,
} from "./Header.styled";

export function Header() {
  return (
    <StyledHeader>
      <StyledContainer>
        <div>
          <Image className="object-cover" src={Logo} alt="Logo" />
        </div>
        <StyledUl>
          <StyledLi>
            <StyledLink href="#Sobre">Lançamento</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink href="#Equipe">Equipe</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink href="#Contato">Contato</StyledLink>
          </StyledLi>
        </StyledUl>

        <StyledButton href="https://wa.me/5598988577701?text=Ol%C3%A1,%20gostaria%20de%20conhecer%20%20a%20Ilha%20games%20studio" target="__blank">ENTRE EM CONTATO</StyledButton>
      </StyledContainer>
    </StyledHeader>
  );
}
