import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import dataApi from './api/data';
import { Button, Header, NativeSelect } from './components/common';


type Props = {};

export default class App extends Component < Props > {


	state = {
		appData: {},
		professionIndex: null,
		dreamIndex: null,
	};

	componentDidMount() {
		dataApi.getData().then((appData) => {
			this.setState({ appData });
		});
	}

	render() {
		const professions = (this.state.appData && this.state.appData.professions) || [];
		const dreams = (this.state.appData && this.state.appData.dreams) || [];
		const logState = () => {
			console.log(this.state);
		};
		const getRandomArrayIndex = (array) => {
			return Math.floor(Math.random() * array.length);
		};

		return (
			<View style={{ flex: 1, }}>
				<Header headerText={'Cashfow 303'} />
				<View style={{ marginBottom: 20, }}>
					<NativeSelect 
						dataArray={professions} 
						labelKey={'title'} 
						value={this.state.professionIndex}
						placeholder={'Выберите профессию'} 
						onChange={(value) => this.setState({ professionIndex: value }, logState)}
					/>

					<Button 
						onPress={() => this.setState({ professionIndex: getRandomArrayIndex(professions) })}
					>
						Случайный выбор профессии
					</Button>
				</View>
				<View>
					<NativeSelect 
						dataArray={dreams} 
						labelKey={'title'} 
						value={this.state.dreamIndex}
						placeholder={'Виберите мечту'}
						onChange={(value) => this.setState({ dreamIndex: value }, logState)} 
					/>
					<Button onPress={() => this.setState({ dreamIndex: getRandomArrayIndex(dreams) })}>
						Случайный выбор мечты
					</Button>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({

});