import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{ color: "red", fontSize: "20px", }}>{text}</div>;


export const SimpleMap = ({ detail, list }) => {
    const center = { lat: Number(detail[0].roomLati), lng: Number(detail[0].roomLongi) };
    return (
        <>
            {
                list ?
                    (
                        <div style={{ height: '100%', width: '100%', position: "fixed" }} >
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyBS03vrPecVdQPL69tU-wl_4nedBvRYcDk" }}
                                defaultCenter={center}
                                defaultZoom={7}
                            >
                                {
                                    detail.map(v => (
                                        <AnyReactComponent
                                            lat={v.roomLati}
                                            lng={v.roomLongi}
                                            text="marker"
                                        />
                                    ))
                                }

                            </GoogleMapReact>
                        </div >
                    )
                    :
                    (
                        <div style={{ height: '500px', width: '100%' }} >
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyBS03vrPecVdQPL69tU-wl_4nedBvRYcDk" }}
                                defaultCenter={center}
                                defaultZoom={14}
                            >
                                {
                                    detail.map(v => (
                                        <AnyReactComponent
                                            lat={v.roomLati}
                                            lng={v.roomLongi}
                                            text="marker"
                                        />
                                    ))
                                }

                            </GoogleMapReact>
                        </div >)
            }
        </>
    );
}
export default SimpleMap;
