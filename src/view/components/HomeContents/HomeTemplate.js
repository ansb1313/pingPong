import React from 'react'
import styled from 'styled-components'
import { MainNoticeMenuWall } from '../../../icons/Main/MainIcon'
import Header from '../Header'

const HomeTemplate = () => {
    
    return(
        <Container>
            <Header/>
            <DragIcon>
                <div className="ellipse"></div>
            </DragIcon>
            <NoticeMenu>
                <ul>
                    <li><a href="#!">이용약관</a></li>
                    <li><a href="#!">개인정보처리방침</a></li>
                    <li><a href="#!">문의하기</a></li>
                </ul>
                <p>03150 서울시 종로구 삼봉로 81 두산위브파빌리온 826호 / 556-81-01006 / 서승원(Edward seo) / pp@pingpong.house / 02-6953-7758</p>
            </NoticeMenu>
        </Container>
    )
}

const Container = styled.div`
    position:fixed;
    z-index: 2200;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`
const DragIcon = styled.div`
    position: fixed;
    width: 28px;
    height: 52px;
    border: solid 1px #fff;
    border-radius: 22px;
    left: 50%;
    bottom: 110px;
    transform: translateX(0%);
    display: flex;
    justify-content: center;
    align-items: center;
    .ellipse{
        width: 8px;
        height: 8px;
        border: solid 1px #fff;
        border-radius: 100%;
    }
`
const NoticeMenu = styled.div`
    position: fixed;
    bottom: 30px;
    width: 100%;
    text-align: center;
   ul{
       display: flex;
       justify-content: center;
       margin-bottom: 5px;
    li{
        margin-left: 20px;
        position: relative;
        a{
        color:#fff;
        text-decoration: none;
        font-size: 9px;
        }
        &::after{
            position: absolute;
            width: 1px;
            height: 10px;
            right: -10px;
            bottom: 1px;
            content: "";
            display: block;
            background: #71777C;
        }
        &:last-child{
            &::after{
                display: none;
            }
        }
    }   

   }
   p{
       color:#9EA6AD;
       font-size:9px;
   }
`

export default HomeTemplate