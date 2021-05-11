import React from 'react'
import styled from 'styled-components'
import { childBranch, lineIcon, storyBackIcon, storyDeleteIcon, storyHandIcon, storyPinterIcon, twinIcon } from '../../../icons/Story/storyIcon'


const StoryBoard = () => {
    return(
        <Container>
            <ControllTool>
                <div className="pointer storyIcon">{storyPinterIcon()}</div>
                <div className="darg storyIcon">{storyHandIcon()}</div>
                <div className="back storyIcon">{storyBackIcon()}</div>
            </ControllTool>
            <EditTool>
                <div className="twin storyIcon">{twinIcon()}</div>
                <div className="child storyIcon">{childBranch()}</div>
                <div className="line storyIcon">{lineIcon()}</div>
                <div className="delete storyIcon">{storyDeleteIcon()}</div>
            </EditTool>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding-right: 306px;
    box-sizing: border-box;
    position: relative;
    height: 100vh;
    background-color: #888;
    background-image: linear-gradient(45deg, #444 25%, transparent 25%, transparent 75%, #444 75%, #444), linear-gradient(45deg, #444 25%, transparent 25%, transparent 75%, #444 75%, #444);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    .storyIcon{
        cursor: pointer;
    }
`
const ControllTool = styled.div`
    position: fixed;
    display: flex;
    box-sizing: border-box;
    padding: 8px 0px;
    height: 41px;
    border-radius: 16px;
    background: #37383A;
    left: 30px;
    top: 130px;
    &>div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        padding: 0 14px;
        border-right: solid 1px #71777C;
        &:last-child{
            border-right: none;
        }
        svg{
            display: block;
        }
    }

;
`
const EditTool = styled.div`
      position: fixed;
    display: flex;
    box-sizing: border-box;
    padding: 8px 0px;
    height: 41px;
    border-radius: 16px;
    background: #37383A;
    right:336px;
    top: 130px;
    &>div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        padding: 0 14px;
        border-right: solid 1px #71777C;
        &:last-child{
            border-right: none;
        }
        svg{
            display: block;
        }
    }
`

export default StoryBoard