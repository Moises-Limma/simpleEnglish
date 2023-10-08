import styled from 'styled-components'


export const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 280px;
`

export const SliderItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: "Roboto", sans-serif;

    && span {
        color: #ff345c;
        font-weight: 900;
        font-size: 50px;
        letter-spacing: 5px;

        @media(max-width: 375px){
            font-size: 35px;
        }
    }

    && h1 {
        letter-spacing: 5px;
        color: #FFF;
        font-size: 60px;
        padding: 30px;

        @media(max-width: 375px){
            font-size: 45px;
        }
    }
`;

export const Button = styled.button`
    background-color: #ff345c;
    align-self: center;
    border: none;
    width: 150px;
    height: 55px;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;

    &&:hover{
        background-color: green;
        width: 190px;
        height: 65px;
        font-size: 25px;
    }
`;