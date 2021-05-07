import React, { useState } from 'react'
import { debounce } from 'lodash';
import styled from 'styled-components'
import HomeContents from '../../components/HomeContents/HomeContents'
import HomeTemplate from '../../components/HomeContents/HomeTemplate';

const MainContainer = (props) => {
    
    const [virticalValue, setVirticalValue] = useState(0);

    const onWheelTop = debounce((e, endPoint)=>{
        if(e.deltaY < 0){
            if(virticalValue > endPoint) setVirticalValue((v) => v - 100)
            if(virticalValue <= endPoint) setVirticalValue(endPoint)
        }
    }, 150);
    console.log('virticalValue',virticalValue)
    const onWheelBottom = debounce((e, endPoint)=>{
        if(e.deltaY > 0){
            
            if(virticalValue < endPoint) setVirticalValue((v) => v + 100);
            if(virticalValue > endPoint) setVirticalValue(endPoint)
        }
    }, 150)

    return(
        <Container onWheel={(e)=>{onWheelTop(e, 0);onWheelBottom(e, 200);}}>
           <HomeTemplate virticalValue={virticalValue} />  
           <SectionWarp transformValue={`-${virticalValue}vh`}>              
           <HomeContents/>
          </SectionWarp>
        </Container>
    )
}

const Container = styled.div`
    background: #999;
    overflow-x: hidden;
    overflow-y: hidden;
    height: 100vh;
`
const SectionWarp = styled.div`
    height: 300vh;
    transform: translateY(${props => props.transformValue});
    transition: all 0.6s cubic-bezier(0.78, 0, 0.73, 0.1);
`

export default MainContainer