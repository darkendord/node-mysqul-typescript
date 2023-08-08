import {DataTypes} from "sequelize";
import db from "../db/connections";

const User = db.define("user",{
     id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    user_name:{
        type: DataTypes.STRING
    },
    user_email:{
        type: DataTypes.STRING
    },
    user_status:{
        type: DataTypes.BOOLEAN,
    },
},
{
    timestamps: false
}
);


export default User;