import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import App from './containers/AppContainer';

export default () => (
	<Router>
		<Scene key="root">
			<Scene key="app" component={App} title="Zednet"/>
		</Scene>
	</Router>
)