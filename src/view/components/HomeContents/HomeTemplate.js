import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import { FaceBookIcon, InstagramIcon } from '../../../icons/Main/MainIcon'
import SectionBottomItems from './Section/SectionBottomItems'

const HomeTemplate = (props) => {
    
    return(
        <Container >
            <Header/>
            <SnsIcon>
                <div className="facebook">
                    {FaceBookIcon()}
                </div>
                <div className="instagram">
                    {InstagramIcon()}
                </div>
            </SnsIcon>
        </Container>
    )
}

const Container = styled.div`
    position:fixed;
    z-index: 2200;
`
const SnsIcon = styled.div`
    position: fixed;
    right:50px;
    top:30px;
    display: flex;
    .instagram{
        margin-left: 28px;
    }
`
const RisingItems = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    transition: all 0.4s;

    transform: translateY(100px);
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



export default HomeTemplate