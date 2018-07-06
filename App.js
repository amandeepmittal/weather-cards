import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CardsView from './components/CardsView';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.searchBar}>
					<Text> Search</Text>
				</View>
				<View style={styles.cards}>
					<CardsView backgroundColor="#ebebeb" />;
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
