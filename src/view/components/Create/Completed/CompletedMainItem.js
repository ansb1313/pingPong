import React, { useState } from 'react'
import cn from 'classnames';
import styled from 'styled-components'
import { locationIcon, openTimeIcon } from '../../../../icons/Main/CreateWorkspaceIcon';
import { deleteItemArrow } from '../../../../icons/Main/CreateDeleteIcon';

const CompletedMainItem = ({data}) => {

    const [filter, setFliter] = useState(false)

    return(
        <Container onMouseEnter={()=>{setFliter(true)}} onMouseLeave={()=>{setFliter(false)}}>
            <CompletedItem className={cn({boxShadow:filter})}>
              <ImageBox>
              <ArrowIcon>
              {deleteItemArrow()}
              </ArrowIcon>
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
              <ExportAppButton className={cn({exportButton:filter})}>
                  <a href="!#"  className={'export to app'} >
                      Export to App
                  </a>
              </ExportAppButton>              
            </CompletedItem>
            <ApprovedAt>
                <span>
                    {data.approvedAt}
                </span>
            </ApprovedAt>

        </Container>
    )
}

const Container = styled.div`
    margin-top: 2px;
`
const CompletedItem = styled.div`
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-right: 20px; 
    width: 283px;
    height: 460px;
    box-sizing: border-box;
    border: solid 1px rgba(255,255,255,0.15);
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    &.boxShadow{
        box-shadow: 0 0 0.3em 0.02em rgba(55, 122, 255, 1);
    }
`
const ImageBox = styled.div`
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    &.selelcted{
        background: #377bff;
    }
    .filter{
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        background: linear-gradient(#2D2A24 15.63%, rgba(45,42,36,0) 77.6%);
        opacity: 0.45;
        transition: all 0.3s;
        &.isActive{
            background: #1F1F20;
            opacity: 0.45;
        }
    }
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`
const TextArea = styled.div`
    transition: all 0.3s;
    z-index: 2;
    padding:0 14px;
    width: 100%;
    height: 176px;;
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
        transform:translateY(-34%);
        position: absolute;
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
const ApprovedAt = styled.div`
    span{
        color:#71777C;
        font-size: 9px;
    }
`
const ExportAppButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    transition: all 0.3s;    
    width: 100%;
    left: 0;
    transform: translateY(150%);
    
    padding:0 14px;
    position: absolute;
    opacity: 0;
    &.exportButton{
        opacity: 1;
        transform: translateY(0%);
        position: relative;
        width: 100%;
        padding:0 14px;
    }
    a{
        text-decoration: none;
        color:#fff;
        font-size: 11px;
        display: block;
        text-align: center;
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-radius: 12px;
        background: #4F80FF;
        letter-spacing: 0.5px;
    }
`
const ArrowIcon = styled.div`
    position: absolute;
    right: 15px;
    top: 15px;
`

export default CompletedMainItem