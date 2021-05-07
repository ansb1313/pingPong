import React from 'react'
import styled from 'styled-components'
import {MoreButtonIcon} from '../../../../icons/Main/CreateCompletedIcon'
import CompletedButtonEffect from './CompletedButtonEffect';

const ComplatedMainItem = ({data}) => {   
    return(
        <Container>
            <CompletedItem>
                <ImageBox>
                    <img src={data.background} alt=""/>
                </ImageBox>
                <ItemArea>
                    <h1>
                        {data.title}
                    </h1>
                    <span className={"type"}>
                        {data.type}
                    </span>
                    <p className={'desc'}>
                        {data.desc}
                    </p>
                    <CheckButton>
                        <div className="range"></div>
                        <CompletedButtonEffect/>
                    </CheckButton>
                </ItemArea>
                <MoreButton>
                    {MoreButtonIcon()}
                </MoreButton>
            </CompletedItem>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    margin-right: 20px;
`
const CompletedItem = styled.div`
    padding:13px;
    box-sizing:border-box;
    width: 716px;
    height: 188px;
    border-radius: 20px;
    background: #37383A;
    display: flex;
    align-items: center;
    overflow: hidden;
`
const ImageBox = styled.div`
    width: 228px;
    height: 162px;
    border-radius: 16px;
    margin-right: 30px;
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ItemArea = styled.div`
    box-sizing: border-box;
    padding-top: 17px;
    height: 100%;
    flex: 1;
    h1{
        font-size: 15px;
        line-height: 18px;
        margin-bottom: 10px;
        opacity: 0.8;
    }
    .type{
        color:#fff;
        opacity: 0.45;
        font-size: 9px;
        margin-bottom: 10px;
        display: block;
    }
    .desc{
        font-size: 11px;
        color:#fff;
        opacity: 0.8;
    }
`
const MoreButton = styled.div`
    top:20px;
    right: 28px;
    position: absolute;
`
const CheckButton = styled.div`
    margin-top: 29px;
    position: relative;
    display: flex;
    align-items: center;
    width: 34px;
    justify-content: center;
    height:30px;
    .range{
        position: absolute;
        width: 34px;
        height: 10px;
        background: #71777C;
        border-radius: 30px;
    }
`

export default ComplatedMainItem