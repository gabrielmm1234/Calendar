import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { firstState, updateCurrentMoment, buildMonthDays } from '../actions';

class Header extends Component {
	componentWillMount() {
		this.props.firstState();
	}

	onButtonPrevPress() {
		const nextMoment = moment(this.props.currentMonthMoment).subtract(1, 'month');
		this.props.updateCurrentMoment(nextMoment);
		this.props.buildMonthDays();
	}

	onButtonNextPress() {
		const nextMoment = moment(this.props.currentMonthMoment).add(1, 'month');
		this.props.updateCurrentMoment(nextMoment);
		this.props.buildMonthDays();
	}
	
	render() {
		return (
			<View style={styles.calendarControls}>
				<TouchableOpacity
	            onPress={this.onButtonPrevPress.bind(this)}
	          	>
		            <Text style={styles.controlButtonText}>
		              Prev
		            </Text>
	          	</TouchableOpacity>

		        <Text style={styles.title}>
		          {this.props.currentMonthMoment.format(this.props.titleFormat)}
		        </Text>

		        <TouchableOpacity
	            onPress={this.onButtonNextPress.bind(this)}
	          	>
		            <Text style={styles.controlButtonText}>
		              Next
		            </Text>
	          </TouchableOpacity>
	      	</View>
	    );
	}
}

const styles = {
	calendarControls: {
    	flexDirection: 'row',
    	backgroundColor: '#F8F8F8',
    	justifyContent: 'center',
    	alignItems: 'center',
    	height: 60,
    	shadowColor: '#000',
    	shadowOffset: { width: 0, height: 2 },
    	shadowOpacity: 0.2,
    	elevation: 2,
    	position: 'relative'
  	},

  	controlButtonText: {
    	margin: 10,
    	fontSize: 15,
    	color: '#3399ff'
  	},

  	title: {
	    flex: 1,
	    textAlign: 'center',
	    fontSize: 15,
	    margin: 10,
  	}	
}

const mapStateToProps = state => {
	const { currentMonthMoment, selectedMoment, titleFormat } = state.initialState;
	return { currentMonthMoment, selectedMoment, titleFormat };
};

export default connect(mapStateToProps, { firstState, updateCurrentMoment, buildMonthDays })(Header);