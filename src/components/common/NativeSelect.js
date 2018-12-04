import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const NativeSelect = ({ placeholder }) => {
	return ( 
	<View style={styles.container}>
		<RNPickerSelect 
		style={{ ...pickerSelectStyles }}
			placeholder={{
				label: placeholder || 'Select a item...',
				value: null,
			}}
			items={[
				{
					label: 'Red',
					value: 'red',
				},
				{
					label: 'Orange',
					value: 'orange',
				},
				{
					label: 'Blue',
					value: 'blue',
				},
			]}
			onValueChange={
				() => console.log('log')
			}
		/>
	</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		justifyContent: 'center',
		paddingHorizontal: 2,
	}
});

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontSize: 16,
		paddingTop: 13,
		paddingHorizontal: 10,
		paddingBottom: 12,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 4,
		backgroundColor: 'white',
		color: 'black',
	},
});

export { NativeSelect };
