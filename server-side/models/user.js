'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Product, {
        foreignKey: "authorId",
        onDelete: "Cascade",
      });
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Email already used'
      },
      validate: {
        notNull: {
          msg: 'Email is required'
        },
        notEmpty: {
          msg: 'Email is required'
        },
        isEmail: {
          msg: 'Invalid email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password is required'
        },
        notEmpty: {
          msg: "password is required"
        },
        lengthMin(value) {
          if (value.length < 5) {
            throw new Error('password minimal 5 character');
          }
        }

      }
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(instance, option) {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(instance.password, salt);
        instance.role = 'admin'
        instance.password = hash
      }
    }
  });
  return User;
};