import React from "react";
import styled from "styled-components";
import {mainPage1Image} from "../../../../images/Images";
import SectionBottomItems from "./SectionBottomItems";

const SectionPage1 = () => {
  return (
    <Container className="page1">
      <ImageBox>
        <img src={mainPage1Image} alt="" />
      </ImageBox>
      <TextArea>
          <h1 className="title">
              XR 게임, 직접 제작해보세요!
          </h1>
          <p>프로그래밍 없이 누구나 쉽게 제작할 수 있는<br/>
          Playin XR Studio.
          </p>

          <div className="create">
              <div className={"button"}>
                <span>
                XR 게임 만들기
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
  bottom: 0px;  
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
        
        width: 240px;
        height: 54px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 1px #fff;
        border-radius: 100px;
        cursor: pointer;
        span{
            display: block;
            font-size: 21px;
        }
    }
    }
`

export default SectionPage1;
