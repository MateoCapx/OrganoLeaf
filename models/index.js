const { Model, DataTypes } = require('sequelize');

// Where is Model coming from? ||||

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
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
         isEmail: true,
        }
      },
      birthday: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      employee: {
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