const express = require ('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://akashdealwis:akash2002@cluster01.nwbousi.mongodb.net/studentDB?retryWrites=true&w=majority&appName=Cluster01';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('connected to mongoDB');
    }
    catch(error) {
        console.log('MongoDB Error:', error);cls
    }
};

connect();

const server = app.listen(port,host, () => {
    console.log(`Node server is listening to ${server.address().port}`)
});

app.use('/api',router);