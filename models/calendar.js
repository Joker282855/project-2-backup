const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Calendar model
class Calendar extends Model {}

Calendar.init( 
    {
        
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type:DataTypes.STRING,
            allowNull: false
        },
        book: {
            type: DataTypes.STRING,
            allowNull: true
        },
        page: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'calendar'
    }
);

module.exports = Calendar;