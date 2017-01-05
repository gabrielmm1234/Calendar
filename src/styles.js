import { Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = {
	dayButtonFiller: {
		padding: 5,
		width: DEVICE_WIDTH / 7,
	},
	day: {
		fontSize: 16,
		alignSelf: 'center',
	},
	dayButton: {
    	alignItems: 'center',
    	padding: 5,
    	width: DEVICE_WIDTH / 7,
    	borderTopWidth: 1,
    	borderTopColor: '#e9e9e9',
  	},
	currentDayText: {
		color: 'red',
	},
	selectedDayText: {
		color: 'red',
		fontWeight: 'bold',
	},
	weekendDayText: {
		color: '#3399ff',
	}
}

export default styles;
