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
				<View style={{ 
					paddingTop: 20,
					paddingHorizontal: 10,
				}}>
					{this.renderRow(
						<NativeSelect 
							dataArray={professions} 
							labelKey={'title'} 
							value={this.state.professionIndex}
							placeholder={'Выберите профессию'} 
							onChange={(value) => this.setState({ professionIndex: value })}
						/>,
						<Button 
							onPress={() => this.setState(
								{ professionIndex: getRandomArrayIndex(professions) }
							)}
						>
							<Image 
								style={{ width: 50, height: 50, }}
								source={require('./img/dice.png')} 
							/>
						</Button>
					)}
				</View>

				<View style={{ paddingVertical: 20, paddingHorizontal: 10, }}>
					{this.renderRow(
						<NativeSelect 
							dataArray={dreams} 
								labelKey={'title'} 
								value={this.state.dreamIndex}
								placeholder={'Виберите мечту'}
								onChange={(value) => this.setState({ dreamIndex: value })}
						/>,
						<Button 
							onPress={() => this.setState(
								{ dreamIndex: getRandomArrayIndex(dreams) }
							)}
						>
							<Image 
								style={{ width: 50, height: 50, }}
								source={require('./img/dice.png')} 
							/>
						</Button>
					)}
				</View>
			</View>
		);
	}

	renderRow(elem1, elem2) {
		return (
			<View style={{ flexDirection: 'row', }}>
					<View style={{ flex: 1, }}>
						{elem1}
					</View>
					<View style={{ maxWidth: 100, }}>
						{elem2}
					</View>
				</View>
		);
	}
}

const styles = StyleSheet.create({

});