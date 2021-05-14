// Write your Character component here
import React, { useState } from "react";
import styled from 'styled-components'

const CardContainer = styled.div
`
display:flex;
flex-wrap: wrap;
max-width: 100%;
justify-content: space-evenly;
border: 2px solid green;
`

const CardDiv = styled.div`
width: 26%;
border: 2px solid red;
`


export default function Character(props){
    const {starWarsData} = props
    console.log(starWarsData)
    return(
        // map
        <CardContainer>
        
            {starWarsData.map((char) => {
                return(
                <CardDiv>
                <h1>{char.name}</h1>
                </CardDiv>
                )
            })}

        
        </CardContainer>
    )
}