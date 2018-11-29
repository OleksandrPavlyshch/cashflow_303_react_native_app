import response from '../data/data.json';

export default {
	getData () {
		return new Promise( (resolve, reject) => {
			resolve(response);
		})
	}
};