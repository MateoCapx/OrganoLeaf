const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class CustomerForm extends Model {}

CustomerForm.init(
  {
    // define columns
      id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
      name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      Phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,   
            }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        isEmail: true,
        }
      },
      birthday: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isDate: true,   
            }
      },
      employees: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'CustomerForm',
  }
);

module.exports = CustomerForm;