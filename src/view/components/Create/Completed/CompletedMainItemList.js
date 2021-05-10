import React from "react";
import styled from "styled-components";
import { PlusIcon } from "../../../../icons/Main/CreateWorkspaceIcon";
import {CompletedTestData} from "../../../../testData/TestData";
import CompletedMainItem from "./CompletedMainItem";

const CompletedMainItemList = () => {
  return (
    <Container>
      <ItemAdd>
        <span>Create</span>
        <div className={"createButton"}>{PlusIcon()}</div>
      </ItemAdd>
      <ItemList>
        {CompletedTestData.items.map((item, i) => {
          return <CompletedMainItem key={i} data={item} />;
        })}
      </ItemList>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 58px;
  .submitCount {
    font-size: 13px;
    color: #4f80ff;
  }
  display: flex;
  align-items: center;
`;
const ItemList = styled.div`
  display: flex;
`;

const ItemAdd = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 22px;

  span {
    line-height: 13px;
    font-size: 11px;
    color: #4f80ff;
    cursor: pointer;
  }
  .createButton {
    cursor: pointer;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #4f80ff;
    width: 42px;
    height: 42px;
  }
`;

export default CompletedMainItemList;
