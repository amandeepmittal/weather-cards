import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Platform,
	ActivityIndicator
} from 'react-native';

class WeatherText extends Component {
	render() {
		const {
			location,
			error,
			loading,
			weather,
			temperature,
			humidity,
			minTemp,
			maxTemp,
			windSpeed
		} = this.props;

		return (
			<View>
				<View style={styles.spinner}>
					<ActivityIndicator animating={loading} color="#000fff" size="large" />
				</View>

				{!loading && (
					<View>
						{error && (
							<Text style={[styles.textStyle, styles.textErrorStyle]}>
								Could not load weather at this time.
							</Text>
						)}
						{!error && (
							<View>
								<Text
									style={[
										styles.textTop,
										styles.textCityStyle,
										styles.textStyle
									]}
								>
									{location}
									{'\n'}
									<Text style={styles.weather}>{weather.toUpperCase()}</Text>
								</Text>
								<Text style={[styles.textMiddle, styles.textStyle]}>
									{`${Math.round(temperature)}°`}
									{'\n'}
									<Text style={[styles.textStyle, styles.tempRange]}>
										{`${Math.round(minTemp)}°`} - {`${Math.round(maxTemp)}°`}
									</Text>
								</Text>
								<Text style={[styles.textBottom, styles.textStyle]}>
									Humidity Percentage: {humidity}%
									{'\n'}
									Wind: {(windSpeed * 1.609344).toPrecision(2)} km/h
								</Text>
							</View>
						)}
					</View>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	spinner: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	textStyle: {
		fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto'
	},
	textErrorStyle: {
		padding: 80,
		alignSelf: 'center',
		fontSize: 32,
		fontWeight: '200'
	},

	textTop: {
		paddingTop: 10,
		textAlign: 'left',
		fontSize: 32
	},
	textCityStyle: {
		fontSize: 28,
		paddingLeft: 10,
		fontWeight: '300'
	},
	weather: {
		fontSize: 18
	},
	textMiddle: {
		marginTop: 40,
		textAlign: 'center',
		fontSize: 64
	},
	tempRange: {
		fontSize: 16
	},
	textBottom: {
		marginTop: 40,
		textAlign: 'right',
		fontSize: 18,
		paddingRight: 10
	}
});

export default WeatherText;
