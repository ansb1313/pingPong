import React from 'react'
import styled from 'styled-components'
import { CompletedWaitItemData } from '../../../../testData/TestData'
import CompletedWaitItem from './CompletedWaitItem'

const CompletedWaitItemList = () => {
    
    return(
        <Container>
            <Title>
                <h1>승인 대기중인 콘텐츠</h1>
            </Title>
            <Part>
                <div className="itemTitle">
                    <span>
                    콘텐츠 이름
                    </span>
                </div>
                <div className="itemCategory">
                    <span>
                    카테고리
                    </span>
                </div>
                <div className="itemStatus">
                    <span>
                    상태
                    </span>
                </div>
                <div className="itemPublishedAt">
                    <span>
                    제작일
                    </span>
                </div>
            </Part>     
            <Items>
            {
                CompletedWaitItemData.items.map((item, i)=>(
                    <CompletedWaitItem key={i} data={item} />
                ))
            }
            </Items>
        </Container>
    )
}

const Container = styled.div`
`
const Title = styled.div`
    margin-bottom: 20px;
    h1{
        color:#fff;
        size: 17px;
    }
`
const Part = styled.div`
    width: 91.5%;
    padding: 0 30px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    &>div{
        display: flex;
        align-items: center;
        span{
            color:#71777C;
            font-size: 11px;
            line-height: 19px;
        }
    }
    .itemTitle{
        width: 33%;
    }
    .itemCategory{
        width: 21.7%;
    }
    .itemStatus{
        width: 14.5%;
    }
    .itemPublishedAt{
        width: 20%;
    }
`
const Items = styled.div`

`
export default CompletedWaitItemList