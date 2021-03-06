import React from 'react'
// import ReactDOM from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import './eventMap.css'



class EventMap extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     lat: 49.460983,
     lng: 11.061859,
     zoom: 3.5
   }
 }

 render() {
   const position = [this.state.lat, this.state.lng];
   let allEventPopup;
   return (
     <Map center={position} zoom={this.state.zoom}>
       <TileLayer
         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
         url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
       />
       {allEventPopup = this.props.allEvents.map(event =>
         <Marker position={[event.event_latitude, event.event_longitude]}>
           <Popup>
             <div>
             <p>{event.event_title}</p>
             <p>{event.event_date}</p>
             <p>{event.event_venue}</p>
             <img src={event.event_flag}/>
              <div id="heart">
                <button onClick={this.props.handleAddButtonClick} id="heart-button" value={JSON.stringify(event)}>.</button>
              </div>
              
             </div>
           </Popup>
         </Marker>
       )}
   </Map>
   );
 }
}

export default EventMap;
