import React, {useEffect, useState} from "react";
import {GoogleMap, InfoWindow, Marker, useJsApiLoader} from "@react-google-maps/api";
import {defaultTheme} from "./Theme";
import classes from "./Map.module.css";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY

const containerStyle = {
    width: '100%',
    height: '100%'
};

const defaultOptions = {
    panControl: true,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    rotateControl: false,
    disableDoubleClickZoom: false,
    keyboardShortcuts: false,
    scrollWheel: false,
    clickableIcons: true,
    fullscreenControl: false,
    styles: defaultTheme,
}

const Map = ({center, container, inputPlace, fullScreen, selectedPlaceMap}) => {
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    // const [marker, setMarker] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null)
    const allPlaces = useSelector(state => state.allPlaces)
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(ACTION_clearLocation())
        // dispatch(THUNK_getCoordsFromAddress(allPlaces))
        console.log('list', allPlaces)
        // console.log('selectedPlace', selectedPlace)
    }, [])

    // console.log('selectedPlace', selectedPlace)

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
    })

    const handleClick = (event) => {
        // if (inputPlace) {
        //     marker ? setMarker(null) : setMarker({
        //         position: {
        //             lat: event.latLng.lat(),
        //             lng: event.latLng.lng()
        //         }
        //     })
        // }
        // if (fullScreen) {
        //     setMarkers((current) =>
        //         [...current, {lat: event.latLng.lat(), lng: event.latLng.lng(), time: new Date().toISOString()}])
        //     // map.panTo(event.latLng)
        //     // map.setZoom(14)
        // }
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
                {allPlaces.length &&
                    allPlaces.map((place) =>
                        <Marker
                            key={place.id}
                            position={place.coords}
                            onClick={() => {
                                console.log('cliiiiiiiiiiicked', place)
                                // setSelectedPlace(position)
                                setSelectedPlace(place)
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
                {map ?
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
                                map.setZoom(12)
                            })
                        }}
                    /> : null}
                {selectedPlace ? (
                    <InfoWindow
                        position={selectedPlace.coords}
                        onCloseClick={() => setSelectedPlace(null)}
                    >
                        <Link to={`/location/${selectedPlace.id}`}
                              style={{textDecoration: "none", color: "black", margin: '10px'}}>
                            <div>
                                <h5>{selectedPlace.place_name}</h5>
                                <p>{selectedPlace.location}</p>
                                <img style={{width: '200px'}} src={`http://localhost:8080/images/${selectedPlace.img}`}
                                     alt={selectedPlace.name + ' img'}/>
                            </div>
                        </Link>
                    </InfoWindow>) : null}
            </GoogleMap>
        </div>
    ) : <h1>Loading...</h1>
};

export default Map;
