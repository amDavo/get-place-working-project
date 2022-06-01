import React, {useEffect, useState} from "react";
import {GoogleMap, InfoWindow, Marker, useJsApiLoader} from "@react-google-maps/api";
import {defaultTheme} from "./Theme";
import classes from "./Map.module.css";
import {useDispatch, useSelector} from "react-redux";
import {THUNK_getCoordsFromAddress} from "../../redux/thunk/locationThunk/locationThunk";
import {ACTION_clearLocation} from "../../redux/actions/locationAction/locationAction";

const API_KEY = process.env.REACT_APP_API_KEY

const containerStyle = {
    width: '100%',
    height: '100%'
};

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

const Map = ({center, container, inputPlace, fullScreen, selectedPlaceMap}) => {
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [marker, setMarker] = useState(null);
    // const [markers, setMarkers] = useState([])
    // const [selectedPlace, setSelectedPlace] = useState(null)
    const list = useSelector(state => state.list)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ACTION_clearLocation())
        dispatch(THUNK_getCoordsFromAddress(list))
        console.log('list', list)
        // console.log('selectedPlace', selectedPlace)
    }, [])

    // console.log('list', list)
    // console.log({location})
    // console.log('selectedPlace', selectedPlace)

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
    })

    const handleClick = (event) => {
        if (inputPlace) {
            marker ? setMarker(null) : setMarker({
                position: {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng()
                }
            })
        }
        // if (fullScreen) {
        //     setMarkers((current) =>
        //         [...current, {lat: event.latLng.lat(), lng: event.latLng.lng(), time: new Date().toISOString()}])
        //     // map.panTo(event.latLng)
        //     // map.setZoom(14)
        // }
    }

    function showCardInfo(place) {
        console.log(place)
        return (
            <InfoWindow
                position={place.coords}
                // onCloseClick={() => setSelectedPlace(null)}
            >

                {/*<h1>{selectedPlace.place_name}</h1>*/}
                {/*<h2>{selectedPlace.address}</h2>*/}
                <h2>hello</h2>

            </InfoWindow>
        )
    }

    return isLoaded ? (
        <div className={container}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={map => setMap(map)}
                onUnmount={() => setMap(null)}
                options={defaultOptions}
                inputPlace={inputPlace}
                fullScreen={fullScreen}
                onClick={handleClick}
            >
                {list.length &&
                    list.map((place) =>
                        <Marker
                            key={place.id}
                            position={place.coords}
                            onClick={() => {
                                console.log('cliiiiiiiiiiicked')
                                // setSelectedPlace(position)
                                showCardInfo(place)
                            }}
                            icon={{
                                url: '/icon/laptop.svg',
                                scaledSize: new window.google.maps.Size(40, 40),
                                origin: new window.google.maps.Point(0, 0),
                                // anchor: new window.google.maps.Point(20, 20)
                            }}
                        />
                    )
                }
                {selectedPlaceMap ?
                    // <Marker position={}
                    <img
                        className={classes.locate}
                        src='/icon/location-arrow.svg'
                        alt='locate me'
                        onClick={() => {
                            navigator.geolocation.getCurrentPosition(position => {
                                map.panTo({
                                    lat: position.coords.latitude,
                                    lng: position.coords.longitude
                                })
                                map.setZoom(14)
                            })
                        }}
                    /> : null}
                {/*{selectedPlace ? (*/}
                {/*    <InfoWindow*/}
                {/*        position={{lat: selectedPlace.lat, lng: selectedPlace.lng}}*/}
                {/*        // onCloseClick={() => setSelectedPlace(null)}*/}
                {/*    >*/}
                {/*        <div>*/}
                {/*            /!*<h1>{selectedPlace.time}</h1>*!/*/}
                {/*            /!*<h2>{selectedPlace.time}</h2>*!/*/}
                {/*        </div>*/}
                {/*    </InfoWindow>) : null}*/}
                {/*{marker && <Marker*/}
                {/*    position={marker.position}*/}
                {/*    icon={{*/}
                {/*        url: '/icon/logo.svg',*/}
                {/*        scaledSize: new window.google.maps.Size(40, 40),*/}
                {/*        origin: new window.google.maps.Point(0, 0),*/}
                {/*        anchor: new window.google.maps.Point(15, 15)*/}
                {/*    }}*/}
                {/*/>}*/}
            </GoogleMap>
        </div>
    ) : <h1>Loading...</h1>
};

export default Map;
