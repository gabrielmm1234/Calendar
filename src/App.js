import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Header from './components/Header';

class App extends Component {
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<View style={styles.container}>
					<Header />
				</View>
			</Provider>
		);
	}
}

const styles = {
	container: {
		flex: 1,
    	paddingTop: 20,
    	backgroundColor: '#f7f7f7'
	}
}

export default App;