import React from 'react'
import styled from 'styled-components'


const WorkspaceMainItem = ({data}) => {
    return(
        <Container>
            <WorkspaceItem>
                <ImageBox>
                    <img src={data.background} alt=""/>
                </ImageBox>
                
                <ItemArea>
                    <Text>
                        <h1>
                            {data.title}
                        </h1>
                        <span className={"type"}>
                            {data.date}
                        </span>
                    </Text>
                    <SubmitButton>
                     <a href="#!">승인 요청</a>
                    </SubmitButton>
                </ItemArea>
            </WorkspaceItem>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    margin-right: 20px;
`
const WorkspaceItem = styled.div`  
    box-sizing:border-box;
    width: 348px;
    height: 224px;
    border-radius: 20px;
    background: #1F1F20;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`
const ImageBox = styled.div`
    width: 100%;
    height: 162px;
    overflow: hidden;
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ItemArea = styled.div`
    padding: 0 15px;
    width: 100%;
    box-sizing: border-box; 
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;
 
`
const Text = styled.div`
   h1{
        font-size: 15px;
        line-height: 18px;
        opacity: 0.8;
        margin-bottom: 2px;
        cursor: pointer;
    }
    .type{
        color:#fff;
        opacity: 0.45;
        font-size: 9px;
        display: block;
    }
    .desc{
        font-size: 11px;
        color:#fff;
        opacity: 0.8;
    }
`

const SubmitButton = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 69px;
    justify-content: center;
    height:28px;
    border-radius: 15px;
    border:solid 1px #4F80FF;
    a{
        color:#4F80FF;
        font-size: 11px;
        text-decoration: none;
        display: block;
        
    }
`

export default WorkspaceMainItem