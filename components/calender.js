import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native'

class Calender extends React.Component {
	_renderHeader () {
		const info = ['S','M','T','W','T','F','S'];
		return (
			<View style={styles.header}>
				{info.map((item,index)=>{
					return (
						<Text style={styles.headerText} key={index}>{item}</Text>
					)
				})}
			</View>
		)
	}

	render () {
		return (
			<ScrollView>
				<View>
					{this._renderHeader()}
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		flex:1,
		justifyContent: 'space-between',
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#ccc',
		marginTop: 5,
		paddingLeft: 10,
		paddingRight: 10,
	},
	headerText: {
		fontSize: 14,
		lineHeight: 40,
	}
});

export default Calender