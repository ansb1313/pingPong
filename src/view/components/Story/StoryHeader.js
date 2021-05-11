import React from "react";
import { useState } from "react";
import cn from 'classnames'
import styled from "styled-components";
import {MainLogo} from "../../../icons/Main/MainIcon";
import {headerMoreMenuArrowIcon, storyLeavingIcon} from "../../../icons/Story/storyIcon";

const StoryHeader = () => {
  const stepLength = [1, 2, 3, 4, 5];
  const [iconFocus, setIconFocus] = useState(false)

  return (
    <Container>
      <Logo>
        <div className="headerLogo">{MainLogo()}</div>
        <div className="moreMenu">{headerMoreMenuArrowIcon()}</div>
      </Logo>
      <HeaderMainContents>
        <Structure>
          <StructureTopContents>
            <Title>
              <h2>스토리 구조</h2>
            </Title>
            <Step>
              <div className="icons">
              {stepLength.map((item, i) => (
                <StepIcon className={"stepIcon"}>
                  <span>{i + 1}</span>
                </StepIcon>
              ))}                  
              </div>  
              <PassThrough>
                  <div className="pass"></div>
              </PassThrough>
            </Step>
            
          </StructureTopContents>
          <StructureBottomContents>
            <Desc>
              <p>
                게임이 어떻게 시작하고, 전개될 것인지 생각해보면 게임을 훨씬
                수월하게 제작할 수 있습니다. 루트를 다양하게 구성해서 유저의
                선택에 따라 결과가 바뀐다면 더욱 재밌겠죠! 스토리 구조를 짠 뒤,
                각 항목별로 시나리오를 구상해보세요!
              </p>
            </Desc>
          </StructureBottomContents>
        </Structure>
      </HeaderMainContents>
      <MenuItems>
         <div className="leaving">
             <div className="leavingIcon">
                 {storyLeavingIcon()}
             </div>
             <span>Leaving</span>
         </div>
         <div className="save">
             <span>Save</span>
         </div>
      </MenuItems>
    </Container>
  );
};

const Container = styled.div`
  z-index: 2000;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 107px;
  background: #171717;
  padding: 0 0 0 21px;
`;
const Logo = styled.div`
  display: flex;
  cursor: pointer;
  height: 100%;
  align-items: center;
  margin-right: 57px;
  svg {
    display: block;
  }
  .headerLogo {
    margin-right: 10px;
  }
`;
const HeaderMainContents = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Structure = styled.div`
`;
const Title = styled.div`
  color: #fff;
  font-size: 27px;
  font-weight: bold;
  margin-right: 30px;
`;
const StructureTopContents = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const StructureBottomContents = styled.div``;
const Step = styled.div`
  color: #c8cfd7;
  position: relative;
  display: flex;
  .icons{
      display: flex;
  }
`;
const StepIcon = styled.div`
  cursor: pointer;
  font-size: 11px;
  margin-right: 40px;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: #37383A;
  &:focus{
      background:#4F80FF;
  }
  &:last-child{
      margin-right: 0;
  }
`
const PassThrough = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: flex;
  align-items: center;
  .pass{
      height: 3px;
      width: 100%;
      background: #37383A;
  }
`
const Desc = styled.div`
  color: #9ea6ad;
  font-size: 11px;
`;
const MenuItems = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    flex: 1;
    box-sizing: border-box;
    padding-top: 20px;
    padding-right: 59px;
    .leaving{
        cursor: pointer;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90px;
        height: 34px;
        background: #37383A;
        border-radius: 8px;
        span{
            color:#4F80FF;
            font-size: 11px;
            font-weight: bold;
        }
        svg{
            margin-right: 6px;
            display: block;
        }
    }
    .save{
        cursor: pointer;
        color: #fff;
        span{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            font-weight: bold;
            width: 52px;
            height: 34px;
            background: #37383A;
            border-radius: 8px;
        }
    }
`;

export default StoryHeader;
