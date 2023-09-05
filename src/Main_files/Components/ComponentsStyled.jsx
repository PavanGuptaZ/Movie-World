import styled from 'styled-components';

export const UiStyle = styled.ul`
    display:flex;
    & li a{
        font-family: 'Oswald', sans-serif;
        color: #fff;
        padding: 0.25rem 1rem;
        border-radius: 0.5rem;
        margin: 0 0.25rem;
        font-weight: 500;
    }
    & li a:hover,
    & li a.active{
        background-color : #fff;
        color:#020D18;
    }
    @media screen and (max-width:900px){
        display:flex;
        flex-direction:column;
        & li a{
            display:block;
            text-align:center;
            width:200px;
            margin: 0.25rem;
    }
    }
`
export const UiStyle02 = styled.ul`
    display:flex;
    margin:0.75rem 0;
    & li a{
        font-family: 'Oswald', sans-serif;
        color: #fff;
        padding: 0.25rem 1rem;
        border-radius: 0.5rem;
        margin: 0 0.25rem;
        font-weight: 500;
    }
    & li a:hover,
    & li a.active{
        background-color : #fff;
        color:#020D18;
    }

`