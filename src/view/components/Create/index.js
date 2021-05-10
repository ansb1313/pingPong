import React from 'react'
import {Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import CreateHeader from './CreateHeader'
import CompletedMain from './Completed/CompletedMain'
import DeleteMain from './Delete/DeleteMain'
import WorkspaceMain from './Workspace/WorkspaceMain'

const Create = (props) => {
    return(
        <Container>
            <CreateHeader/>
            <Switch>
                <Route path={'/create/workspace'} exact={true} component={WorkspaceMain} />
                <Route path={'/create/completed'} component={CompletedMain} />
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