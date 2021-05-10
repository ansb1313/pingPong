import React from "react";
import styled from "styled-components";
import { completedTextData } from '../../../../testData/TestData'
import CompletedMainItemList from "./CompletedMainItemList";

const CompletedMain = () => {
  return (
    <Container>
      <CompletedMainItemList />
      <PageNation>
        <div className="items">
          <div className="startNum">
            <span>01</span>
          </div>
          <div className="duration"></div>
          <div className="endNum">
            <span>{completedTextData.items.length}</span>
          </div>
        </div>
      </PageNation>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;
const PageNation = styled.div`
  box-sizing: border-box;
  padding: 0 62px;

  .items {
    display: flex;
    align-items: center;
    div {
      margin-right: 7px;
    }
    span {
      color: #fff;
      font-size: 11px;
      display: block;
    }
  }
  .duration {
    height: 2px;
    width: 120px;
    background: #fff;
    opacity: 0.45;
  }
`;

export default CompletedMain;
