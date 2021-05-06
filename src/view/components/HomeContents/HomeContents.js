import React from 'react'
import styled from 'styled-components'
import HomeTemplate from './HomeTemplate'
import SectionPage1 from './Section/SectionPage1'
import SectionPage2 from './Section/SectionPage2'
import SectionPage3 from './Section/SectionPage3'

const HomeContents = () => {
    
    return(
        <Container>
            <HomeTemplate/>
            <SectionPage1/>
            <SectionPage2/>
            <SectionPage3/>
        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    background: #eee;
    position: relative;
    height: 300%;
    width: 100vw;
`

export default HomeContents