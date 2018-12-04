import React, { Component } from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';
import dataApi from './api/data';
import { Header, NativeSelect } from './components/common';


type Props = {};

export default class App extends Component < Props > {


	state = {
		appData: {},
		items: [{
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
		],
		favSport: undefined,
		items2: [{
				label: 'Football',
				value: 'football',
			},
			{
				label: 'Baseball',
				value: 'baseball',
			},
			{
				label: 'Hockey',
				value: 'hockey',
			},
		]
	};

	componentDidMount() {
		dataApi.getData().then((appData) => {
			this.setState({
				appData: appData
			});
			console.log('appData:', this.state.appData);
		});
	}

	render() {
		const professions = (this.state.appData && this.state.appData.professions) || [];
		const dreams = (this.state.appData && this.state.appData.dreams) || [];
		return (
			<View style={{ flex: 1, }}>
				<Header headerText={'Cashfow 303'} />
					<NativeSelect 
						dataArray={professions} 
						labelKey={'title'} 
						placeholder={'Виберите профессию'} 
						onValueChange={console.log('sss')} 
					/>
				<View>
					<Picker 
						
					>
						{
							professions.map((profession, i) => {
								return <Picker.Item label={profession.title} value={profession.title} key={i} />;
							})
						}
					</Picker>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({

});