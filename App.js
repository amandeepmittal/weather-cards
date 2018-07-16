import React from 'react';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	ImageBackground,
	StatusBar
} from 'react-native';
import SingleCardView from 'react-native-simple-card';

import getImageForWeather from './utils/getImagesForWeather';
import { fetchLocationId, fetchWeather } from './utils/api';

import SearchInput from './components/SearchInput';
import WeatherText from './components/WeatherText';

export default class App extends React.Component {
	state = {
		loading: false,
		error: false,
		location: '',
		temperature: 0,
		humidity: 0,
		weather: '',
		minTemp: 0,
		maxTemp: 0,
		windSpeed: 0
	};

	componentDidMount() {
		this.handleUpdateLocation('San Francisco');
	}

	handleUpdateLocation = async city => {
		if (!city) return;

		this.setState({ loading: true }, async () => {
			try {
				const locationId = await fetchLocationId(city);
				const {
					location,
					weather,
					temperature,
					humidity,
					minTemp,
					maxTemp,
					windSpeed
				} = await fetchWeather(locationId);

				this.setState({
					loading: false,
					error: false,
					location,
					weather,
					temperature,
					humidity,
					minTemp,
					maxTemp,
					windSpeed
				});
			} catch (e) {
				this.setState({
					loading: false,
					error: true
				});
			}
		});
	};

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
		} = this.state;
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<StatusBar barStyle="light-content" />
				<ImageBackground
					source={getImageForWeather(weather)}
					style={styles.imageContainer}
					imageStyle={styles.image}
				>
					<SearchInput
						placeholder="Select a City"
						onSubmit={this.handleUpdateLocation}
					/>
					<View style={styles.cards}>
						<SingleCardView backgroundColor="#ffffff">
							<WeatherText
								location={location}
								loading={loading}
								weather={weather}
								temperature={temperature}
								humidity={humidity}
								error={error}
								minTemp={minTemp}
								maxTemp={maxTemp}
								windSpeed={windSpeed}
							/>
						</SingleCardView>
					</View>
				</ImageBackground>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	imageContainer: {
		flex: 1
	},
	image: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover'
	},
	cards: {
		flex: 2
	}
});
