const AppRouter = require('./routers/AppRouter')
const bodyParser = require('body-parser')
const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')


const PORT = process.env.PORT || 3003
const app = express()

app.use(logger('dev'))
app.use(helmet({ contentSecurityPolicy: false }))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.disable('X-Powered-By')    

app.use(express.static(path.join(__dirname, "client", "build")));
app.use('/APImeetsServerJs', AppRouter)

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "client", "build", "index.html")) 
)


app.listen(PORT, async () => {
  try {
    console.log(`App listening on port: ${PORT}`)
  } catch (error) {
    throw new Error('Server Error')
  }
})
