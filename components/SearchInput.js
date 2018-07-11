import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

class SeachInput extends Component {
	render() {
		return (
			<View style={styles.searchBar}>
				<TextInput
					autoCorrect={false}
					placeholder={this.props.placeholder}
					placeholderTextColor="#ffffff"
					underlineColorAndroid="transparent"
					style={styles.textInput}
					clearButtonMode="always"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
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
	}
});

export default SeachInput;
