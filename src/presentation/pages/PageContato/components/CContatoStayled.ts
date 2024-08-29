'use client'

import styled from "styled-components"


export const ExternoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

margin-top: 8rem;
gap: 1.5rem;
    p {
      width: 230px;
    }
    div{
        gap: 2rem;
    }

  @media(max-width: 768px) {
    margin: 0;
    font-size: 12px;


  }   

`
