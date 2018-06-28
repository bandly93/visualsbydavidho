import { Sequelize } from 'sequelize';

export const photoModel = (sequelize) => {
	let Photo = sequelize.define('Photo' , {
		name : Sequelize.STRING,
		path : Sequelize.STRING,
	})
	return Photo
}

module.exports = {
	photoModel,
}
