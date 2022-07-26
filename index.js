import Procedural from './procedural-gl.js';

// Choose a DOM element into which the library should render
const container = document.getElementById( 'container' );

// Configure datasources
const datasource = {
  provider: 'maptiler',
  // To get a free key, use https://cloud.maptiler.com/account/?ref=procedural
  apiKey: 'GET_AN_API_KEY_FROM_MAPTILER'
};

// Initialize library and optionally add UI controls
Procedural.init( { container, datasource } );
Procedural.setRotationControlVisible( true );

// Load real-world location
const montBlanc = { latitude: 45.8326364, longitude: 6.8564201 };
Procedural.displayLocation( montBlanc );