import React, {useState} from "react";
import styled from "styled-components";
import {images} from "../../../../images/WorkspaceImages";
import CompletedMainItem from "./CompletedMainItem";
import {completedTextData} from "./../../../../testData/TestData";
import {debounce} from "lodash";

const CompletedMainItemList = () => {
  const [hlValue, setHlValue] = useState(0);
  const onWheelTop = debounce((e, endPoint) => {
    if (e.deltaY < 0) {
      if (hlValue > endPoint) setHlValue((v) => v - 20);
      if (hlValue <= endPoint) setHlValue(endPoint);
    }
  });
  console.log("hlValue", hlValue);
  const onWheelBottom = debounce((e, endPoint) => {
    if (e.deltaY > 0) {
      if (hlValue < endPoint) setHlValue((v) => v + 20);
      if (hlValue > endPoint) setHlValue(endPoint);
    }
  });
  const imageItmes = Object.keys(images).map((item) => {
    return images[item];
  });
  const data = completedTextData.items.map((item, i) => {
    item.background = imageItmes[i];
    return item;
  });

  return (
    <Container
      onWheel={(e) => {
        onWheelTop(e, 0);
        onWheelBottom(e, 30);
      }}
      hlValue={`-${hlValue}%`}
    >
      <MainContents>
        <ItemList>
          {data.map((item, i) => {
            return <CompletedMainItem data={item} key={i} />;
          })}
        </ItemList>
      </MainContents>
    </Container>
  );
};

const Container = styled.div`
  transition: all 0.3s;
  transform: translateX(${(props) => props.hlValue});
  padding-left: 102px;
`;
const MainContents = styled.div`
  display: flex;
`;
const ItemList = styled.div`
  display: flex;
  margin-bottom: 38px;
`;


export default CompletedMainItemList;
