import { Sequelize } from "sequelize";

const db = new Sequelize("node","root", "Adonis@123",{
    host:"localhost",
    dialect: "mysql",
    // logging:false
},);


export default db;