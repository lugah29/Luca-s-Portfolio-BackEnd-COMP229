import express from 'express';
import mongoose from 'mongoose';
import config from './config/config.js'; 

const app = express();
const PORT = config.port;


app.use(express.json());


mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to the database!");
})
.catch(err => console.log(err));


app.get('/', (req, res) => {
    res.json({ message: "Welcome to DressStore application." }); 
});


app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.info(`Server is running on http://localhost:${PORT}`);
});
