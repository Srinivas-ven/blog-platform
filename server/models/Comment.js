const { DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const Comment = sequelize.define("Comment", {

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

});

module.exports = Comment;