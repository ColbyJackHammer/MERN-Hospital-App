const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

//Middleware
app.use(express.json());
const cors = require("cors");
app.use(cors());

//define port
const PORT = 3002

const router = require("./routes/patient-routes");  

//localhost:3001/patient
app.use("/patient", router)  



//establish link to mongoDB Atlas Database
mongoose.connect("mongodb+srv://ColbyJackHammer:Hockey21@cluster0.hoz3i9e.mongodb.net/Hospital?retryWrites=true&w=majority"
).then(() => console.log("Connected To Database"))
.then(()=>console.log("Backend Server Listening on PORT " + PORT))
.then(() =>{
    app.listen(PORT)
}).catch((err) => console.log(err));
