import React from "react";
import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";
import {defaultTheme} from "./Theme";

const API_KEY = process.env.REACT_APP_API_KEY

const containerStyle = {
    width: '100%',
    height: '100%'
};

// const center = {
//     lat: 55.7522,
//     lng: 37.6156
// };

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    rotateControl: false,
    disableDoubleClickZoom: false,
    keyboardShortcuts: false,
    scrollWheel: true,
    clickableIcons: true,
    fullscreenControl: false,
    styles: defaultTheme,
}

const Map = ({center, container, modal}) => {
    const mapRef = React.useRef(undefined);

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
    })

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])

    return isLoaded ? (
        <div className={container}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <Marker position={{lng: 37.6156, lat: 55.7522}}/>
                <></>
            </GoogleMap>
        </div>
    ) : <h1>Loading...</h1>
};

export default Map;
