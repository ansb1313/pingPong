import React from 'react'
import styled from 'styled-components'
import { storyProlog, storyScenario } from '../../../icons/Story/storyIcon'
import StoryHeader from './StoryHeader'

const StoryTemplate = () => {
    return(
        <Container>
           <StoryHeader/> 
            <TemplateItems>
                <Title>
                    <h3>프롤로그</h3>
                    {storyProlog()}
                </Title>
                <Contents>
                <Scenario>
                    <div className="text">
                    <span>시나리오</span>
                    </div>
                    {storyScenario()}
                </Scenario>
                <Desc>
                    <p>
                    다이어리에서 사진 단서를 얻으면 3층 비밀의 방으로 향하게 된다. 그곳에는 그녀의 비밀이 숨겨져 있는 여러 사진들이 있다.
                    </p>
                </Desc>
                </Contents>
            </TemplateItems>
            
        </Container>
    )
}

const Container = styled.div`
`
const TemplateItems = styled.div`
    position: fixed;
    width: 306px;
    right: 0;
    top: 107px;
    bottom: 0;
    background: #37383A;
`
const Title = styled.div`
    display: flex;
    width: 100%;
    font-weight: bold;
    justify-content: space-between;
    padding: 14px 20px 10px 20px;
    width: 306px;
    border: solid 1px #37383A;
    height: 43px;
    background: #171717;
    color: #fff;
`
const Contents = styled.div`

`
const Scenario = styled.div`
    box-sizing: border-box;
    padding: 14px 20px;
    background: #4F80FF;
    height: 41px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    span{
        font-size: 13px;
        color:#fff;
    }
    svg{
        display: block;
    }
`
const Desc = styled.div`
    padding: 16px 20px;
    p{
        color: #C8CFD7;
        font-size: 13px;
        line-height: 21px;
    }
`

export default StoryTemplate