import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
  background-image: url(/assets/aula-dark-photoaidcom-darken.jpg);
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

    @media(max-width: 768px){
        background-position: 80%;
    }

    @media(max-width: 375px){
        background-position: 40% 20%;
    }
`;

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;

    @media(max-width: 768px) {
        max-width: 760px;
    }
`

export const Nav = styled.nav`
    width: 100%;
    padding: 20px;

    @media(max-width:375px){
        max-width: inherit;
    }
`

export const Lista = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    letter-spacing: 2px;
    font-size: 21px;

    @media(max-width: 375px){
        margin-left: 220px;
        flex-direction: column;
        border-radius: 10%;
    }
`;

export const LogoDiv = styled.div`
    @media(max-width: 375px){
        position: absolute;
        margin-left: -370px;
        margin-top: -150px;
    }
`

export const ItemLi = styled.li`
    margin: 0 auto;

    @media(max-width: 375px){
        margin-bottom: 15px;
    }
`;

export const Ancora = styled.a`
    font-family: "Roboto";
    text-decoration: none;
    padding: 10px;
    color: #FFFFFF;
    font-weight: bold;

    &:hover {
        border-bottom: 2px solid #055bca;
    }
`;

export const Icone = styled(Image)`
    width: 30px;
    height: 30px;

`
