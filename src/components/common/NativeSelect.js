import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const NativeSelect = ({ placeholder }) => {
	return ( 
	<View style={styles.container}>
		<RNPickerSelect 
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
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		paddingHorizontal: 10,
		borderRadius: 4,
		borderWidth: 0.5,
		borderColor: '#d6d7da',
	},
});

export { NativeSelect };
