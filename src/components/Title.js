import React from "react";
import styled from "styled-components";

const TitleDiv = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;
    flex-wrap: wrap-reverse;

    h1{
        padding: 5%;
        margin: 0;
    }

    a{
        width: 15%;
        height: 15%;
        padding: 1%;
    }

    img{
        width: 100%;
        height: 100%;
    }
`;

function Title(){
    return(
        <TitleDiv>
            <h1>Pomodoro Timer</h1>
            <a href=""><img src="config.png" alt="Configurações"></img></a>
        </TitleDiv>
    );
}

export default Title;