"use client";

import { ContainerCinza, ContainerInforma, Buttonwhith } from "./ContatoStyled";
import { CContato } from "../PageContato/components/CContato";
import Telefone from "../../../assets/Telefone.svg";
import Loc from "../../../assets/Loc.svg";
import Gmail from "../../../assets/Gmail.svg";

export function Contato() {
  return (
    <ContainerCinza id="Contato">
      <h2>Contato</h2>
      <p>Entre em contato para mais informações</p>

      <ContainerInforma>
        <CContato
          src={Telefone}
          titulo="Telefone"
          descricao="(98) 98857-7701"
        />

        <CContato
          src={Loc}
          titulo="Localização"
          descricao="Rua Isaac Martins Barrocas, 141 - Centro, São Luís - MA, 65010-690"
        />

        <CContato src={Gmail} titulo="Email" descricao="ilhagames@email.com" />
      </ContainerInforma>
      <Buttonwhith
        href="https://wa.me/5598988577701?text=Ol%C3%A1,%20gostaria%20de%20conhecer%20%20a%20Ilha%20games%20studio"
        target="__blank"
      >
        ENTRE EM CONTATO
      </Buttonwhith>
    </ContainerCinza>
  );
}
