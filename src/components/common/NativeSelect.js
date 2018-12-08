import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const NativeSelect = ({ dataArray, labelKey, placeholder, onChange, value }) => {

	const items = dataArray.reduce((acc, item, index) => {
		acc.push({
			label: item[labelKey] || `Item ${index}`,
			value: index
		});
		return acc;
	}, []);


	return ( 
	<View style={styles.container}>
		<RNPickerSelect 
			value={value}
			style={{ ...pickerSelectStyles }}
			placeholder={{
				label: placeholder || 'Select a item...',
				value: null,
			}}
			items={items}
			onValueChange={onChange}
		/>
	</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		justifyContent: 'center',
		paddingHorizontal: 2,
		marginBottom: 5,
	}
});

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontSize: 16,
		paddingTop: 14,
		paddingHorizontal: 10,
		paddingBottom: 14,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 5,
		backgroundColor: 'white',
		color: 'black',
	},
});

export { NativeSelect };
