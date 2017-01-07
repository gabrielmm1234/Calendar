import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Header from './components/Header';
import DayNames from './components/DayNames';
import Days from './components/Days';
import moment from 'moment';
import { COLOR, ThemeProvider, BottomNavigation } from 'react-native-material-ui';

const uiTheme = {
    toolbar: {
        container: {
        	flex: 1
        },
    },
};

class App extends Component {
	state = {active: 'today'};

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<ThemeProvider uiTheme={uiTheme}>
				<Provider store={store}>
					<View style={styles.container}>
						<Header />
						<DayNames />
						<Days />
					</View>
				</Provider>
			</ThemeProvider>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	}
}

export default App;