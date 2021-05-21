import React from 'react';

const LocationInfoBox = ({info}) => {
    return (
        <div className="location-info">
            <h2>Location Info</h2>
            <ul>
                <li>Latitude: <strong>{ info.lat }</strong></li>
                <li>Longitude: <strong> {info.lng} </strong></li>
            </ul>
        </div>
    );
}

export default LocationInfoBox;