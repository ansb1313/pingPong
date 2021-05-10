import React, { useState } from 'react'
import cn from 'classnames';
import styled from 'styled-components'

const WorkspaceButtonEffect = ({children}) => {

    const [button, setButton] = useState(false);

    const onClick = () => {
        setButton(!button)
    }

    return(
        <Container onClick={onClick} >
            <div className={cn('circle',{location:button})}></div>
            {children}
        </Container>
    )
}

const Container = styled.div`
position: relative;
cursor: pointer;
width: 100%;
height: 100%;
    .circle{
        position: absolute;
        transition: all 0.2s;
        left: -2%;
        top: 50%;
        transform: translateY(-50%);
        background: #EBEEF1;
        border: 100%;
        width: 18px;
        height: 18px;
        border-radius: 100%;
        cursor: pointer;
        
        &.location{
            
         transform: translate(100%,-50%);
         background:#4F80FF;
        }
    }
`

export default WorkspaceButtonEffect