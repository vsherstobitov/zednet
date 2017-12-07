import React, { PureComponent } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

class AppScreen extends PureComponent<{}> {
	constructor (props) {
		super(props);
	}

	componentDidMount () {
		if (this.props.auth.isAuthorized) {
			//	console.log(this.props);
		} else {
			this.props.signIn();
		}
	}

	render () {
		const { userData } = this.props.auth;
		console.log(this.props.auth.userData);
		console.log(this.props.auth.userData.username);
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					{`Welcome to Zednet ${userData.username}`}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});
export default AppScreen;


