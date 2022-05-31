import React from 'react';
import {useDispatch} from "react-redux";
import {getAllPlaces} from "../../redux/thunk/placesThunk/placesThunk";
import './module.css'

const Filters = () => {
    const dispatch = useDispatch()

    const topFilter = () => {
        dispatch(getAllPlaces('top'))
    }

    const wifiFilter = () => {
        dispatch(getAllPlaces('wifi'))
    }

    const comfortFilter = () => {
        dispatch(getAllPlaces('comfort'))
    }

    const personalFilter = () => {
        dispatch(getAllPlaces('personal'))
    }

    const noiseFilter = () => {
        dispatch(getAllPlaces('noise'))
    }

    const atmosphereFilter = () => {
        dispatch(getAllPlaces('atmosphere'))
    }

    const freeFilter = () => {
        dispatch(getAllPlaces('free'))
    }

    return (
        <div className='logo-container'>
            <div className='logo'>
                <button className='filter-btn' onClick={topFilter}>
                    <span>
                        <img className='filter-logo' src="https://img.icons8.com/ios/100/000000/mountain.png"/>
                        <div>Лучшие</div>
                    </span>
                </button>
            </div>
            <div className='logo'>
                <button className='filter-btn' onClick={freeFilter}>
                    <span>
                        <img className='filter-logo' src="https://img.icons8.com/ios/100/000000/ruble.png"/>
                        <div>Бесплатные</div>
                    </span>
                </button>
            </div>
            <div className='logo'>
                <button className='filter-btn' onClick={wifiFilter}>
                    <span>
                        <img className='filter-logo' src="https://img.icons8.com/windows/96/000000/wifi--v1.png"/>
                        <div>ВайФай</div>
                    </span>
                </button>
            </div>
            <div className='logo'>
                <button className='filter-btn' onClick={comfortFilter}>
                    <span>
                        <img className='filter-logo'
                             src="https://img.icons8.com/external-outlines-amoghdesign/64/000000/external-comfort-home-appliances-outlines-amoghdesign.png"/>
                        <div>Комфорт</div>
                    </span>
                </button>
            </div>
            <div className='logo'>
                <button className='filter-btn' onClick={personalFilter}>
                    <span>
                        <img className='filter-logo' src="https://img.icons8.com/ios/100/000000/waitress.png"/>
                        <div>Персонал</div>
                    </span>
                </button>
            </div>
            <div className='logo'>
                <button className='filter-btn' onClick={noiseFilter}>
                    <span>
                        <img className='filter-logo' src="https://img.icons8.com/windows/96/000000/adware-free.png"/>
                        <div>шум</div>
                    </span>
                </button>
            </div>
            <div className='logo'>
                <button className='filter-btn' onClick={atmosphereFilter}>
                    <span>
                        <img className='filter-logo' src="https://img.icons8.com/small/96/000000/accordion.png"/>
                        <div>атмосфера</div>
                    </span>
                </button>
            </div>
        </div>
    );
};


export default Filters;
