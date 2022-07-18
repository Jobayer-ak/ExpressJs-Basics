const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
// const router = express.Router();

app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev")); // return a function
app.use(cors()); // return a middleware
// app.use(router);

app.use(require("./routes"));

// app.use(globalMiddlware);
app.use((req,res,next)=>{
    const error = new Error("404 Not Found");
    error.status = 404;
    next(error)
    // res.status(404).send("<h1>404 Not Found </h1>")
})

app.use((error, req, res, next)=>{

    console.log("Error: ", error);

    if(error.status){
        res.status(error.status).send(`<h1>${error.message}</h1>`);
    }

    res.status(500).send("<h1>Something went wrong</h1>");
})


app.listen(4000, ()=>{
    console.log("Server is running on port 40000");
});

