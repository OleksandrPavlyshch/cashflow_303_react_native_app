import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			{React.isValidElement(children)
				? children
				: (<Text style={textStyle}>
					{children}
				</Text>)
			}
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#ffffff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 13,
		paddingBottom: 12
	},
	buttonStyle: {
		overflow: 'hidden',
		// flex: 1,
		minHeight: 50,
		justifyContent: 'center',
		alignSelf: 'stretch',
		alignItems: 'center',
		backgroundColor: '#007aff',
		borderRadius: 5,
		marginLeft: 5,
		marginRight: 5
	}
};

export { Button };
