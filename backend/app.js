const express = require("express");
//const cors = require("cors");
const app = express();
const routes=require('./routes/routes')
const cors = require("cors")

const genericError = "Sorry, something went wrong!"

/*const corsOptions = {
origin: "http://localhost:8081"
};*/

//app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const whitelist = ["http://localhost:3000"] //Change to the port in which react app is running
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))


app.get("/", (req, res) => {
res.json({ message: "Bienvenido a la aplicacion." });
});

app.use('/prueba-tecnica',routes)



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	
	

console.log(`Corriendo desde el puerto http://localhost:${PORT}`);
});