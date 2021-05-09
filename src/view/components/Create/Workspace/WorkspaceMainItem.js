import React, { useState } from 'react'
import cn from 'classnames';
import styled from 'styled-components'
import { locationIcon, openTimeIcon } from '../../../../icons/Main/CreateWorkspaceIcon';

const WorkspaceMainItem = ({data}) => {

    const [filter, setFliter] = useState(false)

    return(
        <Container onMouseEnter={()=>{setFliter(true)}} onMouseLeave={()=>{setFliter(false)}}>
            <WorkSpaceItem>
              <ImageBox>
                  <img src={data.background} alt="" />
                  <div className={cn("filter",{isActive:filter})} />
              </ImageBox>  
              <TextArea className={cn({isActive:filter})}>
                  <h1 className="title">{data.title}</h1>
                  <span className="type">{data.type}</span>
                  <p className="desc">{data.desc}</p>
                  <div className="locationAndInfo">
                    <span className="info">{openTimeIcon()}{data.info}</span>
                    <span className="location">{locationIcon()}{data.location}</span>
                  </div>
              </TextArea>
            </WorkSpaceItem>      
        </Container>
    )
}

const Container = styled.div`
`
const WorkSpaceItem = styled.div`
    cursor: pointer;
    padding: 240px 15px 0 15px;
    margin-right: 20px;
    width: 283px;
    height: 460px;
    box-sizing: border-box;
    border: solid 1px rgba(255,255,255,0.15);
    position: relative;
    display: flex;
    flex-direction: column;
`
const ImageBox = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    .filter{
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        background: #37383A;
        opacity: 0.45;
        transition: all 0.3s;
        &.isActive{
            background: rgba(255, 255, 255, 0.479);
        }
    }
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`
const TextArea = styled.div`
    color:#fff;
    position: relative;
    h1{
        
        opacity: 0.9;
        font-size: 21px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    svg{
        margin-right: 5px;
    }
    &.isActive{
    }
    .type{
        
        opacity: 0.45;
        font-size: 9px;
        margin-bottom: 20px;
    }
    .desc{
        margin-top: 15px;
        font-size: 9px;
        opacity: 0.8;
        
        margin-bottom: 15px;
        line-height: 1.8;
    }
    .info{
        font-size: 9px;
        
        opacity: 0.8;
        margin-bottom: 7px;
    }
    .location{
        font-size: 9px;
        
        opacity: 0.8;
    }
    .locationAndInfo{
        display: flex;
        flex-direction: column;
    }
`

export default WorkspaceMainItem