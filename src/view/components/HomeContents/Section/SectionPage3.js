import React from "react";
import {mainPage3Image} from "../../../../images/Images";
import styled from "styled-components";
import { MainPageNum } from "../../../../icons/Main/MainIcon";

const SectionPage3 = () => {
  return (
    <Container className="page3">
      <ContentsContainer>
        <ImageSection></ImageSection>
        <TextArea>
          <span className={"pageNumber"}>{MainPageNum()}</span>
          <h1><span className={'titleBold'}>코딩 없이</span> 만드는<br/>
           XR 방탈출 게임</h1>
          <p>
            이전에는 게임을 제작하려면 반드시 프로그래밍 기술이 필요했습니다.
            <br />
            그러나 플레인에서는 특별한 기술 없이도 누구나 쉽게 게임을 제작할 수
            있습니다.{" "}
          </p>
        </TextArea>
      </ContentsContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: Linear-Gradient(
    rgba(193, 191, 255, 0.75) 0%,
    rgba(255, 255, 255, 0) 46.35%
  );
  overflow: hidden;
  box-sizing: border-box;
`;
const ContentsContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ImageSection = styled.div`
  width: 49.2%;
  height: 71%;
  background:url(${mainPage3Image});
  background-position: center center;
  background-size: cover;
`;
const TextArea = styled.div`
  opacity: 0.8;
  box-sizing: border-box;
  padding-top: 15%;
  padding-left: 8%;
  padding-right: 9%;
  height: 100%;
  flex: 1;
  .pageNumber{
      font-size: 36px;
      font-weight: bold;
      font-family: Poppins;
      color:#ddd;
      line-height: 47px;
      margin-bottom: 14px;
      display: block;
      width: 38px;
      height: 47px;
  }
  h1{
       font-size: 36px;
       line-height: 47px;
       margin-bottom: 40px;
      .titleBold{
          font-weight: bold;
      }
  }
  p{
      font-size: 12px;
      line-height: 21px;
      font-weight: bold;
  }
`;

export default SectionPage3;
