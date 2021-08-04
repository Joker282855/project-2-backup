const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Newsfeed extends Model {}

Newsfeed.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'newsfeed'
    }
);

module.exports = Newsfeed;