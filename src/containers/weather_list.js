import React, { Component } from 'react';
import { connect } from 'react-redux';
import SparklineChart from '../components/sparkline-chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td>
                    <SparklineChart data={temps} color="orange" units="K" />
                </td>
                <td>
                    <SparklineChart data={pressure} color="green" units="hPa" />
                </td>
                <td>
                    <SparklineChart data={humidity} color="black" units="%" />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                  <tr>
                    <th>City</th>
                    <th>Temprature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                  </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);