import {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

const Map = ({eventData, center, zoom}) => {
    
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map( ev => {
            return <LocationMarker lat={ev[0]} lng={ev[1]}/>
    })
    
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC6oKEVuifyRjKmr3T1pT2_cb-0Va6a7FY"}}
                defaultCenter={center}
                defaultZoom = { zoom }
            >
                {markers}
                </GoogleMapReact>
                {locationInfo && <LocationInfoBox info={locationInfo}/>}
        </div>
    );
}

Map.defaultProps = {
    center: {
        lat: 40.676789,
        lng: -73.921611
    },
    zoom: 15

}

export default Map;
