import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyARKhbuBC9KvE8iDGbcA1Lwdo'
})(MapContainer);

//import { Container, Typography } from '@material-ui/core';
//import GoogleMapReact from 'google-map-react';
//import { Map, GoogleApiWrapper } from 'google-maps-react';
//import ZipInput from './ZipInput';
//import SignUpHomepageButton from './SignUpHomepageButton';
//import ExistingAccountHomepageLink from './ExistingAccountHomepageLink';
// const InteractiveMap = () => (
//     <Container fixed>
//         <Typography variant='h4' align='center'>
//             <br />
//             Do you have any extra resources?
//         </Typography>
//         <br />
//         <br />
//         <div align='center'>
//         <Map
//           google={this.props.google}
//           zoom={8}
//           style={mapStyles}
//           initialCenter={{ lat: 47.444, lng: -122.176}}
//         />
//         </div>
        
//         <br />
//         <br />
//     </Container>
// );
// export default InteractiveMap;
// export default GoogleApiWrapper({
//     apiKey: 'TOKEN HERE'
//   })(MapContainer);