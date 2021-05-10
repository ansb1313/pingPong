import React from 'react'
import styled from 'styled-components'

const StoryHeader = () => {
    
    const stepLength = [1, 2, 3, 4, 5];

    return(
        <Container>
            <Logo>

            </Logo>
            <HeaderMainContents>
                    <Structure>
                        <div className="title">
                            <h2>스토리 구조</h2>
                        </div>
                    </Structure>
                    <Step>
                        {
                            stepLength.map((item, i) => (
                                    <StepIcon>
                                        <span>{i}</span>
                                    </StepIcon>
                            ))
                        }
                    </Step>
                <TextArea>
                </TextArea>
            </HeaderMainContents>
            <MenuItems>
            </MenuItems>
        </Container>
    )
}

const Container = styled.div`
    z-index: 2000;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 107px;
    background: #171717;
`
const Logo = styled.div`

`
const HeaderMainContents = styled.div`

`
const Structure = styled.div`

`
const Step = styled.div`

`
const TextArea = styled.div`

`
const MenuItems = styled.div`

`
const StepIcon = styled.div`

`

export default StoryHeader