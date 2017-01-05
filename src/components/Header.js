import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
				<TouchableOpacity
	            onPress={this.onPrev}
	          	>
		            <Text style={styles.controlButtonText}>
		              Prev
		            </Text>
	          	</TouchableOpacity>

		        <Text style={styles.title}>
		          {this.props.currentMonthMoment.format(this.props.titleFormat)}
		        </Text>

		        <TouchableOpacity
	            onPress={this.onNext}
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