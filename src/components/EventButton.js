import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { ActionButton } from 'react-native-material-ui';

class EventButton extends Component {

	onButtonPress() {
		console.log(this.props.selectedMoment);
	}

	render() {
		return (
			<ActionButton onPress={this.onButtonPress.bind(this)} />
		);
	}
}

const mapStateToProps = state => {
	const { currentMonthMoment, selectedMoment } = state.initialState;
	return { currentMonthMoment, selectedMoment };
};

export default connect(mapStateToProps, {})(EventButton);
