import React from 'react'
import {Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import CreateHeader from './CreateHeader'
import WorkspaceMain from './Workspace/WorkspaceMain'
import DeleteMain from './Delete/DeleteMain'
import CompletedMain from './Completed/CompletedMain'

const Create = (props) => {
    return(
        <Container>
            <CreateHeader/>
            <Switch>
                <Route path={'/create/workspace'} exact={true} component={WorkspaceMain} />
                <Route path={'/create/Completed'} component={CompletedMain} />
                <Route path={'/create/Deleted'} component={DeleteMain} />
            </Switch>
        </Container>
    )
}

const Container = styled.div`
    background: #171717;
    height: 100vh;
`

export default Create