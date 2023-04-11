import React from 'react'
import GoogleMapReact from 'google-map-react';
import { paper,Typography,useMediaQuery } from '@material-ui/core';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutLined';

import useStyles from './style'




function Map() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  const coordinates = {lat: 0, lng: 0};
  return (
    <div>
     <div className={classes.mapContainer}>
       <GoogleMapReact
        bootstrapeURLKeys={{key:'AIzaSyAr71GTWPFsXJXleQ7Ni64nJWaP8TeCuZs'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={''}

        //if we click on user on map
        onChildClick={''}
        >

        </GoogleMapReact>
     </div>
    </div>
  )
}

export default Map
