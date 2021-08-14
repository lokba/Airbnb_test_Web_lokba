import Geocode from 'react-geocode';

Geocode.setApiKey("AIzaSyBS03vrPecVdQPL69tU-wl_4nedBvRYcDk");
Geocode.setLanguage('en');
Geocode.setRegion('es');
Geocode.enableDebug();

const GoogleMap = (currentAddr) => {
    return Geocode.fromAddress(currentAddr)
        .then(response => {
            const { lat, lng } = response.results[0].geometry.location;
            return { lat, lng };
        })
        .catch(err => console.log(err));
};

export default GoogleMap;