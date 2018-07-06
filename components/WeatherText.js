import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

class WeatherText extends Component {
	render() {
		return (
			<View>
				<Text style={[styles.textTop, styles.textStyle]}>Monday</Text>
				<Text style={[styles.textMiddle, styles.textStyle]}>24 °</Text>
				<Text style={[styles.textBottom, styles.textStyle]}>
					Humidity Percentage: 10 %
					{'\n'}
					Weather Type: Cloudy
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	textStyle: {
		padding: 10,
		fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto'
	},
	textTop: {
		textAlign: 'left',
		fontSize: 32
	},
	textMiddle: {
		marginTop: 60,
		textAlign: 'center',
		fontSize: 64
	},
	textBottom: {
		marginTop: 40,
		textAlign: 'right',
		fontSize: 18
	}
});

export default WeatherText;
