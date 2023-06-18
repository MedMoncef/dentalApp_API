import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import 'dotenv/config'
import databaseConnexion from './tools/databaseConnexion'
import User from './routes/user'
import Supplier from './routes/supplier'
import Product from './routes/product'
import Procedure from './routes/procedure'
import Prescription from './routes/prescription'
import Payment from './routes/payment'
import Patient from './routes/patient'
import Medication from './routes/medication'
import Invoice from './routes/invoice'
import Consultation from './routes/consultation'
import Categorie from './routes/category'
import AppointmentReminder from './routes/appointmentReminder'
import Appointment from './routes/appointment'

import bodyParser from 'body-parser'
const app = express()
const port = process.env.PORT

//connect to mongodb database
databaseConnexion()

//enable ejs
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

//enable middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//Bdd
app.use('/',User)
app.use('/',Supplier)
app.use('/',Product)
app.use('/',Procedure)
app.use('/',Prescription)
app.use('/',Payment)
app.use('/',Patient)
app.use('/',Medication)
app.use('/',Invoice)
app.use('/',Consultation)
app.use('/',Categorie)
app.use('/',AppointmentReminder)
app.use('/',Appointment)

//enable routes
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})