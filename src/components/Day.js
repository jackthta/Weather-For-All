import React from 'react';

//SVG icons
import clearDay from '../style/images/svg/clear-day.svg';
import clearNight from '../style/images/svg/clear-night.svg';
import cloudy from '../style/images/svg/cloudy.svg';
import fog from '../style/images/svg/fog.svg';
import partlyCloudyDay from '../style/images/svg/partly-cloudy-day.svg';
import partlyCloudyNight from '../style/images/svg/partly-cloudy-night.svg';
import rain from '../style/images/svg/rain.svg';
import sleet from '../style/images/svg/sleet.svg';
import snow from '../style/images/svg/snow.svg';
import wind from '../style/images/svg/wind.svg';

const dict = {
    "clear-day": clearDay,
    "clear-night": clearNight,
    "cloudy" : cloudy,
    "fog" : fog,
    "partly-cloudy-day" : partlyCloudyDay,
    "partly-cloudy-night" : partlyCloudyNight,
    "rain" : rain,
    "sleet" : sleet,
    "snow" : snow,
    "wind" : wind
};

export default class Day extends React.Component {
    state = {
        isFahrenheit : true,
        avgTemp: this.props.avgTemp
    };

    onSwitchDegrees = (temp) => {
        let convertedTemp;
        if (this.state.isFahrenheit) {
            //Convert F to C
            convertedTemp = parseInt((((temp - 32) * 5) / 9));
        } else {
            //Convert C to F
            convertedTemp = parseInt((((temp * 9) / 5) + 32));
        }

        this.setState((prevState) => {
            return {
                isFahrenheit : !prevState.isFahrenheit,
                avgTemp: convertedTemp
            };
        });
    }

    render = (props) => {
        return (
            <div className="day-container">
                <p className="day">{this.props.day}</p>
                <img className="forecast-icon" src={dict[this.props.forecast]} />
                <p className="forecast">{this.props.forecast.replace(/-/g, "\ ")}</p>
                <button className="avg-temp__button" onClick={() => {
                    this.onSwitchDegrees(this.state.avgTemp);
                }}>
                    <p className="avg-temp">{this.state.avgTemp} &deg;{this.state.isFahrenheit ? 'F' : 'C'}</p>
                </button>
            </div>
        );
    }
}