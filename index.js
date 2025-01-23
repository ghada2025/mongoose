import cors from "cors"
import "dotenv/config"
import express from "express"
import helmet from "helmet"
import { connectDB } from "./config/connect-db.js"
import { personRouter } from "./routers/person.js"

const app = express()

// connect to db
connectDB()

// middlewares
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.static("public"))

// routers
app.use("/", personRouter)


app.get("/ping", async (req, res) => {
  res.send("pong")
})

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT)
})