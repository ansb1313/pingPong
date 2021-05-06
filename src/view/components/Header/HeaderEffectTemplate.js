import React, { useState } from "react";
import cn from 'classnames'
import styled from 'styled-components'

const HeaderEffectTemplate = ({children}) => {

    const [activeStyle, setActiveStyle] = useState(false)
    
    const onClick = () => {
        setActiveStyle(!activeStyle)
    }

    console.log('activeStyle', activeStyle)
    
    return(
        <Container onClick={onClick} className={cn({active:activeStyle})}>  
            {children}          
        </Container>
    )
}

const Container = styled.div`
    &.active{
        svg{
            fill:#fff;
        }
    }
`

export default HeaderEffectTemplate