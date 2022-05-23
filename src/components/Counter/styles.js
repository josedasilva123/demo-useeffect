import styled from 'styled-components';

export const StyledCounter = styled.div`
    .controls{
        display: flex;
        gap: 2rem;
        justify-content: center;
        button{
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            font-size: 16px;
            font-weight: 700;

            border-radius: 255px;
            border: none;

            background: #0000FF;
            color: #fff;

            padding: 0 1.5rem;
            height: 42px;

            transition: .4s;

            &:hover{
                filter: brightness(1.5);
            }
        }
    }
    
`