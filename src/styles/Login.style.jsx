// BotaoStyle.jsx
import styled from "styled-components";

export const BotaoCustom = styled.button `
    color: #000;
    font-size: 20px;
    border: 30px; // Certifique-se de ajustar isso conforme necessário
    background-color: #336633;
    border-radius: 8px;
    width: 50%;
    height: 50px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2) 0 6px 20px 0 rgba(0,0,0,0.19);
    cursor: pointer;

    &:hover {
        background-color: #FFFFCC;
    }
`


export const InputCustomizado = styled.input `
    color: #FFF;
    font-size: 20px;
    background-color: transparent;
    border: 2px solid #6a6a6a;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2) 0 6px 20px   0 rgba(0,0,0,0.19);
    padding: 16px 20px;
    width: 75%;

        input::placeholder {
            color: #FFF;
            font-size: 12px;
            opacity: 0.7;
        }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: 100vw;
  background-color: #383838;
  
`

export const Form = styled.form`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #201d1d;
  border-radius: 15px;
  width: 100%;
  max-width: 525px;
  gap: 30px 0px;
  height: 500px;
  border: 2px solid chartreuse;
  h1 {
    color: white;
    font-size: 20px;
    font-weight: light;
  }

  p {
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
  a {
    color: white;
    font-size: 14px;

  }
  
`