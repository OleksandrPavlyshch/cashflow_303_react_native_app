import React, { Component } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Picker, StyleSheet, Text, View } from 'react-native';
import dataApi from './api/data';
import Header from './components/common/Header';


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
				<RNPickerSelect 
					items={this.state.items}
					onValueChange={(value) => {
              this.setState({
                  favColor: value,
              });
          }}
          onUpArrow={() => {
                                  this.inputRefs.name.focus();
                              }}
                              onDownArrow={() => {
                                  this.inputRefs.picker2.togglePicker();
                              }}
					value={this.state.favColor}

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
	{/*			<Picker>
					{
						dreams.map((profession, i) => {
							return <Picker.Item label={profession.title} value={profession.title} key={i} />;
						})
					}
				</Picker>*/}
			</View>
		);
	}
}

const styles = StyleSheet.create({

});