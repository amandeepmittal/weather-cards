import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardStackView from 'react-native-cardstack-view';

import WeatherText from './components/WeatherText';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.searchBar}>
					<Text> Search</Text>
				</View>
				<View style={styles.cards}>
					<CardStackView backgroundColor="#ebebeb">
						<WeatherText />
					</CardStackView>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	searchBar: {
		flex: 1,
		paddingTop: 50
	},
	cards: {
		flex: 2
	}
});
