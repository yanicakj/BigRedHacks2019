import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';
import Popup from "reactjs-popup";
import InteractiveMapDialog from './InteractiveMapDialog';


// to fit map into right side of screen
const mapStyles = {
  width: '78%',
  height: '78%'
};

// currUser is lke our 'session'
// we can tell who is logged in -- just mockup
let currUser = 'yanicakj@gmail.com';
let locationData = null;
var map = null;

// start of react component
export class MapContainer extends Component {

	constructor(props) {
		super(props);
		// this was test data, I editted the lat & lng values
		// I also added all of the other keys
		this.state = {
      dialogOpen: false,
      currentSelection: [],
			stores: [{lat: 42.453630, lng: -76.473844, details:'Tables for borrowing!', creatorName:'Jacob Yanicak', creatorEmail:'yanicakj@gmail.com', creatorPhone:'973-632-4337'},
							{latitude: 42.454632, longitude: -76.47188, details:'Tarps & sandbags available!', creatorName:'Alyssa Maquiling', creatorEmail:'alymaquiling@gmail.com', creatorPhone:'201-134-3421'},
							{latitude: 42.451628, longitude: -76.476845, details:'Heavy duty vehicle - Large pickup truck!', creatorName:'John Doe', creatorEmail:'jdoe@gmail.com', creatorPhone:'607-342-1231'},
							{latitude: 42.450630, longitude: -76.47381, details:'Extra generator for sale!', creatorName:'Jack Smith', creatorEmail:'jsmith@gmail.com', creatorPhone:'607-123-4445'},
							{latitude: 42.456635, longitude: -76.47182, details:'Satellite phone - must meet at my house!', creatorName:'Sara Jones', creatorEmail:'sjones@gmail.com', creatorPhone:'607-231-2134'},
							{latitude: 42.453637, longitude: -76.479844, details:'Firewood in case of emergency', creatorName:'Ashley Smith', creatorEmail:'asmith@gmail.com', creatorPhone:'607-564-4234'}]
    }
    this.handleMarkerClick = this.handleMarkerClick.bind(this);

	}

  handleMarkerClick(e) {
    const asset = e;
    this.setState({dialogOpen: true, currentSelection: e});
    
  }


	displayMarkers = () => {
		// this line looks like it iterates over each item in 'stores'
		return (
      this.state.stores.map((store, index) => (
      <Marker key={index} id={index} position={{
					lat: store.latitude,
					lng: store.longitude
			}}
			details={store.details}
			contact={store.creatorName}
			contactEmail={store.creatorEmail}
			contactPhone={store.creatorPhone}
			onClick={this.handleMarkerClick} />
    ))
    );
	}
// ------------The below was my attempt at adding popup listener to markers----------------------
			// --------------------------------------------------
			// var marker = new window.google.maps.Marker({
			// 	key:index,
			// 	position: {
			// 		lat:store.latitude,
			// 		lng: store.longitude
			// 	},
			// 	details: store.details,
			// 	contact: store.creatorName,
			// 	contactEmail: store.creatorEmail,
			// 	contactPhone: store.creatorPhone,
			// 	map: map
			// });
			// console.log('marker:');
			// console.log(marker);
			// var infowindow = new window.google.maps.InfoWindow({
			// 	content: store.details
			// });
			// window.google.maps.event.addListener(marker, 'click', function() {
			// 	infowindow.setContent(this.details);
			// 	infowindow.open(map, this);
			// });
			// --------------------------------------------------
			
			// this is mostly code provided, I added the details attribute & others
  render() {
    return (
       <div>
         <div>
         <h3>{this.state.currentSelection.details}</h3>
        </div>
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{
         lat: 42.453630,
         lng: -76.473844
        }}
      >
        {this.displayMarkers()}
			</Map>
      </div>
    );
  }
}


// to retrieve markers in user's zipcode from mongo
function getMarkersByUser(currUser, cb) {
	axios.get(`http://localhost:3001/maps/markers?email=` + currUser)
	.then(res => {
		// res.data will be all of the markers in this user's zipcode
		cb(res.data); return;
	})
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyARKhbuBC9KvE8iDGbcA1Lwdo-RTrsuOXA'
})(MapContainer);
