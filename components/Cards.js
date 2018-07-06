import React, { Component } from 'react';
import { View, Text } from 'react-native';

const colors = ['#5C6BC0', '#009688', '#F44336'];

export default class CardsView extends Component {
	render() {
		return (
			<View>
				// parent view
				<View // last card
					style={{
						width: 300,
						height: 150,
						position: 'absolute',
						zIndex: 1,
						bottom: 40,
						backgroundColor: colors[2], // Red
						opacity: 0.3,
						transform: [{ scale: 0.8 }]
					}}
				/>
				<View // second card
					style={{
						width: 300,
						height: 150,
						position: 'absolute',
						zIndex: 2,
						bottom: 20,
						backgroundColor: colors[1], // Green
						opacity: 0.6,
						transform: [{ scale: 0.9 }]
					}}
				/>
				<View // frontmost card
					style={{
						width: 300,
						height: 150,
						position: 'absolute',
						zIndex: 3,
						bottom: 0,
						backgroundColor: colors[0], // Blue
						opacity: 1,
						transform: [{ scale: 1.0 }]
					}}
				/>
			</View>
		);
	}
}
