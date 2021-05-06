import React from 'react'
import styled from 'styled-components'

import SectionPage1 from './Section/SectionPage1'
import SectionPage2 from './Section/SectionPage2'
import SectionPage3 from './Section/SectionPage3'

const HomeContents = () => {
    
    return(
        <Container>
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
    height: 300vh;
    overflow-x: hidden;
`

export default HomeContents