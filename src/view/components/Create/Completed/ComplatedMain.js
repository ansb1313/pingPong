import React from 'react'
import styled from 'styled-components'
import ComplatedMainItemList from './ComplatedMainItemList'

const ComplatedMain = (props) => {
    
    return(
        <Container>
           <ComplatedMainItemList/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    h1{
        color:#fff;
    }
`

export default ComplatedMain