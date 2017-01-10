import React, { Component } from 'react';
import { View, Modal, Text } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import firebase from 'firebase';
import { ActionButton, Card } from 'react-native-material-ui';
import { updateEvent } from '../actions';
import { CardSection } from './CardSection';
import { Button } from './Button';
import { Input } from './Input';

class EventButton extends Component {
	state = { showModal: false };

	onButtonPress() {
		this.setState({ showModal: true });
	}

	onAccept() {
		const formatDate  = moment(this.props.selectedMoment).format('DD/MM/YYYY');
		firebase.database().ref(`/${formatDate}/event`).push( {event: this.props.event} )
		this.setState({ showModal: false });
  	}

    onDecline() {
    	this.setState({ showModal: false });
    }

	render() {
		return (
			<View style={styles.container}>
				<ActionButton onPress={this.onButtonPress.bind(this)} />

				<Modal
			      visible={this.state.showModal}
			      transparent
			      animationType="slide"
			      onRequestClose={() => {}}
			    >
			      <View style={styles.containerStyle}>

			        <CardSection style={styles.cardSectionStyle}>
			          <Input
			            label="Event"
			            placeholder="Add Event"
			            value={this.props.event}
			            onChangeText={value => this.props.updateEvent({ prop: 'event', value })}
			          />
			        </CardSection>

			        <CardSection>
			          <Button onPress={this.onAccept.bind(this)}>Add</Button>
			          <Button onPress={this.onDecline.bind(this)}>Cancel</Button>
			        </CardSection>

			      </View>
    			</Modal>
	        </View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	},
	cardSectionStyle: {
    	justifyContent: 'center'
  	},
  	containerStyle: {
	    backgroundColor: 'rgba(0, 0, 0, 0.75)',
	    position: 'relative',
	    flex: 1,
	    height: 500,
	    justifyContent: 'center'
  	}
}

const mapStateToProps = state => {
	const { currentMonthMoment, selectedMoment } = state.initialState;
	return { currentMonthMoment, selectedMoment, event: state.modalState.event };
};

export default connect(mapStateToProps, { updateEvent })(EventButton);
