import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import Calender from '../components/calender'

export default class Init extends React.Component {
	constructor(props) {
		super(props);
		this.state = {text: ''};
	}

	render() {
		return (
			<View style={{padding: 10}}>
				<Calender></Calender>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
});