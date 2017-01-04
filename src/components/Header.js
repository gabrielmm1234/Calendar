import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { firstState } from '../actions';

class Header extends Component {
	componentWillMount() {
		this.props.firstState();
	}
	
	render() {
		return (
			<View style={styles.calendarControls}>
		        <Text style={styles.title}>
		          {this.props.currentMonthMoment.format(this.props.titleFormat)}
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

const mapStateToProps = state => {
	const { currentMonthMoment, selectedMoment, titleFormat } = state.initialState;
	return { currentMonthMoment, selectedMoment, titleFormat };
};

export default connect(mapStateToProps, { firstState })(Header);