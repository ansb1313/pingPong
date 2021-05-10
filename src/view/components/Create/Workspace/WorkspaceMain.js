import React from 'react'
import styled from 'styled-components'
import WorkspaceMainItemList from './WorkspaceMainItemList'
import WorkspaceWaitItemList from './WorkspaceWaitItemList'

const WorkspaceMain = (props) => {
    
    return(
        <Container>
           <MainItem>
            <WorkspaceMainItemList/>
           </MainItem>
           <WorkspaceWaitItemList/>
        </Container>
    )
}

const Container = styled.div`
`
const MainItem = styled.div`
        display: flex;
    h1{
        color:#fff;
    }
`

export default WorkspaceMain