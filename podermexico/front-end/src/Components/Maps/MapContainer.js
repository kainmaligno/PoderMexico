import "mapbox-gl/dist/mapbox-gl.css";
import React, { Component } from "react";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2FsZW1tMjQwNyIsImEiOiJjam0xOXBxNGcwanJxM3ZwbmsxbHQ3eGI5In0.BOK45dHy4VQyEw3NBBluTA';

class MapContainer extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 19.397776,
      longitude: -99.17162,
      zoom: 11
    }  //
  };

  mapRef = React.createRef();

  componentDidMount() {
    window.addEventListener("resize", this._resize.bind(this));
    this._resize();
  }

  _resize() {
    this._onViewportChange({
      width: 600,//window.innerWidth,
      height: 400//window.innerHeight
    });
  }

  _onViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
    console.log(this.state)
  };

  render() {
    return (
      <MapGL
        ref={this.mapRef}
        {...this.state.viewport}
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
      
        <Geocoder mapRef={this.mapRef} onViewportChange={this._onViewportChange} mapboxApiAccessToken={MAPBOX_TOKEN} />
      </MapGL>
    
    );
  }
}

export default MapContainer;