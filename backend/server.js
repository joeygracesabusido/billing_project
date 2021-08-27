const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const BillingRouter = require('./routes/billing')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// middle ware

app.use(cors());
app.use(express.json());

// mongo connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection is established")
})

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

// const connection = mongoose.connection;
// connection.once('open', ()=> {
//     console.log("MongoDB database connection is established")
// })

app.use('/billing',BillingRouter)

app.listen(port, ()=> {
    console.log(`Server is running in port : ${port}`);
})