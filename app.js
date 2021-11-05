import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes/index.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use(routes);

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('Database connected'))
    .catch(() => console.log('Something went wrong while connecting DB'))

app.listen(process.env.PORT, () => console.log('Server is listening on port', process.env.PORT));