import express from 'express'
import cors from 'cors'
import requestLogger from './middlewares/requestLogger.middleware'
import discoRouter from './routes/Disco.routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(requestLogger)

app.use('/', discoRouter)

export default app