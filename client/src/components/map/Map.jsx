import React, {useEffect, useState} from "react";
import {GoogleMap, InfoWindow, Marker, useJsApiLoader} from "@react-google-maps/api";
import {defaultTheme} from "./Theme";
import classes from "./Map.module.css";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {THUNK_getCoordsFromAddress} from "../../redux/thunk/locationThunk/locationThunk";

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
    disableDoubleClickZoom: true,
    keyboardShortcuts: false,
    scrollWheel: false,
    clickableIcons: true,
    fullscreenControl: false,
    styles: defaultTheme,
}

const Map = ({center, container, inputPlace, fullScreen, selectedPlaceMap}) => {
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [marker, setMarker] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null)
    const allPlaces = useSelector(state => state.allPlaces)
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(THUNK_getCoordsFromAddress(allPlaces))
        setMarker(allPlaces?.filter(place => place.id === +id))
    }, [])


    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
    })

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
            >
                {fullScreen ?
                    allPlaces.length &&
                    allPlaces.map((place) =>
                        <Marker
                            key={place.id}
                            position={place.coords}
                            onClick={() => {
                                setSelectedPlace(place)
                            }}
                            icon={{
                                url: '/icon/laptop.png',
                                scaledSize: new window.google.maps.Size(60, 60),
                                origin: new window.google.maps.Point(0, 0),
                                // anchor: new window.google.maps.Point(20, 20)
                            }}
                        />
                    ) : null
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
                            <Card sx={{maxWidth: 200}}
                                  variant="outlined"
                                  style={{position: 'relative', zIndex: 10000, border: '10px white'}}>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image={`http://localhost:8080/images/${selectedPlace.img}`}
                                    alt={selectedPlace.name + ' img'}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {selectedPlace.place_name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {selectedPlace.location}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </InfoWindow>) : null}
                {selectedPlaceMap ? (
                    <Marker position={marker[0].coords}/>
                ) : null}
            </GoogleMap>
        </div>
    ) : <h1>Loading...</h1>
};

export default Map;
