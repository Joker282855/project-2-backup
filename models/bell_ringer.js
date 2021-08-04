    const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Calendar model
class Calender extends Model {}

Calendar.init( 
    {
        
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type:Datatypes.STRING,
            allowNull: false
        },
        book: {
            type: Datatypes.STRING,
            allowNull: true
        },
        page: {
            type: Datatypes.INTEGER,
            allowNull: true,
        },
        date: {
            type: Datatypes.DATEONLY,
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