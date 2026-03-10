import express from 'express'
import cors from 'cors'
import CookiesParser from 'cookies-parser'

const app = express()

app.use((cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})))

app.use(express.json({ limit: process.env.JSON_LIMIT }))
app.use(express.urlencoded({extended: true, limit: process.env.JSON_LIMIT}))
app.use(express.static("public"))
app.use(CookiesParser())

export { app }; //export the app
