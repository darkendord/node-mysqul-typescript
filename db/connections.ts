import { Sequelize } from "sequelize";

const db = new Sequelize("node","root", "your password",{
    host:"localhost",
    dialect: "mysql",
    // logging:false
},);


export default db;