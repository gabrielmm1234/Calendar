import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from '../styles';

export default class Day extends Component {

  dayTextStyle = (isWeekend, isSelected, isToday, event) => {
    const dayTextStyle = [styles.day];
    
    if (isToday && !isSelected) {
      dayTextStyle.push(styles.currentDayText);
    } else if (isToday || isSelected) {
      dayTextStyle.push(styles.selectedDayText);
    } else if (isWeekend) {
      dayTextStyle.push(styles.weekendDayText);
    }
    return dayTextStyle;
  }

  render() {
    let { caption } = this.props;
    const {
      filler,
      event,
      isWeekend,
      isSelected,
      isToday,
      showEventIndicators,
    } = this.props;

    return filler
    ? (
        <TouchableWithoutFeedback>
          <View style={styles.dayButtonFiller}>
            <Text style={styles.day} />
          </View>
        </TouchableWithoutFeedback>
      )
    : (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.dayButton}>
            <Text style={this.dayTextStyle(isWeekend, isSelected, isToday, event)}>{caption}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
