import styled from 'styled-components';
import React from 'react';


export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: absolute;
  left: 50%;
  top: 42%;
  transform: translate(-50%, -26%);
  width: 678px;
  max-width: 100%;
  min-height: 400px;
  margin: 0px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${props =>
    props.signinIn !== true
      ? `
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
      `
      : null}
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

export const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  height: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 25px;
  letter-spacing: 1px;
  cursor: pointer;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${props => (props.signinIn !== true ? `transform: translateX(-100%);` : null)}
`;

export const Overlay = styled.div`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => (props.signinIn !== true ? `transform: translateX(0);` : null)}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${props => (props.signinIn !== true ? `transform: translateX(20%);` : null)}
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

// Adicionando media queries para dispositivos menores
const breakPoint = '768px';

export const ResponsiveContainer = styled(Container)`
  width: 100%;
  padding: 20px;
  
  @media screen and (max-width: ${breakPoint}) {
    padding: 10px;
    min-height: auto;
  }
`;

export const ResponsiveForm = styled(Form)`
  padding: 0 20px; /* Ajuste o padding conforme necessário */
  
  @media screen and (max-width: ${breakPoint}) {
    padding: 0 10px;
  }
`;

export const ResponsiveButton = styled(Button)`
  padding: 12px 25px; /* Ajuste o padding conforme necessário */
  
  @media screen and (max-width: ${breakPoint}) {
    padding: 12px 15px; /* Ajuste o padding conforme necessário */
  }
`;

export const ResponsiveOverlayPanel = styled(OverlayPanel)`
  padding: 0 20px; /* Ajuste o padding conforme necessário */
  
  @media screen and (max-width: ${breakPoint}) {
    padding: 0 10px; /* Ajuste o padding conforme necessário */
  }
`;

export const ResponsiveParagraph = styled(Paragraph)`
  font-size: 14px; /* Ajuste o tamanho da fonte conforme necessário */
  line-height: 20px; /* Ajuste a altura da linha conforme necessário */
  margin: 20px 0 30px;
  
  @media screen and (max-width: ${breakPoint}) {
    font-size: 12px; /* Ajuste o tamanho da fonte conforme necessário */
    line-height: 16px; /* Ajuste a altura da linha conforme necessário */
    margin: 10px 0 20px;
  }
`;
