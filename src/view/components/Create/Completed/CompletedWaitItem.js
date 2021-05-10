import React from "react";
import styled from "styled-components";

const CompletedWaitItem = ({data}) => {
  return (
    <Container>
      <Title>
        <span>{data.title}</span>
      </Title>
      <Category>
        <span>{data.category}</span>
      </Category>
      <Status>
        <span>{data.status}</span>
      </Status>
      <PublishedAt>
        <span>{data.publishedAt}</span>
      </PublishedAt>
      <Option>
        <span>{data.option}</span>
      </Option>
    </Container>
  );
};
// 199 58    257
// 1268
const Container = styled.div`
  width: 91.5%;
  box-sizing: border-box;
  padding: 0 30px;
  height: 60px;
  background: #1f1f20;
  border-radius: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  &>div{
     
  }
`;
const Title = styled.div`
  width: 33%;
  font-size: 15px;
  color:#fff;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Category = styled.div`
  font-size: 11px;
  color:#C8CFD7;
  width: 21.7%;
`;
const Status = styled.div`
  font-size: 11px;
  color:#C8CFD7;
  width: 14.5%;
`;
const PublishedAt = styled.div`
  font-size: 11px;
  color:#C8CFD7;
  width: 20%;
`;
const Option = styled.div`
    font-size: 13px;
    color:#4F80FF;
    cursor: pointer;
    height: 100%;
  display: flex;
  align-items: center;
`;

export default CompletedWaitItem;
