import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import styled from 'styled-components'

const MapboxContainer = () => {
    
    const MAP_TOKEN = 'pk.eyJ1IjoiYW5zYjEzMTMiLCJhIjoiY2tvamxnZTM2MWR1ODJ1cDF3azc3cDBqbyJ9.EULYPe-SkyiLGS_xTfb_dA';

    const [viewport, setViewport] = useState({
        latitude: 37.532600,
        longitude: 127.024612,
        width: '100vw',
        height: '100vh',
        zoom: 12
    })

    return(
        <Container className={'Mapbox'}>
            <ReactMapGL 
                {...viewport}
                mapboxApiAccessToken = {MAP_TOKEN}
            >

            </ReactMapGL>
            
        </Container>
    )
}

const Container = styled.div`

`

export default MapboxContainer