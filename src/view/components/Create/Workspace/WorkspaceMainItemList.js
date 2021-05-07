import React, { useState } from 'react'
import styled from 'styled-components'
import {images} from '../../../../images/WorkspaceImages'
import WorkspaceMainItem from './WorkspaceMainItem'
import {workspaceTextData} from './../../../../testData/TestData'
import { PlusIcon } from '../../../../icons/Main/CreateWorkspaceIcon'
import { debounce } from 'lodash'

const WorkspaceMainItemList = () => {

    const [hlValue, setHlValue] = useState(0);

    const onWheelTop = debounce((e, endPoint)=>{
        if(e.deltaY < 0){
            if(hlValue > endPoint) setHlValue((v) => v - 20)
            if(hlValue <= endPoint) setHlValue(endPoint)
        }
    },);
    console.log('hlValue',hlValue)
    const onWheelBottom = debounce((e, endPoint)=>{
        if(e.deltaY > 0){
            if(hlValue < endPoint) setHlValue((v) => v + 20);
            if(hlValue > endPoint) setHlValue(endPoint)
        }
    },)

    const imageItmes = Object.keys(images).map((item)=>{
        return images[item]
    });

    const data = workspaceTextData.items.map((item, i) => {
        item.background = imageItmes[i];
        return item
    });

    
    return(
        <Container onWheel={(e)=>{onWheelTop(e,0); onWheelBottom(e, 30)}} hlValue = {`-${hlValue}%`} >
            <ItemAdd>
                <span>
                    Create
                </span>
                <div className={'createButton'}>
                    {PlusIcon()}
                </div>
            </ItemAdd>
            <ItemList>
                {data.map((item,i) => {
                    return(<WorkspaceMainItem data={item} key={i} />)
                })}
            </ItemList>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    transition: all 0.3s;
    transform: translateX(${props => props.hlValue});
`
const ItemList = styled.div`
    display: flex;
`
const ItemAdd = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 22px;
    
    span{
        line-height: 13px;
        font-size: 11px;
        color:#4F80FF;
        cursor: pointer;
    }
    .createButton{
        cursor: pointer;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: #4F80FF;
        width: 42px;
        height: 42px;
    }
`
export default WorkspaceMainItemList