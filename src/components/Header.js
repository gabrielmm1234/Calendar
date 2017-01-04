import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

class Header extends Component {

	static defaultProps = {
		startDate: moment().format('YYYY-MM-DD'),
		selectedDate: moment().format(),
		titleFormat: 'MMMM YYYY'
	}

	state = {
	    currentMonthMoment: moment(this.props.startDate),
	    selectedMoment: moment(this.props.selectedDate),
  	};

	render() {
		return (
			<View style={styles.calendarControls}>
		        <Text style={styles.title}>
		          {this.state.currentMonthMoment.format(this.props.titleFormat)}
		        </Text>
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

  	title: {
	    flex: 1,
	    textAlign: 'center',
	    fontSize: 15,
	    margin: 10,
  	}	
}

export default connect(null, {})(Header);