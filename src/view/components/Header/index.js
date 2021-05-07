import React from "react";
import styled from "styled-components";
import { NavLink,} from "react-router-dom";
import {CreateButton, ExploreButton, HomeIcon, MainLogo, UserIcon} from "../../../icons/Main/MainIcon";
import HeaderEffectTemplate from "./HeaderEffectTemplate";

const Header = () => {

  return (
    <Container>
      <Logo>{MainLogo()}</Logo>
      <MenuItem>
      <HeaderEffectTemplate>
        <Home to={'/'}  activeClassName={'isActive'} exact={true}>{HomeIcon()}</Home>
      </HeaderEffectTemplate>
      <HeaderEffectTemplate>
      <Create to={'/create/workspace'} activeClassName={'isActive'} exact={true}>{CreateButton()}</Create>
      </HeaderEffectTemplate>
      <HeaderEffectTemplate>
      <Explore to={'/'} activeClassName={'isActive'} exact={true}>{ExploreButton()}</Explore>
      </HeaderEffectTemplate>
      </MenuItem>
      <Login>
        <LoginUserIcon>
            {UserIcon()}
            <div className="ellpse"></div>
        </LoginUserIcon>
        <LoginButton>
          <span>
              Log in
          </span>
        </LoginButton>
      </Login>
    </Container>
  );
};

const Container = styled.div`
  z-index: 2500;
  box-sizing: border-box;
  padding-top: 32px;
  padding-bottom: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 72px;
  height: 100vh;
  position: fixed;
  background: #171717;
  h1 {
    color: #fff;
  }
`;
const Logo = styled.div`
  margin-bottom: 80px;
`;
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  a {
    margin-bottom: 39px;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    cursor: pointer;
  }
`;
const Home = styled(NavLink)`
     &.isActive {
      background: #37383a;
    }
`
const Create = styled(NavLink)`
`
const Explore = styled(NavLink)`
`
const Login = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    bottom: 36px;
`;
const LoginUserIcon = styled.div`
    margin-bottom: 25px;
    position: relative;
    cursor: pointer;
    .ellpse{
        position: absolute;
        width: 6px;
        height: 6px;
        background: #61CC9f;
        border-radius: 100%;
        right: 0;
        top: 0;
        transform: translateX(100%);
    }
`;
const LoginButton = styled.div`
    width: 58px;
    height: 30px;
    background: #4F80FF;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    span{
        font-size: 11px;
        color: #fff;
    }
`;

export default Header;
