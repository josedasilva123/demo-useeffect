import styled from "styled-components";

export const StyledModal = styled.div`
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-height: 100vh;
    background: rgba(0,0,0, .3);
    inset: 0;

    .modalBox{
        padding: 3rem;
        background: #fff;
        position: relative;

        .closeButton{
            position: absolute;
            top: 1rem;
            right: 1rem;
            border: none;
            background: transparent;
            opacity: .6;
            transition: .3s;

            &:hover{
                opacity: 1;
            }
        }
    }
`