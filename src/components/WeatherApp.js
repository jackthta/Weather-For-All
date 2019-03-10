import apiKeys from '../pvt/apiKeys';
import React from 'react';
import Header from './Header';
import Form from './Form';
import Week from './Week';

export default class WeatherApp extends React.Component {
    state = {
        forecast : undefined,
        maxTemp: undefined,
        minTemp: undefined,
        city: undefined
    };

    //Calculate long,lat given the city from the input via Google's Geocode API
    calculateLocation = (city) => {
        const GEOCODE_API_KEY = apiKeys.GoogleGeocodeAPI;

        const proxy = "https://cors-anywhere.herokuapp.com/";
        let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GEOCODE_API_KEY}`;

        fetch(proxy + url)
        .then((res) => {
            return res.json();
        })
        .then((fetched) => {
            const location = fetched.results[0].geometry.location;
            const locationCity = fetched.results[0].address_components[0].long_name;
            this.setState(() => ({ city: locationCity }));
            this.mountWeatherInfo(location.lng, location.lat);
        });
    }

    //Fetch data from Dark Sky API
    mountWeatherInfo = (long, lat) => {
        const DARK_SKY_API_KEY = apiKeys.DarkSkyAPI;

        const proxy = "https://cors-anywhere.herokuapp.com/";
        const url = `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${lat},${long}?exclude=currently,minutely,hourly,alerts,flags&lang=en&units=auto`;

        fetch(proxy + url)
        .then((response) => {
            return response.json();
        })
        .then((fetched) => {
            const forecast = fetched.daily.data.map((result) => result.icon);
            const maxTemp = fetched.daily.data.map((result) => result.apparentTemperatureMax);
            const minTemp = fetched.daily.data.map((result) => result.apparentTemperatureMin);
            this.setState(() => {
                return {
                    forecast,
                    maxTemp,
                    minTemp
                };
            });
        });
    }

    render = () => {
        return (
            <div className="parent-container">
                <Header />
                <Form calculateLocation={this.calculateLocation} />
                {this.state.forecast && <Week city={this.state.city} forecast={this.state.forecast} maxTemp={this.state.maxTemp} minTemp={this.state.minTemp} />}
            </div>
        );
    }
}