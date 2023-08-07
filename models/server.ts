import express,{Application} from "express";
import userRoutes from '../routes/user';
import cors from "cors";
import db from "../db/connections";

class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        users: "/api/users",
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT ?? "8000";

        this.dbConnection();
        //Starting methods
        this.middlewares();
        this.routes();
    }

    //TODO: Connect to data base

    async dbConnection(){
        try{
            await db.authenticate();
            console.log("Database is online")

        }catch(err){ 
            throw new Error(`Error ${err}`);
            
        }
    }


    // Middlewares
    middlewares(){
        // CORS
        this.app.use( cors());

        // Body lecture
        this.app.use(express.json());

        // Public folder
        this.app.use(express.static("public"));
    }
    
    routes(){
        this.app.use(this.apiPaths.users, userRoutes)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running on port ${this.port}`)
        })
    }




}

// export default because there is only one class to export
export default Server;