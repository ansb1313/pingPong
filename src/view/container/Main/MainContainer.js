import React, {useState} from "react";
import _ from "lodash";
import styled from "styled-components";
import HomeContents from "../../components/HomeContents/HomeContents";
import HomeTemplate from "../../components/HomeContents/HomeTemplate";
import SectionBottomItems from "../../components/HomeContents/Section/SectionBottomItems";
import { useEffect } from "react";

const MainContainer = (props) => {
  const [verticalValue, setverticalValue] = useState(0);

  useEffect(()=>{
    setRisingItemLocation(true);
  },[])
  
  const onWheelTop = _.throttle((e, endPoint) => {
    if (e.deltaY < 0) {
      if (verticalValue > endPoint) setverticalValue((v) => v - 100);
      if (verticalValue <= endPoint) setverticalValue(endPoint);
    }
  }, 400);
  console.log("verticalValue", verticalValue);
  const onWheelBottom = _.throttle((e, endPoint) => {
    if (e.deltaY > 0) {
      if (verticalValue < endPoint) setverticalValue((v) => v + 100);
      if (verticalValue >= endPoint-50) setverticalValue(endPoint);
    }
  }, 400,);



  const [risingItemLocation, setRisingItemLocation] = useState(false);

  const onWheelRisingEffect = (event) => {
    //    const targetEl = event.currentTarget;
    //    console.log('targetEl', targetEl)
    setRisingItemLocation(false);
    setTimeout(() => {
      setRisingItemLocation(true);
    },900);
  };

  const onDrag = () => {
      console.log('drag')
  }

  return (
    <Container
      onWheel={_.throttle((e) => {
        onWheelTop(e, 0);
        onWheelBottom(e, 200);
      },500)}
      onDragStart={onDrag}
      
    >
      <HomeTemplate verticalValue={verticalValue} />
      <SectionWarp transformValue={`-${verticalValue}vh`} onWheel={(e)=>{onWheelRisingEffect(e);}}>
        <HomeContents/>
      </SectionWarp>
      <SectionBottomItems risingItemLocation={risingItemLocation}
                          verticalValue={verticalValue}
      />
    </Container>
  );
};

const Container = styled.div`
  background: #999;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100vh;
`;
const SectionWarp = styled.div`
  height: 300vh;
  transform: translateY(${(props) => props.transformValue});
  transition: all 0.6s cubic-bezier(0.78, 0, 0.73, 0.1);
`;

export default MainContainer;
