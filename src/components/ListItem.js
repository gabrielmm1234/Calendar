import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

class ListItem extends Component {

	render() {
		const { event } = this.props.event;

		return 	(
			<TouchableWithoutFeedback>
				<View>
					<Text style={styles.titleStyle}>{event}</Text>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}

};

export default ListItem;