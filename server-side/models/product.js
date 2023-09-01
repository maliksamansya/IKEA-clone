"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category, { foreignKey: "categoryId" });
      Product.belongsTo(models.User, { foreignKey: "authorId" });
      Product.hasMany(models.Image, {
        foreignKey: "productId",
        onDelete: "Cascade",
      });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: `Product name is required` },
          notEmpty: { msg: `Product name is required` },
        },
      },
      slug: {
        type: DataTypes.STRING,
      },
      overview: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: `Overview is required` },
          notEmpty: { msg: `Overview is required` },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: `Description is required` },
          notEmpty: { msg: `Description is required` },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: `Price is required` },
          notEmpty: { msg: `Price is required` },
          min: {
            args: [0],
            msg: "Minimum price is 0",
          },
        },
      },
      mainImg: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: `Main image is required` },
          notEmpty: { msg: `Main image is required` },
        },
      },
      categoryId: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  Product.beforeCreate((product, options) => {
    product.slug = product.name.split(" ").join("-");
  });
  Product.beforeUpdate((product, options) => {
    product.slug = product.name.split(" ").join("-");
  });
  return Product;
};