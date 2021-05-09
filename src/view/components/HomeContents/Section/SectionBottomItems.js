import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styled from 'styled-components'

const SectionBottomItems = ({verticalValue ,risingItemLocation}) => {

    return(
        <Container>
             <RisingItems className={cn('risingItems',{risingEffect:risingItemLocation})}>
                <DragIcon className={cn({isActive:verticalValue === 200})}>
                    <div className="ellipse"></div>
                </DragIcon>
                <NoticeMenu className={cn({isActive:verticalValue === 200})}>
                    <ul>
                        <li><a href="#!">이용약관</a></li>
                        <li><a href="#!">개인정보처리방침</a></li>
                        <li><a href="#!">문의하기</a></li>
                    </ul>
                    <p>03150 서울시 종로구 삼봉로 81 두산위브파빌리온 826호 / 556-81-01006 / 서승원(Edward seo) / pp@pingpong.house / 02-6953-7758</p>
                </NoticeMenu>
            </RisingItems>
        </Container>
    )
}

const Container = styled.div`

`
const RisingItems = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    transition: all 0.3s;

    transform: translateY(120px);
    opacity: 0;
    
    &.risingEffect{
        transform: translateY(0px);
    opacity: 1;
    }

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
    &.isActive{
        border: solid 1px #111;
        .ellipse{
        border: solid 1px #111;
        }
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
   &.isActive{
       transition:all 0.2s;
       p{
           color:#37383A;
       }
       ul{
           li{
               a{
                   color:#171717;
               }
           }
       }
   }
`

export default SectionBottomItems