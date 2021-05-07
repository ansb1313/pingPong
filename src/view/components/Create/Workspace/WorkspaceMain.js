import React from 'react'
import styled from 'styled-components'
import WorkspaceMainItemList from './WorkspaceMainItemList'

const WorkspaceMain = () => {
    
    return(
        <Container>
            <WorkspaceMainItemList/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    overflow: hidden;
`


export default WorkspaceMain