// Write your Character component here
import React, { useState } from "react";
import styled from 'styled-components'
import CharacterList from './CharacterList'

const CardContainer = styled.div
`
display:flex;
flex-wrap: wrap;
max-width: 100%;
justify-content: space-evenly;
`

const CardDiv = styled.div`
width: 90%;
border: 2px solid red;
background-color: rgba(192,192,192,0.6);
margin: 0 0 .5% 0;
display:flex;
justify-content: space-between;
align-items: center;

&:hover{
    background-color: rgba(180,195,195,0.85) 
}

`

const Name = styled.h1`
text-align:left;
margin-left: 2%;
`

const XSaber = styled.i
`
margin: auto;
text-align:right;

`

const IconDiv = styled.div
`
margin-right: 3%;
text-align:right;
width:4%;

`

const NameDiv = styled.div
`
width: 30%;
`




export default function Character(props){
    const {starWarsData} = props
    const [charOpen, setCharOpen] = useState(null)
    console.log(starWarsData)
    return(
        // map
        <CardContainer>
            {starWarsData.map((char, index) => {
                return(
                <CardDiv key={index} onClick={index !== charOpen ?() => setCharOpen(index): () => setCharOpen(100) }>
                    <NameDiv>
                        <Name>{char.name}</Name>
                    </NameDiv>
                    {index === charOpen ?<CharacterList char={char}/> : null}
                    <IconDiv > 
                        {index === charOpen? <XSaber className="swg swg-lightsabers-2 swg-3x"></XSaber> : <XSaber className="swg swg-kylolightsaber swg-3x"></XSaber>} 
                    </IconDiv>
                
                
                </CardDiv>
                )
            })}
        </CardContainer>
    )
}