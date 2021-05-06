import React from 'react'
import styled from 'styled-components'
import HomeContents from '../../components/HomeContents/HomeContents'

const MainContainer = (props) => {
    
    return(
        <Container>
           <HomeContents/>
        </Container>
    )
}

const Container = styled.div`
    background: #999;
    overflow-x: hidden;
`

export default MainContainer