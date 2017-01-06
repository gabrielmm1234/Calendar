import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { buildMonthDays, updateSelectedMoment } from '../actions';
import moment from 'moment';
import Day from './Day';

const DEVICE_WIDTH = Dimensions.get('window').width;

class Days extends Component {

	componentWillMount() {
		this.props.buildMonthDays();
	}  

	selectDate(date) {
		this.props.updateSelectedMoment(date);
	}

	renderMonthView(argMoment) {

	    let
	      renderIndex = 0,
	      weekRows = [],
	      days = [],
	      startOfArgMonthMoment = argMoment.startOf('month');

	    const
	      selectedMoment = moment(this.props.selectedMoment),
	      weekStart = this.props.weekStart,
	      todayMoment = moment(this.props.today),
	      todayIndex = todayMoment.date() - 1,
	      argMonthDaysCount = argMoment.daysInMonth(),
	      offset = (startOfArgMonthMoment.isoWeekday() - weekStart + 7) % 7,
	      argMonthIsToday = argMoment.isSame(todayMoment, 'month'),
	      selectedIndex = moment(selectedMoment).date() - 1,
	      selectedMonthIsArg = selectedMoment.isSame(argMoment, 'month');

	    do {
	      const dayIndex = renderIndex - offset;
	      const isoWeekday = (renderIndex + weekStart) % 7;

	      // Se o indice for positivo e nao ultrapassar o limite de dias do mes adiciona um dia
	      // no vetor. 
	      if (dayIndex >= 0 && dayIndex < argMonthDaysCount) {
	        days.push((
	          <Day
	            startOfMonth={startOfArgMonthMoment}
	            isWeekend={isoWeekday === 0 || isoWeekday === 6}
	            key={`${renderIndex}`}
	            onPress={() => {
              		this.selectDate(moment(startOfArgMonthMoment).set('date', dayIndex + 1));
            	}}
	            caption={`${dayIndex + 1}`}
	            isToday={argMonthIsToday && (dayIndex === todayIndex)}
	            isSelected={selectedMonthIsArg && (dayIndex === selectedIndex)}
	          />
	        ));
	      // Adiciona um dia de preenchimento no vetor.
	      } else {
	        days.push(<Day key={`${renderIndex}`} filler />);
	      }

	      //Se o indice de dias fechar uma semana Adiciona todos os dias no vetor da semana
	      if (renderIndex % 7 === 6) {
	      	//Preenche o vetor de semana
	        weekRows.push(
	          <View
	            key={weekRows.length}
	            style={styles.weekRow}
	          >
	            {days}
	          </View>);
	        //Esvazia o vetor de dias
	        days = [];
	        //Se atingir o limite de dias do mes sai do loop
	        if (dayIndex + 1 >= argMonthDaysCount) {
	          break;
	        }
	      }
	      //A cada dia adicionado no vetor soma um no index.
	      renderIndex += 1;
	    } while (true)
	    const containerStyle = styles.monthContainer;
	    return <View key={argMoment.month()} style={containerStyle}>{weekRows}</View>;
  	}

	render() {
		return (
			<View>
            	{this.props.calendarDates.map((date) => this.renderMonthView(moment(date)))}
          	</View>
	    );
	}
}

const styles = {
	monthContainer: {
    	width: DEVICE_WIDTH,
  	},
  	weekRow: {
    	flexDirection: 'row',
  	}
}

const mapStateToProps = state => {
	const { currentMonthMoment, selectedMoment, titleFormat, calendarDates, today } = state.initialState;
	return { currentMonthMoment, selectedMoment, titleFormat, calendarDates, today, weekStart: state.dayNameState.firstDay };
};

export default connect(mapStateToProps, { buildMonthDays, updateSelectedMoment })(Days);
