import React from "react";
import styled from "styled-components";
import { MainAppStoreIcon, MainGooglePlay } from "../../../../icons/Main/MainIcon";
import {mainPage2Image} from "../../../../images/Images";

const SectionPage1 = () => {
  return (
    <Container className="page1">
      <ImageBox>
        <img src={mainPage2Image} alt="" />
      </ImageBox>
      <TextArea>
          <h1 className="title">
            PC, 스마트폰만 있으면
          </h1>
          <p>언제, 어디서나 작업할 수 있는<br/>
          Playin XR Studio.
          </p>

          <div className="create">
              <div className={"button"}>
                <span>
                {MainAppStoreIcon()}
                </span>
              </div>
              <div className={"button"}>
                <span>
                {MainGooglePlay()}
                </span>
              </div>
          </div>  
      </TextArea>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: eee;
  box-sizing: border-box;
  position: relative;
`;
const ImageBox = styled.div`
  position:absolute;
  bottom: -100px;  
  img {
    width: 100%;
    display: block;
  }
`;
const TextArea = styled.div`
    position: absolute;
    text-align: center;
    width: 100%;
    height: 100%;
    z-index: 1500;
    display: flex;
    flex-direction: column;
    padding-top: 218px;
    color: #f7f4f4;
    h1{
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 20px;
    }
    p{
        line-height: 31px;
        font-size: 21px;
        margin-bottom: 64px;
    }
    .create{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .button{
        width: 164px;
        height: 51px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
        cursor: pointer;
        margin-left: 19px;
        span{
            display: block;
            font-size: 21px;
        }
    }
    }
`

export default SectionPage1;
