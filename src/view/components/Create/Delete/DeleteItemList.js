import React from 'react'
import styled from 'styled-components'
import { deletePageData } from '../../../../testData/TestData'
import DeleteItem from './DeleteItem'

const DeleteItemList = () => {
    return(
        <Container>
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
            {
                deletePageData.items.map((item, i) => (
                    <DeleteItem key={i} data={item}/>
                ))
            }        
        </Container>
    )
}

const Container = styled.div`

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

export default DeleteItemList