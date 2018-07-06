import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import WeatherText from './WeatherText';

class CardsView extends Component {
	render() {
		return (
			<View style={styles.cardContainer}>
				<View
					style={[
						styles.frontCardView,
						{
							backgroundColor: this.props.backgroundColor
						}
					]}
				>
					<WeatherText />
				</View>
				<View
					style={[
						styles.middleCardView,
						{ backgroundColor: this.props.backgroundColor }
					]}
				/>
				<View
					style={[
						styles.backCardView,
						{ backgroundColor: this.props.backgroundColor }
					]}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	cardContainer: {
		flex: 1,
		alignItems: 'center',
		marginTop: 100
	},
	frontCardView: {
		width: 350,
		height: 350,
		position: 'absolute',
		zIndex: 3,
		top: 0,
		opacity: 1,
		transform: [{ scale: 1.0 }]
	},
	middleCardView: {
		width: 350,
		height: 350,
		position: 'absolute',
		zIndex: 2,
		top: 25,
		opacity: 0.7,
		transform: [{ scale: 0.9 }]
	},
	backCardView: {
		width: 350,
		height: 350,
		position: 'absolute',
		zIndex: 1,
		top: 50,
		opacity: 0.9,
		transform: [{ scale: 0.8 }]
	}
});

export default CardsView;
