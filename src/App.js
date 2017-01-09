import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import Header from './components/Header';
import DayNames from './components/DayNames';
import Days from './components/Days';
import EventButton from './components/EventButton';
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

	componentWillMount() {
		var config = {
		    apiKey: "AIzaSyC-iFcNFyVMNYRggvIF4HTcp6DX4uss8Eo",
		    authDomain: "calendar-fbd1e.firebaseapp.com",
		    databaseURL: "https://calendar-fbd1e.firebaseio.com",
		    storageBucket: "calendar-fbd1e.appspot.com",
		    messagingSenderId: "777207980659"
	  	};

  		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<ThemeProvider uiTheme={uiTheme}>
				<Provider store={store}>
					<View style={styles.container}>
						<Header />
						<DayNames />
						<Days />
        				<EventButton />
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