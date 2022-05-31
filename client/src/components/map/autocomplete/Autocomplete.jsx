import React, {useEffect, useState} from "react";
import usePlacesAutocomplete, {getGeocode, getLatLng,} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import classes from "./Autocomplete.module.css";
import {useJsApiLoader} from "@react-google-maps/api";
import {Form} from "react-bootstrap";

const API_KEY = process.env.REACT_APP_API_KEY

// const center = {lat: 50.064192, lng: -130.605469};
// Create a bounding box with sides ~10km away from the center point
// const defaultBounds = {
//     // north: center.lat + 0.1,
//     // south: center.lat - 0.1,
//     // east: center.lng + 0.1,
//     // west: center.lng - 0.1,
//     sw: {
//         lat: 55.28559774819662,
//         lng: 38.62394934082025
//     },
//     ne: {
//         lat: 56.1904,
//         lng: 36.4376
//     },
// };

export const Autocomplete = () => {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
    })
    const [address, setAddress] = useState('');

    const {
        ready,
        value,
        suggestions: {status, data},
        setValue,
        init,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            /* Define search scope here */
            location: {lat: () => 55.7522, lng: () => 37.6156},
            radius: 200 * 1000,
        },
        debounce: 200,
    });
    const ref = useOnclickOutside(() => {
        // When user clicks outside of the component, we can dismiss
        // the searched suggestions by calling this method
        clearSuggestions();
    });

    const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };

    const handleSelect =
        ({description}) =>
            () => {
                // When user selects a place, we can replace the keyword without request data from API
                // by setting the second parameter to "false"
                setValue(description, false);
                clearSuggestions();

                // Get latitude and longitude via utility functions
                getGeocode({
                    address: description,
                }).then((results) => {
                    try {
                        const {lat, lng} = getLatLng(results[0]);
                        setAddress(description)
                        console.log("📍 Coordinates: ", {lat, lng});
                        console.log("📍 Address: ", {address: description});
                        console.log('setAddress(description):', description)
                    } catch (error) {
                        console.log("😱 Error: ", error);
                    }
                });
            };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: {main_text, secondary_text},
            } = suggestion;

            return (
                <p key={place_id}
                   onClick={handleSelect(suggestion)}
                   onMouseOver={(e) =>
                       e.currentTarget.style.background = 'pink'}
                   onMouseOut={(e) =>
                       e.currentTarget.style.background = 'white'}
                >
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </p>
            );
        });


    useEffect(() => {
        if (isLoaded) {
            init()
        }
    }, [isLoaded, init]);

    return (
        <div className={classes.container} ref={ref}>
            <Form.Control
                className={classes.input}
                // надо передать адрес из состояния в инпут хотя в value то же самое лежит
                value={address}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Введите адрес"
            />
            {/* We can use the "status" to decide whether we should display the dropdown or not */}
            {status === "OK" &&
            <ul style={{
                height: "auto",
                backdropFilter: 'blur(10px)',
                position: "absolute",
                bottom: '50',
                left: 'auto',
                borderRadius: '10px'
            }}>{renderSuggestions()}</ul>}
        </div>
    );
};
