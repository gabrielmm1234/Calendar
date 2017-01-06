import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { firstState, updateCurrentMoment, buildMonthDays } from '../actions';
import { Toolbar } from 'react-native-material-ui';

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

	renderPrevButton() {
		return (
			<TouchableOpacity onPress={this.onButtonPrevPress.bind(this)}>
		        <Text style={styles.controlButtonText}>
		        	Prev
		        </Text>
	        </TouchableOpacity>
		);
	}

	renderNextButton() {
		return (
			<TouchableOpacity onPress={this.onButtonNextPress.bind(this)}>
		    	<Text style={styles.controlButtonText}>
		        	Next
		        </Text>
	        </TouchableOpacity>
		);
	}
	
	render() {
		return (
			<View style={styles.calendarControls}>
				<Toolbar
			        leftElement={this.renderPrevButton()}
			        rightElement={this.renderNextButton()}
			        centerElement={this.props.currentMonthMoment.format(this.props.titleFormat)}
      			/>
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
    	color: '#ffffff'
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