import app from './app.js'
import { connectDB } from "./db.js"

connectDB();
app.listen(8081);
console.log("Server is runing on 4000 port");