import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CreateSearchIcon } from "../../../icons/Main/CreateWorkspaceIcon";
import Create from "../../components/Create";
import Header from "../../components/Header";

const CreateContainer = (props) => {
  const id = props.match.params.id;

  const desc = () => {
    if (id == "workspace") {
      return "최근 작업한 XR 콘텐츠 목록입니다. 제작 완료한 콘텐츠를 다른 사람과 함께 즐기고 싶다면,  ‘Export to APP’ 버튼을 눌러 승인을 받으세요.";
    } else if (id == "completed") {
      return "승인된 콘텐츠를 활성화하면 앱에서 플레이가 가능합니다. 대기/반려된 콘텐츠는 목록에서 제거할 경우 Workspace로 이동합니다.";
    } else if (id == "deleted") {
      return "최근 1년 이내에 삭제한 콘텐츠 목록입니다. 삭제된 지 1년이 지난 콘텐츠는 자동으로 목록에서 사라지며, 이후 복구가 불가능합니다.  승인이 완료된 콘텐츠를 삭제할 경우, 복구하더라도 재승인이 필요합니다.";
    }
  };

//   CreateSearchIcon
  return (
    <Container>
      <Header />
      <CreateContents>
        <TopContents>
            <CreateMenu>
            <div className="workspace">
            <NavLink to={'/create/workspace'} activeClassName={'isActive'} >workspace</NavLink>
            </div>
            <div className="completed">
            <NavLink to={'/create/completed'} activeClassName={'isActive'} >completed</NavLink>
            </div>
            <div className="deleted">
            <NavLink to={'/create/deleted'} activeClassName={'isActive'} >deleted</NavLink>
            </div>
            </CreateMenu>
            <CreatePageSearchBox>
                <input />
                {CreateSearchIcon()}                
            </CreatePageSearchBox>
        </TopContents>
        <Title>
          <h1>{id}</h1>
          <p>{desc()}</p>
        </Title>
        <Create {...props} />
      </CreateContents>
    </Container>
  );
};

const Container = styled.div`
  background: #171717;
`;
const CreateContents = styled.div`
  padding-left: 72px;
  box-sizing: border-box;
  padding-top: 16px;
  padding-left: 122px;
`;
const Title = styled.div`
  color: #fff;
  margin-bottom: 55px;
  h1 {
    text-transform: capitalize;
    font-size: 27px;
    line-height: 41px;
    margin-bottom: 13px;
  }
  p {
    font-size: 11px;
    opacity: 0.7;
  }
`;
const CreateMenu = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 47px;
    a{
        color:#71777C;
        text-transform: capitalize;
        margin-right: 52px;
        font-size: 11px;
        text-decoration: none;
        padding:0 2px 4px 2px ;
        &.isActive{
            color: #4F80FF;
            border-bottom: solid 1.5px #4f81ff;
        }
    }
`;
const CreatePageSearchBox = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    padding-right: 10px;
    width: 164px;
    height: 35px;
    border-radius: 20px;
    background: #37383A;
    margin-right: 50px;
    input{
        width: 80%;
        background: #37383A;
        border: none;
        /* border:solid 1px #111; */
    }
    svg{
        cursor: pointer;
    }
`
const TopContents = styled.div`
    display: flex;
    justify-content: space-between;
`

export default CreateContainer;
