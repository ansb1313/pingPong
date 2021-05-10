import React from 'react'
import styled from 'styled-components'
import WorkspaceWaitItem from '../Workspace/WorkspaceWaitItem'

const DeleteItem = ({data}) => {
    
    return(
        <Container>
            <WorkspaceWaitItem data={data} />
        </Container>
    )
}

const Container = styled.div`

`

export default DeleteItem