import React from 'react';
import styled from 'styled-components';
import MainContainer from '../../container/Main/MainContainer';

const Main = (props) => {

    return(

        <Container>
            <MainContainer/>
        </Container>

    )

}

const Container = styled.div`
  background: rgba(249,249,249);
  flex: 1;
`

export default Main;