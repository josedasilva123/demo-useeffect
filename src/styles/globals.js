import styled, { createGlobalStyle, css } from "styled-components";

export const ThemeContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
  padding: 1rem;
`;

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    ul, ol{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    button{
        cursor: pointer;
    }
    img{
        max-width: 100%;
    }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection ? props.flexDirection : 'flex-start'};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};

  background: url(${((props) => props.backgroundImage)})
`;


export const ThemeButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  font-weight: 600;

  padding: 0 1rem;
  height: 52px;

  transition: .3s;

  ${(props) => {
    //Caso o botão esteja desabilitado
    if (props.disabled) {
      return css`
        cursor: not-allowed;

        border: 2px solid gray;
        background: #cecece;
        opacity: .6; 
      `;
    } 
    //Caso não esteja
    else {
      return css`
        border: 2px solid red;
        color: #000;

        &:hover {
          background: red;
          color: white;

          filter: brightness(1.1);
        }
      `;
    }
  }}
`;
