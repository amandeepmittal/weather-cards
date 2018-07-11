import React from 'react';
import {
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	View
} from 'react-native';
import CardStackView from 'react-native-cardstack-view';

import WeatherText from './components/WeatherText';

export default class App extends React.Component {
	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<View style={styles.searchBar}>
					<TextInput
						autoCorrect={false}
						placeholder="Search any City"
						placeholderTextColor="#ffffff"
						style={styles.textInput}
						clearButtonMode="always"
					/>
				</View>
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
	searchBar: {
		flex: 1,
		paddingTop: 50
	},
	textInput: {
		width: 300,
		height: 50,
		marginTop: 40,
		backgroundColor: '#666666',
		marginHorizontal: 20,
		paddingHorizontal: 10,
		alignSelf: 'center',
		color: '#ffffff'
	},
	cards: {
		flex: 2
	}
});
