import styled, {css} from "styled-components";

export const StyledHeader = styled.header`
    background: red;
    h1{
        margin: 0;
        padding: 0;
        color: #fff;
    }  

    //Condicional para fixar o header
    ${({fixed}) => {
        if(fixed){
            return css`
                position: fixed;
                width: 100%;
                z-index: 1001;
                animation: fadeIn .6s forwards;
            `
        }
    }}

    @keyframes fadeIn{
        from{
            opacity: 0;
        } to {
            opacity: 1;
        }
    }
`