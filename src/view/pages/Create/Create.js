import React from 'react'
import styled from 'styled-components'
import CreateContainer from '../../container/Create/CreateContainer'


const Create = (props) => {
    
    return(
        <Container>
            <CreateContainer {...props} />
        </Container>
    )
}

const Container = styled.div`
    height:100vh;
    overflow: hidden;
`
export default Create