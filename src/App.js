import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
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

		const getRandomArrayIndex = (array) => Math.floor(Math.random() * (array.length - 1));


		return (
			<View style={{ flex: 1, }}>
				<Header headerText={'Cashfow 303'} />

				<View style={{ paddingTop: 20, marginBottom: 20, flexDirection: 'row', }}>
					<View style={{ flex: 1, }}>
						<NativeSelect 
							dataArray={professions} 
							labelKey={'title'} 
							value={this.state.professionIndex}
							placeholder={'Выберите профессию'} 
							onChange={(value) => this.setState({ professionIndex: value })}
						/>
					</View>
					<View style={{ maxWidth: 100, }}>
						<Button 
							onPress={() => this.setState({ professionIndex: getRandomArrayIndex(professions) })}
						>
							<Image 
								style={{ width: 50, height: 50, }}
								source={require('./img/dice.png')} 
							/>
						</Button>
					</View>
				</View>

				<View style={{ flexDirection: 'row', }}>
					<View style={{ flex: 1, }}>
						<NativeSelect 
							dataArray={dreams} 
							labelKey={'title'} 
							value={this.state.dreamIndex}
							placeholder={'Виберите мечту'}
							onChange={(value) => this.setState({ dreamIndex: value })} 
						/>
					</View>
					<View style={{ maxWidth: 100, }}>
						<Button 
							onPress={() => this.setState({ dreamIndex: getRandomArrayIndex(dreams) })}
						>
							<Image 
								style={{ width: 50, height: 50, }}
								source={require('./img/dice.png')} 
							/>
						</Button>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({

});