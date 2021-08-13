import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



// class SimpleMap extends Component {
//     static defaultProps = {
//         center: {
//             lat: 59.95,
//             lng: 30.33
//         },
//         zoom: 11
//     };

//     render() {
//         return (
//             // Important! Always set the container height explicitly
//             <div style={{ height: '100vh', width: '100%' }}>
//                 <GoogleMapReact
//                     bootstrapURLKeys={{ key: "AIzaSyBS03vrPecVdQPL69tU-wl_4nedBvRYcDk" }}
//                     defaultCenter={this.props.center}
//                     defaultZoom={this.props.zoom}
//                 >
//                     <AnyReactComponent
//                         lat={59.955413}
//                         lng={30.337844}
//                         text="My Marker"
//                     />
//                 </GoogleMapReact>
//             </div>
//         );
//     }
// }

const AnyReactComponent = ({ text }) => <div style={{ color: "red", fontSize: "20px" }}>{text}</div>;


export const SimpleMap = ({ detail }) => {

    const center = { lat: Number(detail.roomLati), lng: Number(detail.roomLongi) };
    return (
        <div style={{ height: '500px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBS03vrPecVdQPL69tU-wl_4nedBvRYcDk" }}
                defaultCenter={center}
                defaultZoom={14}
            >
                <AnyReactComponent
                    lat={center.lat}
                    lng={center.lng}
                    text="marker"
                />
            </GoogleMapReact>
        </div>
    );
}
export default SimpleMap;
