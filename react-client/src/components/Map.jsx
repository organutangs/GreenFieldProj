import React from "react";
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
class Map extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    };
  }

  render(){
   const markers = this.props.markers.map(function(obj,index){
     var markerObj = {};
      markerObj.position.lat = obj.latitude;
      markerObj.position.lng = obj.longitude;
      markerObj.key = index;
      console.log("markerObj",markerObj);
       //setup user & midpoint markers
       if(index === 0) {
          markerObj.label = 'MidPoint';
          markerObj.icon = './components/images/midPointIcon.png';
       } else if(index === 1) {
          markerObj.label = 'user1';
          markerObj.icon = './components/images/personIconG.png';       
       } else if(index === 2) {
          markerObj.label = 'user1';
          markerObj.icon = './components/images/personIconG.png';  
       }
      console.log('MARKERS',markers);
      return markerObj;
    }); 
   
    return(
      <GoogleMap
        defaultZoom={15}
        defaultCenter={this.props.center}>
        {markers.map((marker, index) => {
          console.log('marker',marker);
          return( 
          <Marker 
            position={marker.position}
            icon={marker.icon ? marker.icon:null} 
            label={marker.label ? marker.label:null}
            key={marker.index}      
          />
          )
          }
        )}
      </GoogleMap>
    )
  }
}
//higher functionality component
export default withGoogleMap(Map);