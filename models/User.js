import { Sequelize, DataTypes } from'sequelize';
import database from "../database.js"

const User = database.define("admin", {
    user : {
        type : DataTypes.STRING,
        allowNull : false
    },
    nama : {
        type : DataTypes.STRING,
        allowNull : false
    },
    pass : {
        type : DataTypes.STRING,
        allowNull : false
    }
},{freezeTableName: true})

export default User