const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const swaggerUI = require('swagger-ui-express')

const app = express();
connectDB();

app.use(express.json());

app.use('/api/v1/auth', require('./routes/authRoutes'))
app.use('/api/v1/users', require('./routes/userRoutes'))


const swaggerDocument = require('./swagger/swagger.json')

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server rinning on port ${PORT}`))