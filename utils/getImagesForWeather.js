/* eslint-disable global-require */

const images = {
	Clear: require('../assets/clear.jpeg'),
	Hail: require('../assets/light-rain.jpeg'),
	'Heavy Cloud': require('../assets/heavy-cloud.png'),
	'Light Cloud': require('../assets/light-cloud.png'),
	'Heavy Rain': require('../assets/light-rain.jpeg'),
	'Light Rain': require('../assets/light-rain.jpeg'),
	Showers: require('../assets/showers.jpeg'),
	Sleet: require('../assets/snow.jpeg'),
	Snow: require('../assets/snow.jpeg'),
	Thunder: require('../assets/thunder.png')
};

export default weather => images[weather];
