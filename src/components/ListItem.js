import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './CardSection';

class ListItem extends Component {

	render() {
		const { event } = this.props.event;

		return 	(
			<TouchableWithoutFeedback>
				<View style={styles.container}>
					<CardSection>
						<Text style={styles.titleStyle}>{event}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		paddingTop: 5
	},

	titleStyle: {
		flex: 1,
		fontSize: 18,
		paddingLeft: 15
	}

};

export default ListItem;