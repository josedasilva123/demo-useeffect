import styled, {createGlobalStyle} from 'styled-components'

export const ThemeContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 600px;
    padding: 1rem;
`

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    ul, ol{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    img{
        max-width: 100%;
    }
`