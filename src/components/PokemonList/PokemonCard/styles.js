import styled from 'styled-components';

export const StyledCard = styled.li`
    cursor: pointer;
    padding: 2rem;
    background: #fff;
    border: 1px solid red;

    transition: .3s;
    
    &:hover{
        box-shadow: 0 0 25px 0 rgba(0,0,0, .2);
    }
`