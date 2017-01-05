import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Header from './components/Header';
import DayNames from './components/DayNames';
import Days from './components/Days';

class App extends Component {
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<View style={styles.container}>
					<Header />
					<DayNames />
					<Days />
				</View>
			</Provider>
		);
	}
}

const styles = {
	container: {
		flex: 1,
    	paddingTop: 20,
    	backgroundColor: '#cce6ff'
	}
}

export default App;