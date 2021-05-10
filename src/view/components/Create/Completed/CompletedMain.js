import React from 'react'
import styled from 'styled-components'
import CompletedMainItemList from './CompletedMainItemList'
import CompletedWaitItemList from './CompletedWaitItemList'

const CompletedMain = (props) => {
    
    return(
        <Container>
           <MainItem>
            <CompletedMainItemList/>
           </MainItem>
           <CompletedWaitItemList/>
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

export default CompletedMain