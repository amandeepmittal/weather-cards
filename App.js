import React from 'react';
import { StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import CardStackView from 'react-native-cardstack-view';

import SearchInput from './components/SearchInput';
import WeatherText from './components/WeatherText';

export default class App extends React.Component {
	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<SearchInput />
				<View style={styles.cards}>
					<CardStackView backgroundColor="#ebebeb">
						<WeatherText />
					</CardStackView>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	cards: {
		flex: 2
	}
});
