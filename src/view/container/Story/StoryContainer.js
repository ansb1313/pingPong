import React from 'react'
import styled from 'styled-components'
import StoryBoard from '../../components/Story/StoryBoard'
import StoryTemplate from '../../components/Story/StoryTemplate'

const StoryContainer = (props) => {
    
    return(
        <Container>
            <StoryTemplate/>
            <StoryBoard/>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    padding-top: 107px;
    padding-right: 306px;
`

export default StoryContainer