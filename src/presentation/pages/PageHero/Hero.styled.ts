'use client';
import styled from 'styled-components';
import Image from 'next/image';

export const StyledAbout = styled.section`
  /* margin-top: -80px; */
  width: 100%;
  /* height: 1420px; */
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    /* height: auto; */
    margin-top: -60px;
  }

  @media (max-width: 480px) {
    margin-top: -30px;
  }
`;

export const StyledImageContainer = styled.div`
  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  margin: 80px 0;
  align-items: center;
  max-width: 100%;
  background-color: #fff;
  border-radius: 25px;
  top: 80px;
  gap: 40px;
  
  @media (min-width: 1025px) and (max-width: 1920px){
 
    width: 100%;
    height: 580px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 40px;
  
  }
  @media (max-width: 768px) {
    position: relative;
    gap: 0;
    justify-content: center;
  }

  @media (max-width: 480px) {
    top: -10px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 20px; */
  box-sizing: border-box;
  /* margin-top: 80px; */
  

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 60px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    /* margin-top: 40px; */
  }
`;
export const Container = styled.div`
  position : absolute ;
  padding: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;

  @media (max-width: 480px) {
    padding: 20px !important;
  }
`

export const TextContainer = styled.div`
  position: relative;
  flex: 1;
  color: #fff;
  padding: 16px;
  border-radius: 20px;
  max-width: 588.32px;
  /* height: 489px; */

  @media (max-width: 768px) {
    font-size: 40px;
    max-width: 100%;
    /* margin-left: 30px; */
  }

  h1 {
    font-size: 35px;
    font-weight: 700;
    color: #fff;
    left: 0;
    top: 50px;
    letter-spacing: -2px;

    @media (max-width: 480px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
    /* position: absolute; */
    top: 200px;
    left: 0;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  
`;

export const ImageContainer = styled.div`
  /* flex: 1; */
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 80px; */
  width: 400px;

  @media (max-width: 1024px) {
    margin-top: 60px;
    display: none;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
`

export const incodeContainer= styled.div`
  display: flex;
  align-items: end;
  white-space: 90%;
`

export const ContainerTeste = styled.nav`
  display:flex ;
  width: 100%;
  height: 81px;
  background: #fff;
  padding: 0rem 18rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  background: linear-gradient(0.25turn, #2B2E2B, #FFFFFF, #2B2E2B);

  opacity: 0.8;

  @media (max-width: 768px) {
    padding: 0;
    display: none;
  }
`;

export const NavItem = styled.a`
  font-size: 4.2rem;
  font-weight: bold;
  color: #000000;
  text-decoration: none;
  font-size: large;
  font-weight: 700;
  &:hover {
    color: #007bff;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    font-weight: 700;
    
    
  }
`;
