import React from 'react'
import styled from 'styled-components'
import { completedTestData } from '../../../../testData/TestData'
import ComplatedMainItem from './ComplatedMainItem'

const ComplatedMainItemList = () => {

    return(
        <Container>
            <Title>
             <h1>승인 완료 <span className={'submitCount'}>{completedTestData.items.length}</span></h1>
            </Title>
           
            <ItemList>
            {
                completedTestData.items.map((item, i)=>{
                return <ComplatedMainItem key={i} data={item} />
                })
            }
            </ItemList>
        </Container>
    )
}

const Container = styled.div`
    .submitCount{
        font-size: 13px;
        color: #4F80FF;
    }
`
const ItemList = styled.div`
display: flex;
`
const Title = styled.div`
    display: flex;
    vertical-align: center;
    margin-bottom: 14px;
    h1{
        font-size: 17px;
        span{
            line-height: 17px;
        }
    }
`

export default ComplatedMainItemList