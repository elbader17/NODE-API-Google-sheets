// import
const express =require('express');
const bodyParser =require('body-parser');
const app = express();


app.set('views','./src/views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


// static file
app.use(express.static(__dirname + '/public/'));


//routes
app.use(require("./routes/google.routes"));




//start the server
const PORT = process.env.SERVER_PORT || 5001;
app.listen(PORT,()=>
    console.log(`server corriendo en el puerto ${PORT}`)
);