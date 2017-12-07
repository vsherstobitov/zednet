import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import  { Provider } from 'react-redux';
import configureStore from './src/redux/configureStore';
import { persistStore } from 'redux-persist';
import Router from './src/Router';
const store = configureStore();

export default class App extends Component<{}> {
	constructor () {
		super();
		this.state = { rehydrated: false }
	}

	componentWillMount () {
		persistStore(
			store,
			{
				storage: AsyncStorage,
				whitelist: [
					'auth'
				]
			},
			() => {
				this.setState({ rehydrated: true })
			}
		);
	}


	render () {
		const { container } = styles;
		if (!this.state.rehydrated) {
			return <View />
		}
		return (
			<Provider store={store}>
				<View style={container}>
					<Router/>
				</View>
			</Provider>
		);
	}
}

const styles = {
	container: {
		flex: 1
	}
};
