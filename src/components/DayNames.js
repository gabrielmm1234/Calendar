import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { dayNameState } from '../actions';

class DayNames extends Component {

  componentWillMount() {
    this.props.dayNameState();
  }

  buildDaySequence() {
    const headings = [];
    for (let i = 0; i < 7; i++) {
      const j = (i + this.props.firstDay) % 7;
      headings.push(
        <Text key={i} style={j === 0 || j === 6 ? styles.weekend : styles.day}>
          {this.props.dayNames[j]}
        </Text>
      );
    }
    return headings;
  }

  render() {
    return (
      <View style={styles.dayNamesStyle}>
        {this.buildDaySequence()}
      </View>
    );
  }
}

const styles = {
  dayNamesStyle: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1
  },

  day: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 5,
  },

  weekend: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 5,
    color: '#7300e6',
  }
}

const mapStateToProps = state => {
  const { firstDay, dayNames } = state.dayNameState;
  return { firstDay, dayNames };
};

export default connect(mapStateToProps, { dayNameState })(DayNames);