import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const TitleDiv = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;
    flex-wrap: wrap-reverse;

    h1{
        padding: 5%;
        margin: 0;
    }

    div{
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
            <h1><Link to="/" style={{textDecoration: 'unset', color: 'white'}}>Pomodoro Timer</Link></h1>
            <div><Link to="/config"><img src="config.png" alt="Configurações"></img></Link></div>
        </TitleDiv>
    );
}

export default Title;