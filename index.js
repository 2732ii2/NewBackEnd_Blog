
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connection } from './db/db.js';
import router from './Routes/route.js';

const app = express();


app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({ extended: true }));




app.use("/", router);
// body pareser is basically in our word is help to get the value from the user in form of request so w'll get the data through that.
// in bookisg def : Body-parser parses is an HTTP request body that usually helps when you need to know more than just
//  the URL being hit. Specifically in the context of a POST, PATCH, or
//  PUT HTTP request where the information you want is contained in the body. Using body-parser allows you to access req






const Port='8100';

connection();

app.listen(Port,()=>{
    console.log("connected");
})

