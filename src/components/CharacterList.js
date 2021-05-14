import React, { useState } from "react";
import styled from 'styled-components'

export default function CharacterList(props){
const {char} = props


const InfoDiv = styled.div
`
width:40%;
`

const UnorderedList = styled.ul
`
display:flex;
flex-wrap: wrap;
`

const ListItems =styled.p
`
width: 50%;
`
return(

    <InfoDiv>
    <UnorderedList>
        <ListItems>Mass: {char.mass}</ListItems>
        <ListItems>Height: {char.height}</ListItems>
        <ListItems>Hair Color: {char.hair_color}</ListItems>
        <ListItems>Skin Color: {char.skin_color}</ListItems>
    </UnorderedList>
</InfoDiv>
)
}