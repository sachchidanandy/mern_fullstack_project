const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const { PORT, MONGO_URI } = require('./config.js');
const routes = require('./routes')


const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', routes);

mongoose.connect(MONGO_URI).then(() => {
    app.listen(PORT, () => console.log(`Server is listening at PORT: ${PORT}`));
}).catch(err => {
    console.log(`Database connection Error, Unable to start server ERR : ${err}`);
})

