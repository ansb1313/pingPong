import React from 'react'
import styled from 'styled-components'

const StoryBoard = () => {
    return(
        <Container>
            StoryBoard
            <ControllTool></ControllTool>
            <EditTool></EditTool>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding-right: 306px;
    box-sizing: border-box;
    position: relative;
`
const ControllTool = styled.div`
    width: 100px;
    height: 41px;
    border-radius: 16px;
    background: #37383A;
    left: 30px;
    top: 23px;
;
`
const EditTool = styled.div`
    width: 262px;
    height: 41px;
    border-radius: 16px;
    background: #37383A;
    right: 30px;
    top: 23px;
`

export default StoryBoard