import React from 'react';
import Day from './Day';

const dayDict = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
};

export default class Week extends React.Component {
    state = {
        week: []
    };

     //Fill state's starting week array with correct days
     fillWeek = () => {
        //Get user's present day
        let startDay = new Date().getDay();
        let week = [dayDict[startDay]];
        for (let i = 0, nextDay; i < 7; i++, startDay++) {
            nextDay = (startDay + 1) % 7;
            week.push(dayDict[nextDay]);
        }
        this.setState(() => ({week}));
    }

    render = (props) => {
        return (
            <div className="week">
                <h2 className="week__title center">{this.props.city}</h2>
                <div className="week-container">
                {
                    this.state.week.map((day, i) => {
                        return <Day key={i} day={day} forecast={this.props.forecast[i]} maxTemp={this.props.maxTemp[i]} minTemp={this.props.minTemp[i]} avgTemp={parseInt(((this.props.maxTemp[i] + this.props.minTemp[i]) / 2))} />
                    })
                }
                </div>
            </div>
        );
    }

    componentDidMount = () => {
        this.fillWeek();
    }
}