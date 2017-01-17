import $ from 'jquery';
import LocalStorage from './localstorage';

class Weather {

  constructor( store ) {
    this.apiKey = '67f1dca8f05faa04105ca2d317a06c41';
    this.store = store;
  }

  getWeather( lat, lon ) {
    if( this.store.getItem( 'weatherApiResponse' ) ) {
      let weatherApiResponse = this.store.getItem( 'weatherApiResponse' );
      this.printResults( JSON.parse( weatherApiResponse ) );

    } else {
      $.ajax({
          url: "http://api.openweathermap.org/data/2.5/weather",
          dataType: "jsonp",
          data: {
              q: "Paris,fr",
              APPID: this.apiKey,
              lat: lat,
              lon: lon,
              format: "json"
          },
          // Work with the response
          success: ( response ) => {
              this.store.setItem( 'weatherApiResponse', JSON.stringify( response ), 720000 ); // server response
              this.printResults( response );
          }
      });
    }
  }

  getLocation() {
    if (!navigator.geolocation){
      console.log( "Geolocation is not supported by your browser" );
      return;
    }
    navigator.geolocation.getCurrentPosition( this.handleSuccess, this.handleError );
  }

  handleSuccess( position ) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    weather.getWeather( latitude, longitude );
  }

  handleError() {
    console.log( "Unable to retrieve your location" );
  }

  printResults( jsonDatas ) {
    let html = '';
    html += 'Main: ' + jsonDatas.weather[0].description + '<br/>';
    html += 'Température: ' + jsonDatas.main.temp_max + 'F (max) / ' + jsonDatas.main.temp_min + 'F (min)<br/>';
    html += 'Humidité: ' + jsonDatas.main.humidity + '%<br/>';

    $('#weather').append( html );
  }

}

let store = new LocalStorage();
let weather = new Weather( store );
weather.getLocation();
