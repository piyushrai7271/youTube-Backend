import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path:"./env"
})



connectDB();












// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERR:", error);
//             throw error;
//         })
//     } catch (error) {
//         console.error("ERROR: ",error);
//         throw error;
//     }
// })()